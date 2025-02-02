package com.auction.z_backend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class ImageService {
    
    @Value("${upload.dir}")
    private String uploadDir;

    public String saveImage(MultipartFile file,String loginId,LocalDateTime time,String lotNumber) throws IOException {
        
        Path path = Paths.get(uploadDir,"itemImages",loginId,time.toString(),lotNumber);
        try{
            Files.createDirectories(path);
    
            String fileName = file.getOriginalFilename();
            Path filePath = path.resolve(fileName);
            file.transferTo(filePath);
    
            return filePath.toString();
        }
        catch(Exception e){
            System.out.println("Exception While Saving the images to the Path : "+e.getMessage());
            throw new RuntimeException("Exception While Saving the images to the Path : "+e.getMessage());
        }
    }
}
