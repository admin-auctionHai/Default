package com.auction.z_backend.dto.request;

import com.auction.z_backend.common.enums.UserTypes;
import com.auction.z_backend.model.Company.VendorCompanyDetails;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class VendorSignupRequest {
    private String loginId;
    private String passsword;
    private String corresEmail;
    private String title;
    private String contactNumber;
    private String desig;
    private String dob;
    private String typeOfUser;
    private UserTypes userType;
    private VendorCompanyDetails companyDetails;
    
    public String getPassword(){
        return this.passsword;
    }
}
