package com.auction.z_backend.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.auction.z_backend.auth.dto.request.LoginRequest;
import com.auction.z_backend.auth.dto.response.AuthResponse;
import com.auction.z_backend.bidder.dto.request.BidderSignupRequest;
import com.auction.z_backend.dto.request.TestingRequest;
import com.auction.z_backend.dto.response.TestResponse;
import com.auction.z_backend.model.MessageResponse;
import com.auction.z_backend.service.AuthenticationService;
import com.auction.z_backend.service.testingService;
import com.auction.z_backend.vendor.dto.request.VendorSignupRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    @Autowired
    private final AuthenticationService authService;

    @Autowired
    private final testingService testService;

    public AuthController(AuthenticationService authService,testingService testService){
        this.authService = authService;
        this.testService = testService;
    }

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @GetMapping("/")
    public ResponseEntity<?> home(){
        logger.debug("Requestkkk----------");
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(new MessageResponse("Backend Is Working"));
    }

    @PostMapping("/testing")
    public ResponseEntity<?> testing(@RequestParam String name,@RequestParam String sign){
        logger.debug("Testing request reached endpoint");
        TestingRequest request = new TestingRequest(name,sign);
        try{
            TestResponse response = testService.testingData(request);
            logger.debug("Response is received from testService");
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        } catch(Exception ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("Error occured : "+ex.getMessage()));
        }    
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        logger.debug("Request is reached");
        try {

            AuthResponse response = authService.authenticate(request);
            return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(response);
            
        } catch (Exception e) {
            logger.debug("Error enclounter in authenticating "+e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error in authenticating : "+e.getMessage());
        }
    }
    
    @PostMapping("/register/bidder")
    public ResponseEntity<?> registerBidder(@RequestBody @Valid BidderSignupRequest signUpRequest,BindingResult bindingResult) {
        logger.debug("Register Message is reached");
        if (bindingResult.hasErrors()) {
            List<String> errors = bindingResult.getFieldErrors().stream()
            .map(error -> error.getField() + ": " + error.getDefaultMessage())
            .collect(Collectors.toList());
            return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Validation failed: " + String.join(", ", errors)));
            }
        try {
            AuthResponse response = authService.bidderSignUp(signUpRequest);
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        } catch (Exception e) {
            return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: " + e.getMessage()));
        }
    }

    @PostMapping("/register/vendor")
    public ResponseEntity<?> registerVendor(@RequestBody VendorSignupRequest signUpRequest) {
        logger.debug("Register Message is reached");
        try {
            AuthResponse response = authService.vendorSignUp(signUpRequest);
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        } catch (Exception e) {
            return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: " + e.getMessage()));
        }
    }
}
