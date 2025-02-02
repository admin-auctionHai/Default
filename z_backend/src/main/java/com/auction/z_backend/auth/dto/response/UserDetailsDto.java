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
public class UserDetailsDto {
    private String loginId;
    private String title;
    private String email;
    private String contactNumber;
    private String designation;
    private String dateOfBirth;
}
