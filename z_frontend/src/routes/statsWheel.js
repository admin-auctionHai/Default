import React, { useState } from 'react';

const AuctionWheel = () => {
  const [centerNumber, setCenterNumber] = useState(0);
  
  // Mapping divs to values
  const divValues = [1, 2, 3, 4, 5, 6, 7, 8];
  
  
  const handleStatsWheelElementClick = (value) => {
    setCenterNumber(value);
  };
  const handleDivClickMethod = (e) => {
    console.log(e.target.getAttribute("data-value"));
    return false;
  }

  return (
    <div className="flex flex-col items-center h-[400px] w-full p-4">
      {/* Tp Div */}
      <div className='w-full flex flex-col items-center p-2'>
        <div className='w-1/3 border border-double rounded-lg border-gray-700 p-2' onClick={handleDivClickMethod} data-value="total-auction-published">
          Total Auction Published
        </div>
      </div>

      <div className='w-full flex flex-row p-2'>
        <div className='w-1/3 flex flex-col' id='div-stat-wheel-left-options'>
            <div className='w-full p-2 border border-double rounded-lg my-2'>
                Total auction Publish
            </div>
            <div className='w-full p-2 border border-double rounded-lg my-2'>
                Total Auction Closed
            </div>
            <div className='w-full p-2 border border-double rounded-lg my-2'>
                Total Upcoming Auction
            </div>
        </div>

        <div id='div-stat-wheel' className='w-1/3 flex flex-col justify-center'>
              Number of Auction
        </div>
        <div id='div-stat-wheel-right-otpion' className='w-1/3 flex flex-col'>
            <div className='w-full p-2 border border-double rounded-lg my-2'>
                Total Plastic Auction
            </div>
            <div className='w-full p-2 border border-double rounded-lg my-2'>
                Total Paper Auction
            </div>
            <div className='w-full p-2 border border-double rounded-lg my-2'>
                Total E-Waste Auction
            </div>
        </div>
      </div>
      <div id='div-stat-wheel-bottom-option' className='w-full flex flex-col items-center p-2'>
        <div className='w-1/3 border border-gray-700 rounded-lg p-2'>
          Total Glass auction
        </div>

      </div>
  </div>
  );
};

export default AuctionWheel;
