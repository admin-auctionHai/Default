package com.auction.z_backend.auth.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class EmailVerificationOtpResponse {
    private String email;
    private String otpValue;
    private String expiryTime;

}
