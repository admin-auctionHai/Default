package com.auction.z_backend.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.auction.z_backend.common.enums.UserTypes;
import com.auction.z_backend.model.Company.BidderCompanyDetails;

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
public class BidderSignupRequest {

    @Email(message="Login Id should be a valid emailId")
    @NotBlank(message = "Login is is required")
    private String loginId;
    
    @NotBlank(message="password is required")
    private String password;

    @Email(message="Email should be valid")
    @NotBlank(message="Email is required")
    private String corresEmail;
    
    @NotBlank(message="Title is required")
    private String title;

    @NotBlank(message="Contact Number is required")
    private String contactNumber;
    
    @NotBlank(message="Designation is required")
    private String desig;
    
    @NotBlank(message="Date of Birth is required")
    private String dob;
    
    @NotBlank(message="Type of User is required")
    private String typeOfUser;
    
    @NotBlank(message="UserType is required")
    private UserTypes userType;
    
    @NotBlank(message="Company Details are required")
    private BidderCompanyDetails companyDetails;
}
