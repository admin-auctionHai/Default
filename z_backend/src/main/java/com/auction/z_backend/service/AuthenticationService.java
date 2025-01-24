package com.auction.z_backend.service;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auction.z_backend.auth.dto.request.LoginRequest;
import com.auction.z_backend.auth.dto.response.AuthResponse;
import com.auction.z_backend.bidder.dto.request.BidderSignupRequest;
import com.auction.z_backend.bidder.model.UserBidder;
import com.auction.z_backend.bidder.repository.BidderUserRepository;
import com.auction.z_backend.common.enums.UserTypes;
import com.auction.z_backend.security.jwt.JwtTokenProvider;
import com.auction.z_backend.vendor.dto.request.VendorSignupRequest;
import com.auction.z_backend.vendor.model.UserVendor;
import com.auction.z_backend.vendor.repository.VendorUserRepository;

@Service
public class AuthenticationService {
    
    private final BidderUserRepository bidderUserRepository;
    private final VendorUserRepository vendorUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    
    public AuthenticationService(BidderUserRepository bidderUserRepository, 
                            VendorUserRepository vendorUserRepository,
                            PasswordEncoder passwordEncoder,
                            JwtTokenProvider jwtTokenProvider) {
        this.bidderUserRepository = bidderUserRepository;
        this.vendorUserRepository = vendorUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public AuthResponse authenticate(LoginRequest request) {
        // First try bidder table
        Optional<UserBidder> bidderOpt = bidderUserRepository.findByLoginId(request.getLoginId());
        if (bidderOpt.isPresent()) {
            UserBidder bidder = bidderOpt.get();
            if (passwordEncoder.matches(request.getPassword(), bidder.getPassword())) {
                String token = jwtTokenProvider.generateToken(bidder.getId(),request.getLoginId(), UserTypes.BIDDER);
                return new AuthResponse(bidder.getId(),bidder.getLoginId(),token,UserTypes.BIDDER,bidder.getName());
            }
            throw new RuntimeException("Invalid credentials");
        }
        
        // If not found in bidder table, try vendor table
        Optional<UserVendor> vendorOpt = vendorUserRepository.findByLoginId(request.getLoginId());
        if (vendorOpt.isPresent()) {
            UserVendor vendor = vendorOpt.get();
            if (passwordEncoder.matches(request.getPassword(), vendor.getPassword())) {
                String token = jwtTokenProvider.generateToken(vendor.getId(),vendor.getLoginId(), UserTypes.VENDOR);
                return new AuthResponse(
                    vendor.getId(),
                    vendor.getLoginId(),
                    token,
                    UserTypes.VENDOR,
                    vendor.getName()
                );
            }
            throw new RuntimeException("Invalid credentials");
        }
        
        throw new RuntimeException("User not found");
    }
    
    public AuthResponse vendorSignUp(VendorSignupRequest request){
        if (bidderUserRepository.existsByLoginId(request.getLoginId())|| vendorUserRepository.existsByLoginId(request.getLoginId())){
            throw new RuntimeException("Login ID Already Present");
        }
        
        String hashedPassword = passwordEncoder.encode(request.getPassword());

        if(request.getUserType() == UserTypes.VENDOR){
            if(request.getTitle() == null){
                throw new RuntimeException("Full Name is required for Vendor Regstrtaion");
            }

            UserVendor vendor = new UserVendor();
            vendor.setLoginId(request.getLoginId());
            vendor.setPassword(hashedPassword);
            vendor.setEmail(request.getCorresEmail());
            vendor.setContactNumber(request.getContactNumber());
            vendor.setName(request.getTitle());
            vendor.setDesignation(request.getDesig());
            vendor.setTypeOfUser(request.getUserType());
            vendor.setDateOfBirth(request.getDob());


            vendor.setCompanyDetails(request.getCompanyDetails());
            
            UserVendor savedVendor = vendorUserRepository.save(vendor);
            String token = jwtTokenProvider.generateToken(savedVendor.getId(), savedVendor.getLoginId(), UserTypes.VENDOR);

            return new AuthResponse(savedVendor.getId(),savedVendor.getLoginId(),token,UserTypes.VENDOR,savedVendor.getName());
        }
        throw new RuntimeException("Bad Request");
    }

    public AuthResponse bidderSignUp(BidderSignupRequest request) {
        // Check if loginId exists in either table
        if (bidderUserRepository.existsByLoginId(request.getLoginId()) || 
            vendorUserRepository.existsByLoginId(request.getLoginId())) {
            throw new RuntimeException("Login ID already exists");
        }
        
        String hashedPassword = passwordEncoder.encode(request.getPassword());
        
        if (request.getUserType() == UserTypes.BIDDER) {
            if (request.getTitle() == null) {
                throw new RuntimeException("Full name is required for bidder registration");

            }
            
            UserBidder bidder = new UserBidder();
            bidder.setLoginId(request.getLoginId());
            bidder.setPassword(hashedPassword);
            bidder.setEmail(request.getCorresEmail());
            bidder.setContactNumber(request.getContactNumber());
            bidder.setName(request.getTitle());
            bidder.setDesignation(request.getDesig());
            bidder.setTypeOfUser(UserTypes.BIDDER);
            bidder.setDateOfBirth(request.getDob());
            bidder.setCompanyDetails(request.getCompanyDetails());
            
            UserBidder savedBidder = bidderUserRepository.save(bidder);
            String token = jwtTokenProvider.generateToken(savedBidder.getId(),savedBidder.getLoginId(), UserTypes.BIDDER);
            
            return new AuthResponse(
                savedBidder.getId(),
                savedBidder.getLoginId(),
                token,
                UserTypes.BIDDER,
                savedBidder.getName()
            );
        }
        throw new RuntimeException("Bad Request for registering");
    }
}