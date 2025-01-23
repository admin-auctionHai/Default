package com.auction.z_backend.security.jwt;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.auction.z_backend.model.User.UserBidder;
import com.auction.z_backend.model.User.UserVendor;
import com.auction.z_backend.repository.BidderUserRepository;
import com.auction.z_backend.repository.VendorUserRepository;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.auction.z_backend.common.enums.UserTypes;
import com.auction.z_backend.security.userDetails.CustomUserDetails;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private BidderUserRepository bidderUserRepository;

    @Autowired
    private VendorUserRepository vendorUserRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException, java.io.IOException {
        try {
            String jwt = getJwtFromRequest(request);

            if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
                Long userId = tokenProvider.getUserIdFromToken(jwt);
                UserTypes userType = tokenProvider.getUserTypeFromToken(jwt);
                String loginId = tokenProvider.getLoginIdFromToken(jwt);

                // Load user details based on user type
                UserDetails userDetails;
                if (userType == UserTypes.BIDDER) {
                    // Long userIdAsLong = Long.valueOf(userId);
                    UserBidder bidder = bidderUserRepository.findByLoginId(loginId)
                            .orElseThrow(() -> new UsernameNotFoundException("Bidder not found"));
                    userDetails = new CustomUserDetails(bidder.getId(), bidder.getLoginId(), 
                            bidder.getPassword(), userType, Collections.emptyList());
                } else {
                    UserVendor vendor = vendorUserRepository.findByLoginId(loginId)
                            .orElseThrow(() -> new UsernameNotFoundException("Vendor not found"));
                    userDetails = new CustomUserDetails(vendor.getId(), vendor.getLoginId(), 
                            vendor.getPassword(), userType, Collections.emptyList());
                }

                UsernamePasswordAuthenticationToken authentication = 
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception ex) {
            logger.error("Could not set user authentication in security context", ex);
        }

        filterChain.doFilter(request, response);
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}