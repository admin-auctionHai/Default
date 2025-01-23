package com.auction.z_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auction.z_backend.model.test.testingModel;

@Repository
public interface TestingRepository extends JpaRepository<testingModel, String> {
    Optional<testingModel> findByName(String name);
    boolean existsBySign(String sign);
}
