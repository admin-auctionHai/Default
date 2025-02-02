package com.auction.z_backend.vendor.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="ItemDetailTable")
public class ItemDetailTable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String user_id;
    private String loginId;
    private String companyName;
    private String auctionType;
    private String auctionTitle;
    private String auctionDescription;
    private String auctionLotType;
    private LocalDateTime createdAt;

    @OneToMany(cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ItemLotDetailTable> itemLotDetails;

    public void setItemLotDetails(List<ItemLotDetailTable> itemLotTable){
        this.itemLotDetails = itemLotTable;
        if(itemLotDetails!=null){
            for(ItemLotDetailTable x : itemLotDetails){
                x.setItemTable(this);
            }
        }
    }
    public void setUser(UserVendor user){
        this.user_id = user.getLoginId();
    }
}
