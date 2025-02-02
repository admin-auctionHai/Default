package com.auction.z_backend.bidder.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auction.z_backend.auth.dto.response.AuthResponse;
import com.auction.z_backend.bidder.dto.request.BidderSignupRequest;
import com.auction.z_backend.bidder.service.BidderRegisterService;

@RestController
@RequestMapping("/api/bidder")
@CrossOrigin(origins = "http://localhost:3000")
public class BidderController {

    private final BidderRegisterService registerTheBidder;
    private static final Logger logger = LoggerFactory.getLogger(BidderController.class);

    public BidderController(BidderRegisterService registerTheBidder){
        this.registerTheBidder = registerTheBidder;   
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> bidderRegisterController(@RequestBody @Valid BidderSignupRequest request, BindingResult bindingResult){
        //Perform Validation checks if required
        System.out.println("Here It is");
        if(bindingResult.hasErrors()){
            System.out.println("Here It is");
            logger.debug("Request is failed in validation checks");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error in validation check or request");
        }
        logger.debug("passed the validation checks");
        try {
            AuthResponse response = registerTheBidder.bidderRegister(request);
            System.out.println(response);
            return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
        } catch (Exception e) {
            logger.debug("Error occured while getting response from service");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error occur in receiving service response "+e.getMessage());
        }

    }
}