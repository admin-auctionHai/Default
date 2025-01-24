package com.auction.z_backend.vendor.controller;

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
import com.auction.z_backend.vendor.dto.request.VendorSignupRequest;
import com.auction.z_backend.vendor.service.VendorRegisterService;

@RestController
@RequestMapping("/api/vendor")
@CrossOrigin(origins = "http://localhost:3000")
public class VendorController {

    private final VendorRegisterService registerTheVendor;
    private static final Logger logger = LoggerFactory.getLogger(VendorController.class);

    public VendorController(VendorRegisterService registerTheVendor){
        this.registerTheVendor = registerTheVendor;   
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> vendorRegisterController(@RequestBody @Valid VendorSignupRequest request, BindingResult bindingResult){
        //Perform Validation checks if required
        if(bindingResult.hasErrors()){
            logger.debug("Request is failed in validation checks");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error in validation check or request");
        }
        try {
            AuthResponse response = registerTheVendor.vendorRegister(request);
            return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
        } catch (Exception e) {
            logger.debug("Error occured while getting response from service");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error occur in receiving service response "+e.getMessage());
        }



    }
}
