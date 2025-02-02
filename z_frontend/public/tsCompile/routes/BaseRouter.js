import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./base_template";
import HomePage from "../pages/home/homepage";
import AuthRouter from "./auth/AuthRouters";
import AuctionRouter from "./auction/AuctionRouter";
import LoginPage from "../pages/auth/login";
const BaseRouter = () => {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "", element: _jsx(Layout, {}), children: [_jsx(Route, { path: "", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "auth", children: _jsx(Route, { path: "login", element: _jsx(LoginPage, {}) }) }), _jsx(Route, { path: "auctions", element: _jsx(AuctionRouter, {}) })] }) }));
};
export default BaseRouter;
