import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../istockphoto-1439686281-612x612.jpg';

const IndividualIntervalsExample = () => {
  return (
<div className="w-full max-w-[1530px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-[432px]">
        <Carousel className="h-full">
          <Carousel.Item interval={1000}>
            <div className="relative w-full h-[432px]">
              <img 
                src={ExampleCarouselImage} 
                alt="First slide"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Carousel.Caption className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
                <h3 className="text-2xl font-bold">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="relative w-full h-[432px]">
              <img 
                src={ExampleCarouselImage} 
                alt="Second slide"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Carousel.Caption className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
                <h3 className="text-2xl font-bold">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="relative w-full h-[432px]">
              <img 
                src={ExampleCarouselImage} 
                alt="Third slide"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Carousel.Caption className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
                <h3 className="text-2xl font-bold">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default IndividualIntervalsExample;