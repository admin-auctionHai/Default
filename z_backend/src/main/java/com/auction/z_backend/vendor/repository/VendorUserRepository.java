package com.auction.z_backend.vendor.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auction.z_backend.vendor.model.UserVendor;

@Repository
public interface VendorUserRepository extends JpaRepository<UserVendor, String>{
    Optional<UserVendor> findByLoginId(String loginId);
    boolean existsByLoginId(String loginId);
    
}