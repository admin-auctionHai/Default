package com.auction.z_backend.vendor.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auction.z_backend.vendor.model.ItemDetailTable;

@Repository
public interface  VendorItemRepository extends JpaRepository<ItemDetailTable, String> { 
    Optional<ItemDetailTable> findByLoginId(String loginID);
    Boolean existsByLoginId(String loginId);
}
