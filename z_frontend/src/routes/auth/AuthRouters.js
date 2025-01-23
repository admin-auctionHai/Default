import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/auth/login";

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={< LoginPage />} />
            <Route path="/signup" />
        </Routes>
    )
}

export default AuthRouter;