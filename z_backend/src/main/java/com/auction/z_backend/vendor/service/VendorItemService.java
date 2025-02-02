package com.auction.z_backend.vendor.service;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.auction.z_backend.service.ImageService;
import com.auction.z_backend.vendor.dto.request.CreateItemRequest;
import com.auction.z_backend.vendor.dto.response.CreateItemResponse;
import com.auction.z_backend.vendor.model.ItemDetailTable;
import com.auction.z_backend.vendor.model.ItemLotDetailTable;
import com.auction.z_backend.vendor.model.LotsImageTable;
import com.auction.z_backend.vendor.model.UserVendor;
import com.auction.z_backend.vendor.repository.VendorItemRepository;
import com.auction.z_backend.vendor.repository.VendorUserRepository;

import jakarta.mail.Multipart;
import jakarta.transaction.Transactional;


@Service
public class VendorItemService {

    private final VendorItemRepository vendorItemRepository;
    
    private final VendorUserRepository vendorUserRepository;

    private final ImageService imgService;
    
    @Autowired
    public VendorItemService(VendorItemRepository vendorItemRepository,VendorUserRepository vendorUserRepository, ImageService imgService){
        this.vendorItemRepository = vendorItemRepository;
        this.vendorUserRepository = vendorUserRepository;
        this.imgService = imgService;
    }
    
    @Transactional
    public CreateItemResponse creatVendorItem(CreateItemRequest request, Map<String,List<MultipartFile> > images){
        System.out.println("Hello Inside the service to create item for the vendor");
        
        if(request.getLoginId() == null){
            return new CreateItemResponse("-1","None","No UserId found for this request");
        }
        System.err.println("HHHHH----000-----HHHHH");
        Optional<UserVendor> user = vendorUserRepository.findByLoginId(request.getLoginId());
        System.out.println(user);
        if(user.isEmpty()){
            return new CreateItemResponse("-1",request.getLoginId(),"No UserId found for this request");
        }
        System.err.println("HHHHH----111-----HHHHH");

        ItemDetailTable itemTable = new ItemDetailTable();
        itemTable.setLoginId(request.getLoginId());
        itemTable.setCompanyName(request.getCompanyName());
        itemTable.setAuctionType(request.getAuctionType());
        itemTable.setAuctionTitle(request.getAuctionTitle());
        itemTable.setAuctionDescription(request.getAuctionDescription());
        itemTable.setAuctionLotType(request.getAuctionLotType());
        itemTable.setCreatedAt(LocalDateTime.now());
        // itemTable.setTotalWeight(request.getTotalWeight());
        System.err.println("HHHHH----222-----HHHHH");

        List<ItemLotDetailTable> itemLotDetails = request.getAuctionLotDetails().stream().map(
            lotDetail -> {
                ItemLotDetailTable lot = new ItemLotDetailTable();
                lot.setAuctionLotNumber(lotDetail.getAuctionLotNumber());
                lot.setProductCategory(lotDetail.getProductCategory());
                lot.setLotWeight(lotDetail.getLotWeight());
                lot.setLotEMD(lotDetail.getLotEMD());
                lot.setLotAuctionAmount(lotDetail.getLotAuctionAmount());
                lot.setLotAddress(lotDetail.getLotAddress());
                lot.setLotCity(lotDetail.getLotCity());
                lot.setLotState(lotDetail.getLotState());
                lot.setLotPostalCode(lotDetail.getLotPostalCode());
                lot.setLotSellerContactNumber(lotDetail.getLotSellerContactNumber());
                lot.setLotAuctionStartDate(lotDetail.getLotAuctionStartDate());
                lot.setLotAuctionEndDate(lotDetail.getLotAuctionEndDate());
                lot.setLotDescription(lotDetail.getLotDescription());
                System.err.println("HHHHH----333-----HHHHH");

                // Crating an object to save the image table list
                List<LotsImageTable> lotImageTables = new ArrayList<>();
                for(Map.Entry<String, List<MultipartFile> > entry : images.entrySet()){
                    System.out.println("Lot Number: " + entry.getKey());
                    System.out.println("Value Class: " + entry.getValue().getClass());
                    for(MultipartFile file : entry.getValue()){
                        System.out.println("file : "+file.getOriginalFilename());
                    }
                }
                // Gettin images file for the respective lotNumber
                List<MultipartFile> files = images.get(lot.getAuctionLotNumber());
                if (files != null) { // Ensure there are files for this lot
                    for (MultipartFile img : files) {
                        LotsImageTable image = new LotsImageTable();
                        try {
                            // Setting the image values and adding it to list of lotTableImages
                            System.err.println("HHHHH----343-----HHHHH Image Id is : "+image.getId()+lot.getId());
                    
                            image.setUrl(imgService.saveImage(img, request.getLoginId(),itemTable.getCreatedAt(),lot.getAuctionLotNumber()));
                            image.setItemLotTable(lot);
                            System.err.println("HHHHH----444-----HHHHH");
                
                            lotImageTables.add(image);
                        } catch (Exception e) {
                            System.err.println("Exception while saving the image data to backend");
                            throw new RuntimeException("Error while saving the image data to backend: " + e.getMessage());
                        }
                    }
                }
                
                
                lot.setImages(lotImageTables);
                lot.setItemTable(itemTable);
                return lot;
            }).toList();
            
        System.err.println("HHHHH----555-----HHHHH");

        itemTable.setItemLotDetails(itemLotDetails);
        itemTable.setUser(user.orElse(null));
        
        ItemDetailTable savedItemDetail = vendorItemRepository.save(itemTable);
        
        System.out.println("Item Detail Table has been saved");
        //Handle logic to get the user detail from request.
                
        return new CreateItemResponse(savedItemDetail.getId().toString(),request.getLoginId(),"Item Created Successfully");
    }

    public List<ItemDetailTable> getAllItemsDetail(String loginId){

        Optional<ItemDetailTable> optionalTable = vendorItemRepository.findByLoginId(loginId);
        
        System.err.println(optionalTable);

        System.err.println("Finding the list");
        return new ArrayList<ItemDetailTable>();
    }
}
