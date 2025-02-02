import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const MainContainerDramatic = ({ children }) => {
    return (_jsxs("main", { className: "flex-grow mx-auto pb-4 bg-cover bg-center bg-no-repeat min-h-screen relative overflow-hidden", style: {
            background: `
          linear-gradient(
            45deg,
            #000 0%,
            #8B4513 25%,
            #D4AF37 50%,
            #8B4513 75%,
            #000 100%
          )
        `,
            backgroundSize: '200% 200%',
            animation: 'gradientAnimation 15s ease infinite'
        }, children: [_jsx("style", { children: `
          @keyframes gradientAnimation {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        ` }), _jsx("div", { className: "relative z-10", children: children })] }));
};
export default MainContainerDramatic;
