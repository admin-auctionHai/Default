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
  
    return (
      <div className="fixed top-4 right-4 z-50 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <ul className="flex flex-col space-y-4">
          {/* Language Selector */}
          <li>
            <div className="flex items-center">
              <label htmlFor="languageChange" className="mr-2 text-gray-800 dark:text-gray-200">
                Language:
              </label>
              <select
                id="languageChange"
                value={language}
                onChange={handleLanguageChange}
                className="form-select border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी</option>
                <option value="tamil">தமிழ்</option>
                <option value="bengali">বাংলা</option>
                <option value="assamese">অসমীয়া</option>
                <option value="punjabi">ਪੰਜਾਬੀ</option>
                <option value="gujarati">ગુજરાતી</option>
                <option value="kannada">ಕನ್ನಡ</option>
                <option value="marathi">मराठी</option>
                <option value="malayalam">മലയാളം</option>
                <option value="odia">ଓଡ଼ିଆ</option>
                <option value="telugu">తెలుగు</option>
              </select>
            </div>
          </li>
  
          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              <span className="mr-2">{darkMode ? "Disable" : "Enable"} Dark Mode</span>
            </button>
          </li>
  
          {/* Font Size Adjustment */}
          <li>
            <div className="flex items-center space-x-2">
              <span className="text-gray-800 dark:text-gray-200">Font Size:</span>
              <button
                onClick={() => adjustFontSize(-2)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                A-
              </button>
              <button
                onClick={() => adjustFontSize(0)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                A
              </button>
              <button
                onClick={() => adjustFontSize(2)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                A+
              </button>
            </div>
          </li>
  
          {/* Skip to Main Content */}
          <li>
            <a
              href="#skip_main_content"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Skip to Main Content
            </a>
          </li>
        </ul>
      </div>
    );
  };

export default LangThemFontUtility;
