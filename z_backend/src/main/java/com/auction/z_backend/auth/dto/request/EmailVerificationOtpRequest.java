package com.auction.z_backend.auth.dto.request;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmailVerificationOtpRequest {
    @NotBlank(message="Login ID is required")
    private String loginId;

    @NotBlank(message="Email is required")
    private String email;
}
