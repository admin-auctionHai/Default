var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import LoginPageImage from '../../public/images/SignUpPage1.jpeg';
import { authService } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: ''
    });
    const [errors, setErrors] = useState({});
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const navigateTo = (path) => {
        if (path == 'forgot-password') {
            return navigate('../forgot-pass');
        }
        else if (path == 'signup-bidder') {
            return navigate('../signup/bidder');
        }
        else {
            return navigate('../signup/vendor');
        }
    };
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'center', // Align the element vertically in the center
                inline: 'center',
            });
        }
    });
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (validateForm()) {
            try {
                const credentials = Object.assign({}, formData);
                const response = isLogin
                    ? yield authService.login(credentials)
                    : yield authService.signup(credentials);
                if (response.token) {
                    localStorage.setItem('authToken', response.token);
                    alert("Login Susscessfull");
                    window.location.href = '/';
                }
            }
            catch (error) {
                setErrors(prev => (Object.assign(Object.assign({}, prev), { submit: error.message })));
            }
        }
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [name]: value })));
        if (errors[name]) {
            setErrors(prev => (Object.assign(Object.assign({}, prev), { [name]: '' })));
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-100", children: _jsx("div", { className: "container mx-auto h-screen", children: _jsxs("div", { className: "flex justify-center items-center h-full", children: [_jsx("div", { className: "hidden lg:block lg:w-1/2", children: _jsx("img", { src: LoginPageImage, alt: "Login illustration", className: "w-full h-auto" }) }), _jsx("div", { className: "w-full lg:w-1/2 px-8 lg:px-12", children: _jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto", children: [_jsx("div", { className: 'pb-5', children: _jsx("h2", { children: "Welcome, Please Log In" }) }), _jsxs("form", { onSubmit: handleSubmit, children: [errors.submit && (_jsx("div", { className: "mb-4 text-red-500 text-sm text-center", children: errors.submit })), _jsxs("div", { className: "mb-6", children: [_jsx("input", { ref: inputRef, type: "email", name: "email", value: formData.email, onChange: handleChange, className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors", placeholder: "Enter a valid email address" }), errors.email && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.email }))] }), _jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: showPassword ? 'text' : 'password', name: "password", value: formData.password, onChange: handleChange, className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors", placeholder: "Enter password" }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: _jsx("svg", { className: "h-5 w-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: showPassword ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" })) }) })] }), errors.password && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.password }))] }), _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: "remember", className: "h-4 w-4 text-blue-600 border-gray-300 rounded" }), _jsx("label", { htmlFor: "remember", className: "ml-2 text-sm text-gray-600", children: "Remember me" })] }), _jsx("a", { href: "#!", className: "text-sm text-blue-600 hover:text-blue-800", children: "Forgot password?" })] }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium", children: isLogin ? 'Login' : 'Sign Up' }), _jsxs("p", { className: "text-center mt-4 text-sm", children: ["Don't have an account?", ' '] }), _jsxs("div", { className: "w-full flex flex-row items-center", children: [_jsx("div", { className: "w-1/2", children: _jsx("button", { type: "button", onClick: () => {
                                                            setIsLogin(!isLogin);
                                                            navigateTo("signup-bidder");
                                                        }, className: "text-red-600 hover:text-red-800 font-medium", children: "Bidder Registration" }) }), _jsx("div", { className: "w-1/2", children: _jsx("button", { type: "button", onClick: () => { setIsLogin(!isLogin); navigateTo("signup-vendor"); }, className: "text-green-600 hover:text-green-900 font-medium", children: "Vendor Registration" }) })] })] })] }) })] }) }) }));
};
export default LoginPage;
