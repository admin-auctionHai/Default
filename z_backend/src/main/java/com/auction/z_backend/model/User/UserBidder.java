package com.auction.z_backend.model.User;

import com.auction.z_backend.model.Company.BidderCompanyDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserBidder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false,unique=true)
    private String loginId;
    
    @Column(nullable = false)
    private String password;

    @Column
    private String corresEmail;
    
    @Column
    private String title;
    
    @Column
    private String contactNumber;
    
    @Column
    private String desig;
    
    @Column
    private String dob;
    
    @Column
    private String typeOfUser;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private BidderCompanyDetails companyDetails;
}
