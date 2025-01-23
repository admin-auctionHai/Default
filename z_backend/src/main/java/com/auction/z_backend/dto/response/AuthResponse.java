package com.auction.z_backend.dto.response;

import com.auction.z_backend.common.enums.UserTypes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private Long id;
    private String loginId;
    private String token;
    private UserTypes userType;
    private String name;
}
