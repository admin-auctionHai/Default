package com.auction.z_backend.auth.dto.response;

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
public class UserCompanyDetailsDTO {
    private String companyName;
    private String companyRegNumber;
    private String companyPan_Tan;
    private String companyEmailAddress;
    private String companyAddress;
    private String companyCity;
    private String companyState;
    private String companyPostalCode;}
