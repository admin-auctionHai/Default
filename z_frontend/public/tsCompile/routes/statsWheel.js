import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    };
    return (_jsxs("div", { className: "flex flex-col items-center h-[400px] w-full p-4", children: [_jsx("div", { className: 'w-full flex flex-col items-center p-2', children: _jsx("div", { className: 'w-1/3 border border-double rounded-lg border-gray-700 p-2', onClick: handleDivClickMethod, "data-value": "total-auction-published", children: "Total Auction Published" }) }), _jsxs("div", { className: 'w-full flex flex-row p-2', children: [_jsxs("div", { className: 'w-1/3 flex flex-col', id: 'div-stat-wheel-left-options', children: [_jsx("div", { className: 'w-full p-2 border border-double rounded-lg my-2', children: "Total auction Publish" }), _jsx("div", { className: 'w-full p-2 border border-double rounded-lg my-2', children: "Total Auction Closed" }), _jsx("div", { className: 'w-full p-2 border border-double rounded-lg my-2', children: "Total Upcoming Auction" })] }), _jsx("div", { id: 'div-stat-wheel', className: 'w-1/3 flex flex-col justify-center', children: "Number of Auction" }), _jsxs("div", { id: 'div-stat-wheel-right-otpion', className: 'w-1/3 flex flex-col', children: [_jsx("div", { className: 'w-full p-2 border border-double rounded-lg my-2', children: "Total Plastic Auction" }), _jsx("div", { className: 'w-full p-2 border border-double rounded-lg my-2', children: "Total Paper Auction" }), _jsx("div", { className: 'w-full p-2 border border-double rounded-lg my-2', children: "Total E-Waste Auction" })] })] }), _jsx("div", { id: 'div-stat-wheel-bottom-option', className: 'w-full flex flex-col items-center p-2', children: _jsx("div", { className: 'w-1/3 border border-gray-700 rounded-lg p-2', children: "Total Glass auction" }) })] }));
};
export default AuctionWheel;
