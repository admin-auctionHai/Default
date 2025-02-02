import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useLocation } from "react-router-dom";
import AuctionForm from "../auction/AuctionForm";
import { patch } from "@mui/system";
const SiteMap = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    if (currentPath === "/") {
        return null;
    }
    let actualPath = currentPath.split('/').filter(part => part);
    console.log(actualPath);
    console.log(currentPath);
    // actualPath = actualPath.filter(element => !['auth','signup'].includes(element));
    let urlMap = {};
    const values = ['auth', 'signup'];
    let path = "";
    actualPath.forEach((value, ndx) => {
        if (!values.includes(value)) { // Check if value is not in values
            if (value === 'login') {
                urlMap['Login'] = path + "/" + value;
            }
            else if (value === 'bidder') {
                urlMap['BidderRegistration'] = path + "/" + value;
            }
            else if (value === 'vendor') {
                urlMap['VendorRegistration'] = path + "/" + value;
            }
            else if (value === 'auction') {
                urlMap['Auction'] = path + "/" + value;
            }
        }
        path = path + "/" + value;
        console.log("Path is : ", path);
    });
    console.log(actualPath);
    return (_jsx("div", { className: "flex flex-col items-center", children: _jsxs("div", { id: "div-id-sitemap", className: "flex flex-row w-2/3 py-2 items-start", children: [_jsx("span", { children: _jsx("a", { title: "Home", href: "/", className: " text-gray-600 p-1", children: "Home" }) }), Object.entries(urlMap).map(([key, item], index) => (_jsxs(React.Fragment, { children: [_jsx("span", { className: "text-gray-600", children: " / " }), _jsx("span", { className: "text-gray-600 px-1", children: _jsx("a", { title: key, href: item, className: "text-gray-600", children: key }) })] }, index)))] }) }));
};
export default SiteMap;
