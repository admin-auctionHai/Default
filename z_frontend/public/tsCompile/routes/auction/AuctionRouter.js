import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuctionListing from '../../features/auction/AuctionListing';
const AuctionRouter = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(AuctionListing, {}) }), _jsx(Route, { path: "/create" }), _jsx(Route, { path: "view/:id" }), _jsx(Route, { path: "delete/:id" })] }));
};
export default AuctionRouter;
