import React, { useState } from 'react';

const AuctionWheel = () => {
  const [selectedCategory, setSelectedCategory] = useState('latestAuction');

  const stats = {
    latestAuction: [
      { id: 1, title: 'Industrial Equipment Auction', date: '2025-01-01' },
      { id: 2, title: 'Metal Scrap Auction', date: '2025-01-05' },
    ],
    upcomingAuction: [
      { id: 1, title: 'Residential Land Sale', date: '2025-02-01' },
      { id: 2, title: 'Commercial Land Sale', date: '2025-02-10' },
    ],
    latestPublication: [
      { id: 1, title: 'Auction Guidelines Update', date: '2025-01-20' },
      { id: 2, title: 'New Auction Rules', date: '2025-01-22' },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="relative w-96 h-96 flex justify-center items-center">
        {/* Center Display */}
        <div className="absolute w-40 h-40 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-2">
            {selectedCategory === 'latestAuction'
              ? 'Latest Auction'
              : selectedCategory === 'upcomingAuction'
              ? 'Upcoming Auction'
              : 'Latest Publication'}
          </h2>
          <ul className="text-sm text-gray-600">
            {stats[selectedCategory].map((item) => (
              <li key={item.id} className="mb-1">
                {item.title} - {item.date}
              </li>
            ))}
          </ul>
        </div>

        {/* Circular Menu */}
        <div className="absolute w-full h-full">
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => handleCategoryClick('latestAuction')}
          >
            <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
              Latest Auction
            </div>
          </div>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => handleCategoryClick('upcomingAuction')}
          >
            <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg">
              Upcoming Auction
            </div>
          </div>
          <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
            onClick={() => handleCategoryClick('latestPublication')}
          >
            <div className="w-24 h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg">
              Latest Publication
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionWheel;
