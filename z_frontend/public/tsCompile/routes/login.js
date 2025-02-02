import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, LogOut, Settings, UserCircle, ChevronDown, ChevronRight } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginPageMenu = React.forwardRef((props, ref) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchBarIsFocused, setSearchBarIsFocused] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showLoginPanel, setShowLoginPanel] = useState(false);
    const [username, setUsername] = useState("");
    const panelRef = useRef(null);
    const navigate = useNavigate();
    //Login Form handlers
    const handleLogin = () => {
        console.log("Handled login button is clicked");
        // Redirecting to login page
        navigate('./auth/login');
    };
    useImperativeHandle(ref, () => ({
        setLogin,
    }));
    const setLogin = () => {
        console.log("Setting the user to logged in ");
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setShowProfileMenu(false);
    };
    const handleClickOutside = (event) => {
        if (panelRef.current && !panelRef.current.contains(event.target)) {
            setShowLoginPanel(false); // Collapse the panel if clicked outside
        }
    };
    useEffect(() => {
        if (showLoginPanel) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showLoginPanel]);
    return (_jsx("div", { children: isLoggedIn ? (_jsxs("div", { className: "position-relative d-flex", children: [_jsxs("button", { onClick: () => setShowProfileMenu(!showProfileMenu), className: "btn btn-link text-white text-decoration-none p-2 d-flex align-items-center gap-2 rounded transition-colors hover:bg-blue-700", children: [_jsx(UserCircle, { size: 24 }), _jsx("span", { className: "text-truncate", style: { maxWidth: '100px' }, children: username }), _jsx(LogOut, { size: 18 })] }), showProfileMenu && (_jsxs("div", { className: "position-absolute end-0 mt-12 bg-white rounded shadow-lg py-1", style: { width: '180px', zIndex: 1000 }, children: [_jsxs("a", { href: "#", className: "dropdown-item px-4 py-2 d-flex align-items-center transition-colors hover:bg-gray-100", children: [_jsx(User, { size: 16, className: "me-2" }), "Profile"] }), _jsxs("a", { href: "#", className: "dropdown-item px-4 py-2 d-flex align-items-center transition-colors hover:bg-gray-100", children: [_jsx(Settings, { size: 16, className: "me-2" }), "Settings"] }), _jsx("div", { className: "dropdown-divider" }), _jsxs("button", { onClick: handleLogout, className: "dropdown-item px-4 py-2 d-flex align-items-center text-danger transition-colors hover:bg-gray-100", children: [_jsx(LogOut, { size: 16, className: "me-2" }), "Logout"] })] })), ";"] })) : (_jsx("div", { children: _jsxs("button", { onClick: handleLogin, className: "btn btn-link text-white text-decoration-none p-2 d-flex align-items-center gap-2 rounded transition-colors hover:bg-blue-700", children: [_jsx(User, { size: 24 }), _jsx("span", { children: "Login" })] }) })) }));
});
export default LoginPageMenu;
