import React, { useState } from "react";
import { Search, User, LogOut, Settings, UserCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Outlet,useNavigate } from "react-router-dom";
import HeaderImage from '../public/images/AuctionHaiProfilePic1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPageMenu from "./login";
import LangThemFontUtility from "./LanguageFontTheme";
import { colors } from "@mui/material";

const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showLoginPanel,setShowLoginPanel] = useState(false);
    const navigate = useNavigate();


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
                "name": "Vehicle Parts",
                "link": "/categories/scrap/vehicle-parts"
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
          return (
              <li className="nav-item">
                  <a href={item.link || "#"} 
                     className="nav-link text-white px-3 py-2 d-flex align-items-center transition-colors hover:bg-blue-700 rounded">
                      {item.name}
                  </a>
              </li>
          );
      }

      return (
          <li className="nav-item dropdown"
              onMouseEnter={() => handleDropdownEnter(index)}
              onMouseLeave={handleDropdownLeave}>
              <a className="nav-link text-white px-3 py-2 d-flex align-items-center gap-1 transition-colors hover:bg-blue-700 rounded"
                 href={item.link || "#"}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                  {item.name}
                  <ChevronDown size={16} 
                      className={`transition-transform duration-200 ${isHovered || activeDropdown === index ? 'rotate-180' : ''}`}/>
              </a>
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
      );
  };

  const DropdownItem = ({ item, isNested }) => {
      const [showSubMenu, setShowSubMenu] = useState(false);

      if (!item.subItems) {
          return (
              <a className="dropdown-item text-black py-2 px-4 transition-colors hover:bg-blue-700"
                 href={item.link}>
                  {item.name}
              </a>
          );
      }

      return (
          <div className="dropdown-submenu position-relative"
               onMouseEnter={() => setShowSubMenu(true)}
               onMouseLeave={() => setShowSubMenu(false)}>
              <a className="dropdown-item text-black py-2 px-4 d-flex align-items-center justify-content-between transition-colors hover:bg-blue-700"
                 href={item.link || "#"}>
                  {item.name}
                  <ChevronRight size={16} />
              </a>
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
          </div>
      );
  };

  return (
      <div className="min-vh-100 d-flex flex-column">
        <header className="bg-gradient-to-r from-white to-gray-300 text-white">
        <div className="pb-2 w-full bg-gray-100">
          <div className="d-flex justify-content-start w-full bg-red-300  align-items-start position-relative" style={{ backgroundColor: "white" }}>
            <img 
              src={HeaderImage} 
              alt="Header" 
              className="img-fluid" 
              style={{ width: "25%", objectFit: "cover", borderRadius: "5px",height: "150px" }}
            />
            <div 
              className="position-absolute justify-end top-0 end-0 mt-2 me-2 text-dark"
              // style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: "5px 10px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}
            >
              {/* < LangThemFontUtility /> */}
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
                          < LoginPageMenu />
                      </div>
                  </div>
              </div>
          </nav>

            <main className="flex-grow-1 bg-light">
                <div className="py">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-4">
                            <h3 className="h5 mb-3">About Us</h3>
                            <p className="text-secondary mb-0">Your trusted platform for online auctions and bidding.</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="h5 mb-3">Quick Links</h3>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <a href="#" className="text-secondary text-decoration-none hover:text-white">Terms & Conditions</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-secondary text-decoration-none hover:text-white">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-secondary text-decoration-none hover:text-white">FAQs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3 className="h5 mb-3">Contact</h3>
                            <ul className="list-unstyled text-secondary mb-0">
                                <li className="mb-2">Email: support@auction.com</li>
                                <li>Phone: +1 (555) 123-4567</li>
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