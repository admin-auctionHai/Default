import React, { useEffect, useState, useRef } from "react";
import { Search, User, LogOut, Settings, UserCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Outlet,useNavigate, Link, useLocation } from "react-router-dom";
import HeaderImage from '../public/images/AuctionHaiProfilePic1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPageMenu from "./login";
import LangThemFontUtility from "./LanguageFontTheme";
import { colors } from "@mui/material";
import SiteMap from "../features/homepage/siteMap";
import { useAuth } from "../services/auth/useAuthHook";

const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showLoginPanel,setShowLoginPanel] = useState(false);
    const navigate = useNavigate();
    const {checkPermission, getCurrUserInfo} = useAuth();

    //Login Form handlers
    const handleLogin = () =>{
      console.log("Handled login button is clicked");
      setShowLoginPanel(true);
    }




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
        "link": "/",
        "resource" : "home",
        "action" : "view"
      },
      {
        "name": "Categories",
        "resource" :"categories",
        "action" : "view",
        "link" : getCurrUserInfo.userType === 'BIDDER' ? "/searchAuction" : "/listAuction",
        "subItems": [
          {
            "name": "Scrap/Disposal",
            "link" : "/searchAuction/scrap",
            "resource" : "categories/scrap",
            "action" : "view",
            "subItems": [
              {
                "name": "Metal Scrap",
                "link": "/searchAuction/scrap/metal",
                "resource" : "categories/scrap",
                "action" : "view"
              },
              {
                "name": "List Metal Scrap",
                "link": "/listAuction/scrap/metal",
                "resource" : "sell",
                "action" : "view"
              },
              {
                "name": "E-Waste Scrap",
                "link": "/searchAuction/scrap/ewaste",
                "resource" : "categories/scrap",
                "action" : "view"
              },
              {
                "name": "List E-Waste Scrap",
                "link": "/listAuction/scrap/ewaste",
                "resource" : "sell",
                "action" : "view"
              },
              {
                "name": "Plastic Scrap",
                "link": "/searchAuction/scrap/plastic",
                "resource" : "categories/scrap",
                "action" : "view"
              },
              {
                "name": "List Plastic Scrap",
                "link": "/listAuction/scrap/plastic",
                "resource" : "sell",
                "action" : "view"
              },
              {
                "name": "Glass Scrap",
                "link": "/searchAuction/scrap/glass",
                "resource" : "categories/scrap",
                "action" : "view"
              },
              {
                "name": "List Glass Scrap",
                "link": "/listAuction/scrap/glass",
                "resource" : "sell",
                "action" : "view"
              },
              {
                "name": "Paper Scrap",
                "link": "/searchAuction/scrap/paper",
                "resource" : "categories/scrap",
                "action" : "view"
              },
              {
                "name": "List Paper Scrap",
                "link": "/listAuction/scrap/paper",
                "resource" : "sell",
                "action" : "view"
              },
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
        "name": "Search Auctions",
        "link": "/searchAuction",
        "resource" : "auctions",
        "action" : "view"
      },
      {
        "name": "Sign Up",
        "link": "/auth/signup",
        "resource" : "signup",
        "action" : "view"
      },
      {
        "name": "List Item",
        "link": "/listAuction",
        "resource" : "sell",
        "action" : "view"
      },
      {
        "name": "My Auctions",
        "link": "/myAuction",
        "resource" : "sell",
        "action" : "view",
        "subItems" : [
          {
            "name" : "View My Lots",
            "link" : "/myLots",
            "resource" : "sell",
            "action" : "view"
          },
          {
            "name" : "Monitor My Auctions",
            "link" : "/myAuction/monitor",
            "resource" : "sell",
            "action" : "view"
          }
        ]
      },
      {
        "name" : "My Bids",
        "link" : "/myBid",
        "resource" : "bid",
        "action" : "view"
      },
      {
        "name" : "Dashboard",
        "link" : "/profile",
        "resource" : "dashboard",
        "action" : "view"
      },
      {
        "name" : "Payment & Shipment",
        "links" : "#"
      },
      // {
      //   "name": "Notifications",
      //   "link": "/notification",
      //   "resource" : "notifications",
      //   "action" : "view"
      // },
      // {
      //   "name": "Wishlist",
      //   "link": "/wishlist",
      //   "resource" : "buy",
      //   "action" : "view"
      // },
      // {
      //   "name": "Cart",
      //   "link": "/cart",
      //   "resource" : "cart",
      //   "action" : "view"
      // },
      // {
      //   "name": "Help/FAQs",
      //   "link": "/help",
      //   "resource" : "help",
      //   "action" : "view"
      // },
      // {
      //   "name": "Community",
      //   "link": "/community",
      //     "resource" : "community",
      //   "action" : "view"
      // }
    ];

    
    const handleLogout = () => {
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
      setShowProfileMenu(false);
    };

    const handleNavItemNavigation = (item) =>{
      console.log("Nav item navigation");
      navigate(item.link);
    }

    // const Navigation = ({ navItems, checkPermission }) => {
    //   useEffect(() => {
    //     navItems.forEach((item) => {
    //       if (!item.subItems) {
    //         if (item.resource) {
    //           console.log(`Permission for ${item.name}:`, checkPermission(item.resource, item.action));
    //         }
    //       } else {
    //         item.subItems.forEach((subItem) => {
    //           if (!subItem.subItems) {
    //             console.log(`Permission for ${subItem.name}:`, checkPermission(subItem.resource, subItem.action));
    //           }
    //         });
    //       }
    //     });
    //   }, [navItems, checkPermission]);
    // }
    
    const MenuItem = ({ item, index }) => {
      const [isHovered, setIsHovered] = useState(false);

      if (!item.subItems) {
          return (
              <li className="nav-item">
                {checkPermission(item.resource, item.action) && 
                  <Link 
                  // onClick={handleNavItemNavigation(item)}
                    to={item.link || '/'}
                     className="nav-link text-white px-3 py-2 d-flex align-items-center transition-colors hover:bg-blue-700 rounded">
                      {item.name}
                  </Link>
                }
              </li>
          );
      }

      return (

          checkPermission(item.resource, item.action) && (<li className="nav-item dropdown"
              onMouseEnter={() => handleDropdownEnter(index)}
              onMouseLeave={handleDropdownLeave}>
               <Link className="nav-link text-white px-3 py-2 d-flex align-items-center gap-1 transition-colors hover:bg-blue-700 rounded"
                 to={item.link || "#"}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                  {item.name}
                  <ChevronDown size={16} 
                      className={`transition-transform duration-200 ${isHovered || activeDropdown === index ? 'rotate-180' : ''}`}/>
              </Link>
            
              {(activeDropdown === index) && (
                  <div className="dropdown-menu show border-0 mt-0 text-black bg-blue-800 p-0 animate-fadeIn">
                      {item.subItems.map((subItem, subIndex) => (
                          <DropdownItem 
                              key={subIndex} 
                              item={subItem} 
                              isNested={true}
                          />
                      ))}
                  </div>
              )}
          </li>
        )
      );
  };

  const DropdownItem = ({ item, isNested }) => {
      const [showSubMenu, setShowSubMenu] = useState(false);

      if (!item.subItems) {
        return (
          
          checkPermission(item.resource, item.action) && (
            <Link              
            className="dropdown-item text-black py-2 px-4 transition-colors hover:bg-blue-700"
              to={item.link}
            >
              {item.name}
            </Link>
          )
        );
      }

      return (
          checkPermission(item.resource,item.action) &&   
        (<div className="dropdown-submenu position-relative"
               onMouseEnter={() => setShowSubMenu(true)}
               onMouseLeave={() => setShowSubMenu(false)}>
              <Link className="dropdown-item text-black py-2 px-4 d-flex align-items-center justify-content-between transition-colors hover:bg-blue-700"
                 to={item.link || "#"}>
                  {item.name}
                  <ChevronRight size={16} />
              </Link>
              {showSubMenu && (
                  <div className="dropdown-menu show position-absolute top-0 start-100 bg-blue-800 border-0">
                      {item.subItems.map((subItem, idx) => (
                          <DropdownItem 
                              key={idx} 
                              item={subItem} 
                              isNested={true}
                          />
                      ))}
                  </div>
              )}
          </div>)
      );
    };
  console.log("User Status :",isLoggedIn);
  const loginRef = useRef();
  const location = useLocation();

  useEffect(()=>{
    console.log("Loading some values Location ",location.pathname);
    if(location.pathname === "/"){
      console.log("Redirecting to home");
      navigate("/home");
    }
    if(localStorage.getItem('authToken')){
      console.log(localStorage.getItem("authToken"));
      setIsLoggedIn(true);
      console.log(loginRef.current);
      if(loginRef.current){
        loginRef.current.setLogin();
      }
    }
  });

  return (
      <div className="min-vh-100 d-flex flex-column">
         <header className="bg-gradient-to-r from-white to-gray-300">
        <div className="w-full bg-gray-100 pb-2">
          <div className="relative w-full bg-white">
            <div className="relative w-full h-[150px]">
              <img
                src={HeaderImage}
                alt="Header"
                className="w-full h-full object-cover"
                style={{ borderRadius: "5px" }}
              />
            {/* <div className="">Hello</div> */}
            </div>
            <div className="absolute top-1 flex flex-row w-full">
              <div className="w-full flex flex-row items-start">
                <div className="flex left-1 w-full">
                  <a href="/home/#auction-table" className="text-black">
                      Skip to Main Content
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-col items-end">

              <div className="flex flex-row right-0 bg-white/90 rounded-lg shadow-md">
                <LangThemFontUtility 
                  className="w-48" // Fixed width for the utility panel
                  containerStyles="" // Additional padding/styling for the container
                  position="dropdown" // Indicates this is in a dropdown style rather than sidebar
                  isHeaderVersion={true} // Flag to adjust styling for header placement
                />
              </div>
              </div>

            </div>
          </div>
        </div>
      </header>
          <nav className="navbar navbar-expand sticky-top bg-blue-900 shadow py-0">
              <div className="container-fluid px-4">
                  <div className="d-flex justify-content-between align-items-center w-100 py-2">
                      {/* Left side: Navigation Items */}
                      <ul className="navbar-nav d-flex flex-row gap-1 mb-0">
                          {navItems.map((item, index) => (
                              <MenuItem key={index} item={item} index={index} />
                          ))}
                      </ul>

                      {/* Right side: Search and User/Login */}
                      <div className="d-flex align-items-center gap-4">
                          {/* Search Bar */}
                          <div className="position-relative">
                              <div className="d-flex align-items-center bg-white bg-opacity-10 rounded-pill px-3 py-1 transition-colors hover:bg-opacity-20">
                                  <Search size={18} className="text-white opacity-75" />
                                  <input
                                      type="text"
                                      placeholder="Search..."
                                      className="border-0 bg-transparent text-white placeholder-white placeholder-opacity-75 ms-2"
                                      style={{ width: '180px', outline: 'none' }}
                                  />
                              </div>
                          </div>

                          {/* User/Login Section */}
                          < LoginPageMenu ref={loginRef} />
                      </div>
                  </div>
              </div>
          </nav>
            <SiteMap />
            <main className="flex-grow-1 bg-light">
                <div className="py">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-3">
                            <h3 className="h5 mb-3">About Us</h3>
                            <ul>
                              <li className="mb-2">
                                  <a href="/info/feedback" className="text-secondary text-decoration-none hover:text-white">
                                      Feedback
                                  </a>
                              </li>
                              <li className="mb-2">
                                  <a href="/info/disclaimer" className="text-secondary text-decoration-none hover:text-white">
                                      Disclaimer
                                  </a>
                              </li>
                              <li className="mb-2">
                                  <a href="/info/termsOfUse" className="text-secondary text-decoration-none hover:text-white">
                                      Terms of Use
                                  </a>
                              </li>
                              <li className="mb-2">
                                  <a href="/info/websiteAccessibility" className="text-secondary text-decoration-none hover:text-white">
                                      Website Accessibility
                                  </a>
                              </li>
                              <li className="mb-2">
                                  <a href="/info/contactUs" className="text-secondary text-decoration-none hover:text-white">
                                      Contact Us
                                  </a>
                              </li>
                            </ul>


    {
    /* Feedback
    Disclaimer
    Terms of Use
    Website Accessibility
    Contact Us

    Privacy Policy
    Hyperlinking Policy
    Copyright Policy
    Content Archival Policy
    Website Security Policy

    Website Monitoring Policy
    Content Review Policy
    Website Contingency Management Policy
    Content Contribution, Moderation & Approval Policy(CMAP)

    Purchase
    Sitemap
    Internal Login
    Corporate Mail
    Auction Hai */
    }


                        </div>
                        <div className="col-md-3">
                            <h3 className="h5 mb-3">Quick Links</h3>
                            <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a href="/info/privacyPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/info/hyperlinkingPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Hyperlinking Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/info/copyrightPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Copyright Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/info/contentArchivalPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Content Archival Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/info/websiteSecurityPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Website Security Policy
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className="h5 mb-3">Contact</h3>
                            <ul className="list-unstyled text-secondary mb-0">
                            <li className="mb-2">
                                <a href="/info/websiteMonitoringPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Website Monitoring Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/info/contentReviewPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Content Review Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/info/websiteContingencyManagementPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Website Contingency Management Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/info/contentContributionModerationApprovalPolicy" className="text-secondary text-decoration-none hover:text-white">
                                    Content Contribution, Moderation & Approval Policy (CMAP)
                                </a>
                            </li>

                            </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="list-unstyled text-secondary mb-0">
                            <li className="mb-2">
                              <a href="/info/purchase" className="text-secondary text-decoration-none hover:text-white">Purchase</a>
                            </li>
                            <li className="mb-2">
                            <a href="/info/sitemap" className="text-secondary text-decoration-none hover:text-white">SiteMap</a>
                            </li>
                            <li className="mb-2">
                            <a href="/internalLogin" className="text-secondary text-decoration-none hover:text-white">Internal Login</a>
                            </li>
                            <li className="mb-2">
                            <a href="/info/corporatemail" className="text-secondary text-decoration-none hover:text-white">Corporate Mail</a>
                            </li>
                            <li className="mb-2">
                            <a href="/info/aboutus" className="text-secondary text-decoration-none hover:text-white">Auction Hai</a>
                            </li>

                          </ul>
                        </div>
                    </div>
                    <div className="border-top border-secondary mt-4 pt-4 text-center text-secondary">
                        <p className="mb-0">&copy; 2025 Auction Portal. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;