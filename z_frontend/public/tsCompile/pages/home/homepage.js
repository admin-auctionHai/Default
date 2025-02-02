import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Search, User, LogOut, Settings, UserCircle } from 'lucide-react';
import AuctionWheel from '../../routes/statsWheel';
import IndividualIntervalsExample from '../../routes/corosaul';
import MainContainerDramatic from '../../features/homepage/maincontainer';
import TestimonialCorosaul from '../../features/homepage/testimonialCorosaul';
const HomePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    // Your existing navItems array stays the same
    const MenuItem = ({ item }) => {
        if (!item.subItems) {
            return (_jsx("li", { className: "relative group", children: _jsx("a", { href: item.link || "#", className: "text-white hover:text-blue-200 py-2 px-4 block whitespace-nowrap", children: item.name }) }));
        }
        return (_jsxs("li", { className: "relative group", children: [_jsx("a", { href: item.link || "#", className: "text-white hover:text-blue-200 py-2 px-4 block whitespace-nowrap", children: item.name }), item.subItems && (_jsx("ul", { className: "absolute hidden group-hover:block bg-blue-800 rounded-lg mt-0 min-w-48 shadow-lg z-50", children: item.subItems.map((subItem, index) => (_jsxs("li", { className: "relative group/sub", children: [_jsxs("a", { href: subItem.link || '#', className: "text-white hover:bg-blue-700 py-2 px-4 block whitespace-nowrap", children: [subItem.name, subItem.subItems && (_jsx("span", { className: "float-right ml-2", children: "\u203A" }))] }), subItem.subItems && (_jsx("ul", { className: "absolute hidden group-hover/sub:block left-full top-0 bg-blue-800 rounded-lg min-w-48 shadow-lg", children: subItem.subItems.map((nestedItem, nestedIndex) => (_jsx("li", { children: _jsx("a", { href: nestedItem.link, className: "text-white hover:bg-blue-700 py-2 px-4 block whitespace-nowrap", children: nestedItem.name }) }, nestedIndex))) }))] }, index))) }))] }));
    };
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setShowProfileMenu(false);
    };
    return (_jsx("div", { className: "min-h-screen w-full flex flex-col", children: _jsxs(MainContainerDramatic, { children: [_jsx("div", { id: 'banner-portion', className: 'w-full h-1/2', children: _jsx("div", { className: 'd-flex w-full h-1/2', style: { width: '100%', margin: '0 auto', backgroundImage: 'linear-gradient(to right, black, grey, black)' }, children: _jsx(IndividualIntervalsExample, {}) }) }), _jsx("div", { id: "sort-auction", className: "flex flex-grow mb-6 w-full p-0", children: _jsxs("div", { className: "grid grid-cols-5 gap-4 bg-white p-3 rounded-lg shadow-md w-full", children: [_jsx("button", { className: "flex-1 px-4 py-3 text-sm text-gray-700 bg-gray-50 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium", children: "Active Auctions" }), _jsx("button", { className: "flex-1 px-4 py-3 text-sm text-gray-700 bg-gray-50 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium", children: "Results of Auction" }), _jsx("button", { className: "flex-1 px-4 py-3 text-sm text-gray-700 bg-gray-50 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium", children: "Auctions By Value" }), _jsx("button", { className: "flex-1 px-4 py-3 text-sm text-gray-700 bg-gray-50 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium", children: "Auctions By Org" }), _jsx("button", { className: "flex-1 px-4 py-3 text-sm text-gray-700 bg-gray-50 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium whitespace-nowrap", children: "Auctions By Prod Category" })] }) }), _jsx("div", { className: 'flex w-full flex-col items-center h-1/2', id: 'auction-wheel', children: _jsx("div", { className: 'w-2/3 flex flex-col items-center', children: _jsx(AuctionWheel, {}) }) }), _jsx("div", { id: 'div-why-us', className: 'my-2 w-full', children: _jsxs("section", { className: '', children: [_jsx("h2", { children: "Why Choose Us" }), _jsxs("div", { className: 'd-flex w-full flex-col lg:flex-row p-4', children: [_jsxs("div", { className: 'w-full h-[230px] flex flex-col border-solid border-2 border-gray-400 rounded-2xl ml-4 mr-2 m mb-2 text-[#8B0000]', children: [_jsx("h4", { className: 'text-center w-full justify-center pt-2', children: "Easy onboarding process" }), _jsx("p", { className: 'h-full text-wrap break-all flex items-center justify-center p-4', children: "Hello" })] }), _jsxs("div", { className: 'w-full h-[230px] flex flex-col border-solid border-2 border-gray-400 rounded-2xl  mx-2 mb-2 text-[#8B0000]', children: [_jsx("h4", { className: 'text-center w-full justify-center pt-2', children: "Easy onboarding process" }), _jsx("p", { className: 'h-full text-wrap break-all flex items-center justify-center p-4', children: "asdlllllllllllllllljlflahdoflhsdvnoihsuivdnhaicdiuacsiudniasniguagsdiucduisgi How\\n are you" })] }), _jsxs("div", { className: 'w-full h-[230px] flex flex-col border-solid border-2 border-gray-400 rounded-2xl mr-4 ml-2 mb-2 text-[#8B0000]', children: [_jsx("h4", { className: 'text-center w-full justify-center pt-2', children: "Easy onboarding process" }), _jsx("p", { className: 'h-full text-wrap break-all flex items-center justify-center p-4', children: "Hello" })] }), _jsxs("div", { className: 'w-full h-[230px] flex flex-col border-solid border-2 border-gray-400 rounded-2xl  mx-2 mb-2 text-[#8B0000]', children: [_jsx("h4", { className: 'text-center w-full justify-center pt-2', children: "Easy onboarding process" }), _jsx("p", { className: 'h-full text-wrap break-all flex items-center justify-center p-4', children: "Hello" })] })] })] }) }), _jsx("div", { id: 'div-testimonials', className: 'w-full h-1/2 p-3 bg-white text-orange-900', children: _jsxs("section", { className: 'flex flex-col items-center', children: [_jsx("h2", { children: "Testimonials" }), _jsx("div", { id: 'div-testimonial-corosaul', className: 'w-2/3 h-full ', children: _jsx(TestimonialCorosaul, {}) })] }) }), _jsx("div", { id: 'how-to-start', className: 'bg-white', children: _jsxs("section", { children: [_jsx("h2", { children: "Welcome, Auction Hai" }), _jsx("p", { children: "How to start" }), _jsxs("div", { className: 'd-flex w-full flex-col lg:flex-row', children: [_jsx("div", { id: 'start-step-1', className: 'w-full h-[400px] mx-2 mb-2 rounded-2xl border-solid border-3 border-gray-600  flex items-center justify-center', children: _jsx("h3", { children: "Login Yourself" }) }), _jsx("div", { id: 'start-step-2', className: 'w-full h-[400px] mx-2 mb-2 rounded-2xl border-solid border-3 border-gray-600 flex items-center justify-center', children: _jsx("h3", { children: "Register as Buyer" }) }), _jsx("div", { id: 'start-step-3', className: 'w-full h-[400px] mx-2 mb-2 rounded-2xl border-solid border-3 border-gray-600 flex items-center justify-center', children: _jsx("h3", { children: "Register as Seller" }) })] })] }) }), _jsxs("div", { id: 'auction-table', className: "rounded-lg shadow-lg p-6 min-h-[400px] flex items-center text-gray-500", children: [_jsxs("div", { className: "w-1/5 bg-white min-h-[400px] mr-2 rounded-lg", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: "Upcoming Auctions" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full", children: [_jsx("thead", { className: "bg-gray-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold text-gray-600", children: "Title" }), _jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold text-gray-600", children: "Publish Date" }), _jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold text-gray-600", children: "Start Date" })] }) }), _jsx("tbody", { className: "divide-y divide-gray-200", children: [
                                                    {
                                                        id: 1,
                                                        title: "Vehicle Scrap Auction",
                                                        publishDate: "2025-02-01",
                                                        startDate: "2025-02-15",
                                                        link: "/auction/upcoming/1"
                                                    },
                                                    {
                                                        id: 2,
                                                        title: "Industrial Land Sale",
                                                        publishDate: "2025-02-03",
                                                        startDate: "2025-02-17",
                                                        link: "/auction/upcoming/2"
                                                    },
                                                    {
                                                        id: 3,
                                                        title: "Raw Timber Stock",
                                                        publishDate: "2025-02-05",
                                                        startDate: "2025-02-20",
                                                        link: "/auction/upcoming/3"
                                                    },
                                                    {
                                                        id: 4,
                                                        title: "E-Waste Collection",
                                                        publishDate: "2025-02-07",
                                                        startDate: "2025-02-22",
                                                        link: "/auction/upcoming/4"
                                                    }
                                                ].map((auction) => (_jsxs("tr", { onClick: () => window.location.href = auction.link, className: "hover:bg-gray-50 cursor-pointer", children: [_jsx("td", { className: "px-3 py-2 text-xs text-gray-500 truncate max-w-[150px]", children: auction.title }), _jsx("td", { className: "px-3 py-2 text-xs text-gray-500", children: auction.publishDate }), _jsx("td", { className: "px-3 py-2 text-xs text-gray-500", children: auction.startDate })] }, auction.id))) })] }) })] }), _jsxs("div", { className: "w-3/5 bg-white min-h-[400px] mr-2 rounded-lg", children: [_jsx("h2", { className: "text-xl font-semibold  mb-4", children: "Current Ongoing Auctions" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full", children: [_jsx("thead", { className: "bg-gray-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold text-gray-600", children: "S.No" }), _jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold text-gray-600", children: "Auction ID" }), _jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold text-gray-600", children: "Title" }), _jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold text-gray-600", children: "Publish Date" }), _jsx("th", { className: "px-4 py-3 text-left text-sm font-semibold text-gray-600", children: "Submission Start Date" }), _jsx("th", { className: "px-4 py-3 text-center text-sm font-semibold text-gray-600", children: "View" })] }) }), _jsx("tbody", { className: "divide-y divide-gray-200", children: [
                                                    {
                                                        id: 1,
                                                        auctionId: "AUC-2025-001",
                                                        title: "Industrial Equipment Auction",
                                                        publishDate: "2025-01-01",
                                                        submissionStart: "2025-01-15"
                                                    },
                                                    {
                                                        id: 2,
                                                        auctionId: "AUC-2025-002",
                                                        title: "Commercial Land Plots",
                                                        publishDate: "2025-01-02",
                                                        submissionStart: "2025-01-16"
                                                    },
                                                    {
                                                        id: 3,
                                                        auctionId: "AUC-2025-003",
                                                        title: "Metal Scrap Collection",
                                                        publishDate: "2025-01-03",
                                                        submissionStart: "2025-01-17"
                                                    },
                                                    {
                                                        id: 4,
                                                        auctionId: "AUC-2025-004",
                                                        title: "E-Waste Disposal Tender",
                                                        publishDate: "2025-01-04",
                                                        submissionStart: "2025-01-18"
                                                    },
                                                    {
                                                        id: 5,
                                                        auctionId: "AUC-2025-005",
                                                        title: "Timber Stock Auction",
                                                        publishDate: "2025-01-05",
                                                        submissionStart: "2025-01-19"
                                                    }
                                                ].map((auction) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-4 py-3 text-sm text-gray-500", children: auction.id }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-500", children: auction.auctionId }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-500", children: auction.title }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-500", children: auction.publishDate }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-500", children: auction.submissionStart }), _jsx("td", { className: "px-4 py-3 text-center", children: _jsx("button", { className: "px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:underline focus:outline-none", children: "View Details" }) })] }, auction.id))) })] }) })] }), _jsxs("div", { className: "w-1/5 min-h-[400px] bg-green-400 rounded-lg", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: "Hot Auctions" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full", children: [_jsx("thead", { className: "bg-gray-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold text-gray-600", children: "Title" }), _jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold text-gray-600", children: "Current Bid" }), _jsx("th", { className: "px-3 py-2 text-left text-xs font-semibold text-gray-600", children: "Category" })] }) }), _jsx("tbody", { className: "divide-y divide-gray-200", children: [
                                                    {
                                                        id: 1,
                                                        title: "Premium Land Plot",
                                                        currentBid: "₹15.2M",
                                                        category: "Land",
                                                        link: "/auction/hot/1"
                                                    },
                                                    {
                                                        id: 2,
                                                        title: "Rare Metal Stock",
                                                        currentBid: "₹8.5M",
                                                        category: "Metal",
                                                        link: "/auction/hot/2"
                                                    },
                                                    {
                                                        id: 3,
                                                        title: "Factory Equipment",
                                                        currentBid: "₹12.7M",
                                                        category: "Industrial",
                                                        link: "/auction/hot/3"
                                                    },
                                                    {
                                                        id: 4,
                                                        title: "Teak Wood Lot",
                                                        currentBid: "₹5.9M",
                                                        category: "Timber",
                                                        link: "/auction/hot/4"
                                                    },
                                                    {
                                                        id: 5,
                                                        title: "Server Parts",
                                                        currentBid: "₹3.2M",
                                                        category: "E-Waste",
                                                        link: "/auction/hot/5"
                                                    }
                                                ].map((auction) => (_jsxs("tr", { onClick: () => window.location.href = auction.link, className: "hover:bg-gray-50 cursor-pointer", children: [_jsx("td", { className: "px-3 py-2 text-xs text-gray-500 truncate max-w-[120px]", children: auction.title }), _jsx("td", { className: "px-3 py-2 text-xs font-medium text-green-600", children: auction.currentBid }), _jsx("td", { className: "px-3 py-2 text-xs text-gray-500", children: auction.category })] }, auction.id))) })] }) })] })] })] }) }));
};
export default HomePage;
