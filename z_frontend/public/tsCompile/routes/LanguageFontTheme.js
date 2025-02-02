import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { FaSun, FaMoon, FaLanguage } from "react-icons/fa"; // Icons for Dark Mode and Language
const LangThemFontUtility = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [language, setLanguage] = useState("English");
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        console.log(`Language changed to: ${e.target.value}`);
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark", !darkMode);
    };
    const adjustFontSize = (change) => {
        const newFontSize = change === 0 ? 16 : Math.min(24, Math.max(12, fontSize + change));
        setFontSize(newFontSize);
        document.documentElement.style.fontSize = `${newFontSize}px`;
    };
    return (_jsx("div", { className: "fixed top-4 right-4 z-50 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg", children: _jsxs("ul", { className: "flex flex-col space-y-4", children: [_jsx("li", { children: _jsxs("div", { className: "flex items-center", children: [_jsx("label", { htmlFor: "languageChange", className: "mr-2 text-gray-800 dark:text-gray-200", children: "Language:" }), _jsxs("select", { id: "languageChange", value: language, onChange: handleLanguageChange, className: "form-select border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded", children: [_jsx("option", { value: "english", children: "English" }), _jsx("option", { value: "hindi", children: "\u0939\u093F\u0902\u0926\u0940" }), _jsx("option", { value: "tamil", children: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD" }), _jsx("option", { value: "bengali", children: "\u09AC\u09BE\u0982\u09B2\u09BE" }), _jsx("option", { value: "assamese", children: "\u0985\u09B8\u09AE\u09C0\u09DF\u09BE" }), _jsx("option", { value: "punjabi", children: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40" }), _jsx("option", { value: "gujarati", children: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0" }), _jsx("option", { value: "kannada", children: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1" }), _jsx("option", { value: "marathi", children: "\u092E\u0930\u093E\u0920\u0940" }), _jsx("option", { value: "malayalam", children: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02" }), _jsx("option", { value: "odia", children: "\u0B13\u0B5C\u0B3F\u0B06" }), _jsx("option", { value: "telugu", children: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41" })] })] }) }), _jsx("li", { children: _jsx("button", { onClick: toggleDarkMode, className: "flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500", children: _jsxs("span", { className: "mr-2", children: [darkMode ? "Disable" : "Enable", " Dark Mode"] }) }) }), _jsx("li", { children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("span", { className: "text-gray-800 dark:text-gray-200", children: "Font Size:" }), _jsx("button", { onClick: () => adjustFontSize(-2), className: "px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500", children: "A-" }), _jsx("button", { onClick: () => adjustFontSize(0), className: "px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500", children: "A" }), _jsx("button", { onClick: () => adjustFontSize(2), className: "px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500", children: "A+" })] }) }), _jsx("li", { children: _jsx("a", { href: "#skip_main_content", className: "text-blue-600 dark:text-blue-400 underline", children: "Skip to Main Content" }) })] }) }));
};
export default LangThemFontUtility;
