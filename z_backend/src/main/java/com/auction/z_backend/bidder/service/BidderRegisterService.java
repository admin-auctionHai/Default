package com.auction.z_backend.bidder.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auction.z_backend.auth.dto.response.AuthResponse;
import com.auction.z_backend.bidder.dto.request.BidderSignupRequest;
import com.auction.z_backend.bidder.model.BidderCompanyDetails;
import com.auction.z_backend.bidder.model.UserBidder;
import com.auction.z_backend.bidder.repository.BidderUserRepository;
import com.auction.z_backend.common.enums.UserTypes;
import com.auction.z_backend.security.jwt.JwtTokenProvider;
import com.auction.z_backend.vendor.repository.VendorUserRepository;

import jakarta.transaction.Transactional;

@Service
public class BidderRegisterService {

    private final BidderUserRepository bidderUserRepository;
    private final VendorUserRepository vendorUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    private static final Logger logger = LoggerFactory.getLogger(BidderRegisterService.class);

    public BidderRegisterService(BidderUserRepository bidderUserRepository, VendorUserRepository vendorUserRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider) {
        this.bidderUserRepository = bidderUserRepository;
        this.vendorUserRepository = vendorUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Transactional
    public AuthResponse bidderRegister(BidderSignupRequest request) {
        logger.debug("Bidder Signup Request is reached till its Service");

        if (request.getLoginId().isEmpty()) {
            throw new RuntimeException("ErrorCode:-1 Valid request is not reached to backend");
        }

        logger.debug("Checking for existence in repositories");

        try {
            if (!vendorUserRepository.existsByLoginId(request.getLoginId()) && !bidderUserRepository.existsByLoginId(request.getLoginId())) {
                
                if (request.getUserType() == UserTypes.BIDDER) {

                    String hashedPassword = passwordEncoder.encode(request.getPassword());

                    UserBidder bidder = new UserBidder();
                    bidder.setLoginId(request.getLoginId());
                    bidder.setEmail(request.getCorresEmail());
                    bidder.setPassword(hashedPassword);
                    bidder.setName(request.getTitle());
                    bidder.setContactNumber(request.getContactNumber());
                    bidder.setTypeOfUser(request.getUserType());

                    logger.debug("Bidder details are being stored");

                    try {

                        BidderCompanyDetails company = setBidderCompanyDetails(request.getCompanyDetails());

                        bidder.setCompanyDetails(company);

                        UserBidder savedBidder = bidderUserRepository.save(bidder);
                        logger.debug("Bidder is successfully registered to the database");

                        try {
                            String token = jwtTokenProvider.generateToken(savedBidder.getId(), hashedPassword, savedBidder.getTypeOfUser());
                            logger.debug("Token Generated: " + token);

                            return new AuthResponse(
                                savedBidder.getId(),
                                savedBidder.getLoginId(),
                                token,
                                UserTypes.BIDDER,
                                savedBidder.getName()
                            );
                        } catch (Exception e) {
                            throw new RuntimeException("ErrorCode:-5 Token Creation Failed");
                        }
                    } catch (Exception e) {
                        throw new RuntimeException("ErrorCode:-6 Failed to save the bidder data: " + e.getMessage());
                    }
                } else {
                    throw new RuntimeException("ErrorCode:-8 UserType is not according to Registration Type");
                }

            } else {
                throw new RuntimeException("ErrorCode:-9 User already exists");
            }
        } catch (Exception e) {
            logger.debug("ErrorCode:-10 " + e.getMessage());
        }

        return new AuthResponse();
    }

    private BidderCompanyDetails setBidderCompanyDetails(BidderCompanyDetails bidderDetails) {
        BidderCompanyDetails newBidderDetails = new BidderCompanyDetails();
        newBidderDetails.setCompanyName(bidderDetails.getCompanyName());
        newBidderDetails.setCompanyRegNumber(bidderDetails.getCompanyRegNumber());
        newBidderDetails.setRegisterdAddress(bidderDetails.getRegisterdAddress());
        newBidderDetails.setCity(bidderDetails.getCity());
        newBidderDetails.setState(bidderDetails.getState());
        newBidderDetails.setPostalCode(bidderDetails.getPostalCode());
        newBidderDetails.setPan_tan(bidderDetails.getPan_tan());
        newBidderDetails.setPartnersDetail(bidderDetails.getPartnersDetail());
        newBidderDetails.setCompanyLegalStatus(bidderDetails.getCompanyLegalStatus());
        newBidderDetails.setCompanyCategory(bidderDetails.getCompanyCategory());
        newBidderDetails.setTypeOfUserRegistered(bidderDetails.getTypeOfUserRegistered());
        newBidderDetails.setYoestabilishing(bidderDetails.getYoestabilishing());
    
        return newBidderDetails;
    }
    
}