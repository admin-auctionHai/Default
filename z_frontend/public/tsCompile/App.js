import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import HomePage from './pages/home/homepage';
import Layout from './routes/base_template';
import AuctionRouter from './routes/auction/AuctionRouter';
import 'bootstrap';
import BaseRouter from './routes/BaseRouter';
import AuthPages from './routes/authPages';
import SignUpPageBidder from './pages/auth/signupBidder';
import SignUpPageVendor from './pages/auth/signupVendor';
function App() {
    return (_jsx("div", { className: "App", children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsxs(Route, { path: "auth", children: [_jsx(Route, { path: "login", element: _jsx(LoginPage, {}) }), _jsxs(Route, { path: 'signup', children: [_jsx(Route, { path: 'bidder', element: _jsx(SignUpPageBidder, {}) }), _jsx(Route, { path: 'vendor', element: _jsx(SignUpPageVendor, {}) })] })] }), _jsx(Route, { path: "auctions", element: _jsx(AuctionRouter, {}) }), _jsx(Route, { path: 'info' })] }) }) }) }));
}
export default App;
