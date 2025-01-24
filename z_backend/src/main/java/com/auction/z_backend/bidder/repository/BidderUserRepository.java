package com.auction.z_backend.bidder.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auction.z_backend.bidder.model.UserBidder;

@Repository
public interface BidderUserRepository extends JpaRepository<UserBidder, String> {
    Optional<UserBidder> findByLoginId(String loginId);
    boolean existsByLoginId(String loginId);
}
