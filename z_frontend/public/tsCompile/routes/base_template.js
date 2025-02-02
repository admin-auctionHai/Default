import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState, useRef } from "react";
import { Search, User, LogOut, Settings, UserCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Outlet, useNavigate } from "react-router-dom";
import HeaderImage from '../public/images/AuctionHaiProfilePic1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPageMenu from "./login";
import LangThemFontUtility from "./LanguageFontTheme";
import { colors } from "@mui/material";
import SiteMap from "../features/homepage/siteMap";
const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showLoginPanel, setShowLoginPanel] = useState(false);
    const navigate = useNavigate();
    //Login Form handlers
    const handleLogin = () => {
        console.log("Handled login button is clicked");
        setShowLoginPanel(true);
    };
    const handleDropdownEnter = (index) => {
        setActiveDropdown(index);
    };
    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };
    // Your existing navItems array stays the same
    const navItems = [
        {
            "name": "Home",
            "link": "/"
        },
        {
            "name": "Categories",
            "subItems": [
                {
                    "name": "Scrap/Disposal",
                    "subItems": [
                        {
                            "name": "Metal Scrap",
                            "link": "/categories/scrap/metal"
                        },
                        {
                            "name": "E-Waste",
                            "link": "/categories/scrap/e-waste"
                        },
                        {
                            "name": "Paper",
                            "link": "/categories/scrap/paper"
                        },
                        {
                            "name": "Plastic",
                            "link": "/categories/scrap/plastic"
                        },
                        {
                            "name": "Glass",
                            "link": "/categories/scrap/glass"
                        }
                    ]
                },
                {
                    "name": "Land",
                    "subItems": [
                        {
                            "name": "Residential",
                            "link": "/categories/land/residential"
                        },
                        {
                            "name": "Commercial",
                            "link": "/categories/land/commercial"
                        },
                        {
                            "name": "Industrial",
                            "link": "/categories/land/industrial"
                        }
                    ]
                },
                {
                    "name": "Timber",
                    "subItems": [
                        {
                            "name": "Raw Timber",
                            "link": "/categories/timber/raw"
                        },
                        {
                            "name": "Processed Wood",
                            "link": "/categories/timber/processed"
                        },
                        {
                            "name": "Firewood",
                            "link": "/categories/timber/firewood"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Sell/Start Auction",
            "link": "/sell"
        },
        {
            "name": "Auctions",
            "link": "/auctions"
        },
        {
            "name": "Buy",
            "link": "/buy"
        },
        {
            "name": "Notifications",
            "link": "/messages"
        },
        {
            "name": "Wishlist",
            "link": "/wishlist"
        },
        {
            "name": "Cart",
            "link": "/cart"
        },
        {
            "name": "Help/FAQs",
            "link": "/help"
        },
        {
            "name": "Community",
            "link": "/community"
        }
    ];
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setShowProfileMenu(false);
    };
    const MenuItem = ({ item, index }) => {
        const [isHovered, setIsHovered] = useState(false);
        if (!item.subItems) {
            return (_jsx("li", { className: "nav-item", children: _jsx("a", { href: item.link || "#", className: "nav-link text-white px-3 py-2 d-flex align-items-center transition-colors hover:bg-blue-700 rounded", children: item.name }) }));
        }
        return (_jsxs("li", { className: "nav-item dropdown", onMouseEnter: () => handleDropdownEnter(index), onMouseLeave: handleDropdownLeave, children: [_jsxs("a", { className: "nav-link text-white px-3 py-2 d-flex align-items-center gap-1 transition-colors hover:bg-blue-700 rounded", href: item.link || "#", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [item.name, _jsx(ChevronDown, { size: 16, className: `transition-transform duration-200 ${isHovered || activeDropdown === index ? 'rotate-180' : ''}` })] }), (activeDropdown === index) && (_jsx("div", { className: "dropdown-menu show border-0 mt-0 text-black bg-blue-800 p-0 animate-fadeIn", children: item.subItems.map((subItem, subIndex) => (_jsx(DropdownItem, { item: subItem, isNested: true }, subIndex))) }))] }));
    };
    const DropdownItem = ({ item, isNested }) => {
        const [showSubMenu, setShowSubMenu] = useState(false);
        if (!item.subItems) {
            return (_jsx("a", { className: "dropdown-item text-black py-2 px-4 transition-colors hover:bg-blue-700", href: item.link, children: item.name }));
        }
        return (_jsxs("div", { className: "dropdown-submenu position-relative", onMouseEnter: () => setShowSubMenu(true), onMouseLeave: () => setShowSubMenu(false), children: [_jsxs("a", { className: "dropdown-item text-black py-2 px-4 d-flex align-items-center justify-content-between transition-colors hover:bg-blue-700", href: item.link || "#", children: [item.name, _jsx(ChevronRight, { size: 16 })] }), showSubMenu && (_jsx("div", { className: "dropdown-menu show position-absolute top-0 start-100 bg-blue-800 border-0", children: item.subItems.map((subItem, idx) => (_jsx(DropdownItem, { item: subItem, isNested: true }, idx))) }))] }));
    };
    console.log("User Status :", isLoggedIn);
    const loginRef = useRef();
    useEffect(() => {
        console.log("Loading some values");
        if (localStorage.getItem('authToken')) {
            console.log(localStorage.getItem("authToken"));
            setIsLoggedIn(true);
            console.log(loginRef.current);
            if (loginRef.current) {
                loginRef.current.setLogin();
            }
        }
    });
    return (_jsxs("div", { className: "min-vh-100 d-flex flex-column", children: [_jsx("header", { className: "bg-gradient-to-r from-white to-gray-300 text-white", children: _jsx("div", { className: "pb-2 w-full bg-gray-100", children: _jsxs("div", { className: "d-flex justify-content-start w-full bg-red-300  align-items-start position-relative", style: { backgroundColor: "white" }, children: [_jsx("img", { src: HeaderImage, alt: "Header", className: "img-fluid", style: { width: "25%", objectFit: "cover", borderRadius: "5px", height: "150px" } }), _jsx("div", { className: "position-absolute justify-end top-0 end-0 mt-2 me-2 text-dark" })] }) }) }), _jsx("nav", { className: "navbar navbar-expand sticky-top bg-blue-900 shadow py-0", children: _jsx("div", { className: "container-fluid px-4", children: _jsxs("div", { className: "d-flex justify-content-between align-items-center w-100 py-2", children: [_jsx("ul", { className: "navbar-nav d-flex flex-row gap-1 mb-0", children: navItems.map((item, index) => (_jsx(MenuItem, { item: item, index: index }, index))) }), _jsxs("div", { className: "d-flex align-items-center gap-4", children: [_jsx("div", { className: "position-relative", children: _jsxs("div", { className: "d-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-1 transition-colors hover:bg-opacity-20", children: [_jsx(Search, { size: 18, className: "text-white opacity-75" }), _jsx("input", { type: "text", placeholder: "Search...", className: "border-0 bg-transparent text-white placeholder-white placeholder-opacity-75 ms-2", style: { width: '180px', outline: 'none' } })] }) }), _jsx(LoginPageMenu, { ref: loginRef })] })] }) }) }), _jsx(SiteMap, {}), _jsx("main", { className: "flex-grow-1 bg-light", children: _jsx("div", { className: "py", children: _jsx(Outlet, {}) }) }), _jsx("footer", { className: "bg-dark text-white py-5", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "row gy-4", children: [_jsxs("div", { className: "col-md-3", children: [_jsx("h3", { className: "h5 mb-3", children: "About Us" }), _jsxs("ul", { children: [_jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Feedback" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Disclaimer" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Terms of Use" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Website Accessibility" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Contact Us" }) })] })] }), _jsxs("div", { className: "col-md-3", children: [_jsx("h3", { className: "h5 mb-3", children: "Quick Links" }), _jsxs("ul", { className: "list-unstyled mb-0", children: [_jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Privacy Policy" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Hyperlinking Policy" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Copyright Policy" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Content Archival Policy" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Website Security Policy" }) })] })] }), _jsxs("div", { className: "col-md-3", children: [_jsx("h3", { className: "h5 mb-3", children: "Contact" }), _jsxs("ul", { className: "list-unstyled text-secondary mb-0", children: [_jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Website Monitoring Policy" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Content Review Policy" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Website Contingency Management Policy" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Content Contribution, Moderation & Approval Policy (CMAP)" }) })] })] }), _jsx("div", { className: "col-md-3", children: _jsxs("ul", { className: "list-unstyled text-secondary mb-0", children: [_jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Purchase" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "SiteMap" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Internal Login" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Corporate Mail" }) }), _jsx("li", { className: "mb-2", children: _jsx("a", { href: "#", className: "text-secondary text-decoration-none hover:text-white", children: "Auction Hai" }) })] }) })] }), _jsx("div", { className: "border-top border-secondary mt-4 pt-4 text-center text-secondary", children: _jsx("p", { className: "mb-0", children: "\u00A9 2025 Auction Portal. All rights reserved." }) })] }) })] }));
};
export default Layout;
