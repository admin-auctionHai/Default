package com.auction.z_backend.service;

import com.auction.z_backend.model.LoginRequest;
import com.auction.z_backend.model.SignupRequest;
import com.auction.z_backend.model.JwtResponse;
import com.auction.z_backend.model.MessageResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        // Generate JWT token here after successful authentication
        String token = "tokenlw";  // Replace with actual token generation logic
        JwtResponse jwtResponse = new JwtResponse();
        jwtResponse.setToken(token);
        jwtResponse.setEmail(loginRequest.getEmail());

        return jwtResponse;
    }

    public MessageResponse register(SignupRequest signUpRequest) {
        // Handle user registration (e.g., saving user data to the database)
        // This is just an example, you would need to handle password hashing, etc.
        return new MessageResponse("User registered successfully!");
    }
}
