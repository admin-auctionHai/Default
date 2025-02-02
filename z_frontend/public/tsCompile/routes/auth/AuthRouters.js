import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/auth/login";
const AuthRouter = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/signup" })] }));
};
export default AuthRouter;
