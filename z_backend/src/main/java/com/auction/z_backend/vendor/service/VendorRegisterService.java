package com.auction.z_backend.vendor.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auction.z_backend.auth.dto.response.AuthResponse;
import com.auction.z_backend.bidder.repository.BidderUserRepository;
import com.auction.z_backend.common.enums.UserTypes;
import com.auction.z_backend.security.jwt.JwtTokenProvider;
import com.auction.z_backend.vendor.dto.request.VendorSignupRequest;
import com.auction.z_backend.vendor.model.UserVendor;
import com.auction.z_backend.vendor.model.VendorCompanyDetails;
import com.auction.z_backend.vendor.repository.VendorUserRepository;

import jakarta.transaction.Transactional;

@Service
public class VendorRegisterService {

    private final VendorUserRepository vendorUserRepository;
    private final BidderUserRepository bidderUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    private static final Logger logger = LoggerFactory.getLogger(VendorRegisterService.class);
    
    public VendorRegisterService(VendorUserRepository vendorUserRepository, BidderUserRepository bidderUserRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider){
        this.vendorUserRepository = vendorUserRepository;
        this.bidderUserRepository = bidderUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Transactional
    public AuthResponse vendorRegister(VendorSignupRequest request){      

        logger.debug("Vendor Signup Request is reached till its Service");
        if(request.getLoginId().equals("")){
            throw new RuntimeException("ErrorCode:-1 Valid request is not reached to backend");
        }

        logger.debug("Checking for existance in repositories");

        try {
            if(!bidderUserRepository.existsByLoginId(request.getLoginId()) & !vendorUserRepository.existsByLoginId(request.getLoginId())){

                if(request.getUserType()==UserTypes.VENDOR){

                    String hashedPassword = passwordEncoder.encode(request.getPassword());
                    
                    UserVendor vendor = new UserVendor();
                    VendorCompanyDetails vendorDetails = request.getCompanyDetails();

                    vendor.setLoginId(request.getLoginId());
                    vendor.setEmail(request.getCorresEmail());
                    vendor.setPassword(hashedPassword);
                    vendor.setName(request.getTitle());
                    vendor.setContactNumber(request.getContactNumber());
                    vendor.setTypeOfUser(request.getUserType());

                    logger.debug("Vendor Details are Stored now storing Company details");

                    try {
                        
                        VendorCompanyDetails vendorCompanyDetails = setVendorCompanyDetails(vendorDetails);
                        
                        logger.debug("User Company Details are populated");

                        vendor.setCompanyDetails(vendorCompanyDetails);

                        try {

                            UserVendor savedVendor = vendorUserRepository.save(vendor);
                            logger.debug("User is successfully registered to the database");

                            //Perform some more action related to user creation Note-- ONLY IMPORTANT ONES OTHERWISE
                            // ENTRIES IN DATABASE WILL ROLL BACK

                            try {
                                String token = jwtTokenProvider.generateToken(savedVendor.getId(), hashedPassword, savedVendor.getTypeOfUser());
                                logger.debug("Token Generated : "+token);
                                return new AuthResponse(
                                    savedVendor.getId(),
                                    savedVendor.getLoginId(),
                                    token,
                                    UserTypes.VENDOR,
                                    savedVendor.getName()
                                );
                            } catch (Exception e) {
                                throw new RuntimeException("ErrorCode:-5 Token Creation Failed");
                            }

                            
                        } catch (Exception e) {
                            throw new RuntimeException("ErrorCode:-6 Failed to save the vendor data "+e.getMessage());
                        }

                    } catch (Exception e) {
                        throw new RuntimeException("ErrorCode:-7 Error in setting Vendor Company Details "+e.getMessage());
                    }
                }
                else{
                    throw new RuntimeException("ErrorCode:-8 UserType is not according to Registration Type");
                }

            }
            else{
                throw new RuntimeException("ErrorCode:-2 User already exist");
            }
        } catch (Exception e) {
            logger.debug("ErrorCode:-10 "+e.getMessage());
        }
        return new AuthResponse();
    }

    private VendorCompanyDetails setVendorCompanyDetails(VendorCompanyDetails vendorDetails){

        VendorCompanyDetails vendorCompanyDetails = new VendorCompanyDetails();
        vendorCompanyDetails.setCompanyName(vendorDetails.getCompanyName());
        vendorCompanyDetails.setCompanyRegNumber(vendorDetails.getCompanyRegNumber());
        vendorCompanyDetails.setRegisterdAddress(vendorDetails.getRegisterdAddress());
        vendorCompanyDetails.setPartnersDetail(vendorDetails.getPartnersDetail());
        vendorCompanyDetails.setForeignC(vendorDetails.getForeignC());
        vendorCompanyDetails.setCity(vendorDetails.getCity());
        vendorCompanyDetails.setState(vendorDetails.getState());
        vendorCompanyDetails.setPostalCode(vendorDetails.getPostalCode());
        vendorCompanyDetails.setPan_tan(vendorDetails.getPan_tan());
        vendorCompanyDetails.setYoestabilishing(vendorDetails.getYoestabilishing());
        vendorCompanyDetails.setCompanyNature(vendorDetails.getCompanyNature());
        vendorCompanyDetails.setCompanyLegalStatus(vendorDetails.getCompanyLegalStatus());
        vendorCompanyDetails.setCompanyCategory(vendorDetails.getCompanyCategory());
        vendorCompanyDetails.setTypeOfUserRegistered(vendorDetails.getTypeOfUserRegistered());

        return vendorCompanyDetails;

    }
}
