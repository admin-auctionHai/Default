package com.auction.z_backend.auth.dto.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String loginId;
    private String password;
}
