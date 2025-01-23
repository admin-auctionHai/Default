package com.auction.z_backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.auction.z_backend.dto.request.TestingRequest;
import com.auction.z_backend.dto.response.TestResponse;
import com.auction.z_backend.model.test.testingModel;
import com.auction.z_backend.repository.TestingRepository;

@Service
public class testingService {

    private final TestingRepository testingRepo;

    public testingService(TestingRepository testingRepo){
        this.testingRepo = testingRepo;
    }

    public TestResponse testingData(TestingRequest request){
        String sign = request.getSign();
        if(testingRepo.existsBySign(sign)){
            throw new RuntimeException("Already Exist");
        }
        
        testingModel testModel = new testingModel();
        testModel.setName(request.getName());
        testModel.setSign(request.getSign());

        testingModel savedModel = testingRepo.save(testModel);
        List<testingModel> allData = testingRepo.findAll();

        return new TestResponse(savedModel.getName(),savedModel.getSign(),allData);


    }
}
