import React from "react";
import axios from "axios";
import apiService from "../auth/axiosUtils";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

export const AuctionService = {
    async publishAuction(data,username,id){
        if(username == null){
            let res = {
                "ErrorCode" : "-1",
                "message" : "UserName not found"
            }
            return res;
        }

        try{
            console.log("Sending the request");
            console.log("Withing AuctionSrvice");
            let url = "/vendor/createAndPublishItem"
            const data_to_send = JSON.parse(JSON.stringify(data));
            const image = {};

            // Helper function to convert date, time, and AM/PM to LocalDateTime format
            const formatLocalDateTime = (date, time, amPm) => {
                if (!date || !time || !amPm) return null;

                let [hours, minutes] = time.split(":").map(Number);
                console.log("Hours and min are",hours,minutes);
                amPm = amPm.toUpperCase();

                // Convert 12-hour format to 24-hour format
                if (amPm === "PM" && hours !== 12) {
                    hours += 12;
                } else if (amPm === "AM" && hours === 12) {
                    hours = 0;
                }

                // Return LocalDateTime format "YYYY-MM-DDTHH:MM:00"
                return `${date}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
            };

            // // Convert and update auctionPublishDate
            // data_to_send.auctionPublishDate = formatLocalDateTime(
            //     data_to_send.auctionPublishDate,
            //     data_to_send.auctionPublishTime,
            //     data_to_send.auctionPublishAmPm
            // );

            // // Convert and update auctionStartDate
            // data_to_send.auctionStartDate = formatLocalDateTime(
            //     data_to_send.auctionStartDate,
            //     data_to_send.auctionStartTime,
            //     data_to_send.auctionStartAmPm
            // );

            // // Convert and update auctionEndDate
            // data_to_send.auctionEndDate = formatLocalDateTime(
            //     data_to_send.auctionEndDate,
            //     data_to_send.auctionEndTime,
            //     data_to_send.auctionEndAmPm
            // );

            // // Remove unnecessary separate fields
            // delete data_to_send.auctionPublishTime;
            // delete data_to_send.auctionPublishAmPm;
            // delete data_to_send.auctionStartTime;
            // delete data_to_send.auctionStartAmPm;
            // delete data_to_send.auctionEndTime;
            // delete data_to_send.auctionEndAmPm;

            data_to_send.auctionLotDetails.map((lot,indx)=>{
                image[lot.auctionLotNumber] = lot.images;
                delete data_to_send.auctionLotDetails[indx].images;
            });


            console.log(data_to_send);

            data_to_send['username'] = id;
            data_to_send['loginId'] = username;

            const formData = new FormData();

            console.log("Created the formData object");

            formData.append('request', new Blob([JSON.stringify(data_to_send)], { type: "application/json" }));

            // ✅ Append images inside "images" object
            console.log("Converting the images");
            console.log(";;llll");
            data.auctionLotDetails.forEach((lot) => {
                console.log("[[[[]]]]]]");
                lot.images.forEach((file,ind) => {
                    console.log("Image file is ",file);
                    formData.append(`images[${lot.auctionLotNumber}][${ind}]`, file.file);
                });
            });
            // formData.append('images',new Blob([JSON.stringify()]))
            console.log("Date_to_send is : ",data_to_send);
            console.log("Data to send to backend", formData);
            const response = await apiService.post(url,formData);
            console.log(response);
            if (response.data.ErrorCode=="0"){
                return true;
            }
            else{
                let res = {
                    "ErrorCode" : "-3",
                    "message" : "Error in sending request to backend"
                }
            }
        }catch(err){
            let res = {
                "ErrorCode" : "-2",
                "message" : "Error in sending the response"
            }
        }
    }
}