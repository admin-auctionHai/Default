package com.auction.z_backend.dto.response;

import java.util.List;

import com.auction.z_backend.model.test.testingModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TestResponse {
    private String name;
    private String sign;
    private List<testingModel> totalRecords;
}
