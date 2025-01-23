import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const TestimonialCorosaul = () => {

    return (
    <div className="w-full h-[300px] mx-auto bg-red-600 rounded-lg shadow-lg overflow-hidden">
      <div className="h-full relative w-full">
        <Carousel className="h-full">
          <Carousel.Item className="h-full" >
            <div className="flex flex-col items-center w-full h-[300px]">
              <p className="flex w-full h-full items-center justify-center">
                Asansol Durgapur Development Authority had initiated e-Auction of land using the NIC Portal  
                from the year 2015 onwards as per provisions of Land Allotment Policy of Govt. of West Bengal vide order of L &amp; LR Department vide no. 6686-LP/1A-18/2012 dated 26.12.2012 giving maximum possible publicity in leading newspapers, ADDA website, Outdoor hardings, Local Cable Channels, etc..
                Over this period ADDA had successfully conducted e-auction of plots consisting of Industrial, Commercial, Institutional and Commercial Housing purposes generating good revenue
              </p>
              <Carousel.Caption className="bottom-0 right-0 p-2 bg-black/50">
                <p className="text-sm">sigin of Relevant Authority</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <div className="flex flex-col items-center w-full h-[300px]">
              <p className="flex w-full h-full items-center justify-center">
                Asansol Durgapur Development Authority had initiated e-Auction of land using the NIC Portal  
                from the year 2015 onwards as per provisions of Land Allotment Policy of Govt. of West Bengal vide order of L &amp; LR Department vide no. 6686-LP/1A-18/2012 dated 26.12.2012 giving maximum possible publicity in leading newspapers, ADDA website, Outdoor hardings, Local Cable Channels, etc..
                Over this period ADDA had successfully conducted e-auction of plots consisting of Industrial, Commercial, Institutional and Commercial Housing purposes generating good revenue
              </p>
              <Carousel.Caption className="relative bottom-0 left-0 right-0 p-2 bg-black/50">
                <p className="text-sm">sigin of Relevant Authority</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="flex flex-col items-center w-full h-[300px]">
              <p className="flex w-full h-full items-center justify-center">
                Asansol Durgapur Development Authority had initiated e-Auction of land using the NIC Portal  
                from the year 2015 onwards as per provisions of Land Allotment Policy of Govt. of West Bengal vide order of L &amp; LR Department vide no. 6686-LP/1A-18/2012 dated 26.12.2012 giving maximum possible publicity in leading newspapers, ADDA website, Outdoor hardings, Local Cable Channels, etc..
                Over this period ADDA had successfully conducted e-auction of plots consisting of Industrial, Commercial, Institutional and Commercial Housing purposes generating good revenue
              </p>
              <Carousel.Caption className=" bottom-0 left-0 right-0 p-2 bg-black/50">
                <p className="text-sm">sigin of Relevant Authority</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    );
};

export default TestimonialCorosaul;