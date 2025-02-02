package com.auction.z_backend.vendor.dto.request;

import java.util.List;

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
public class CreateItemRequest {
    private String loginId;
    private String companyName;
    private String auctionType;
    private String auctionTitle;
    private String auctionDescription;
    private String auctionLotType;
    private List<ItemLotDetailDTO> auctionLotDetails;
    private String totalWeight;
}




