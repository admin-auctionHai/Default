import React, { useState } from "react";
import { FaSun, FaMoon, FaLanguage } from "react-icons/fa";

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
      <div className="bg-red-100 dark:bg-gray-800 pt-0  border-gray-200 dark:border-gray-700">
        <div className="">
          <ul className="flex flex-row">
            {/* Language Selector */}
            <li>
              <div className="flex flex-col">
                <select
                  id="languageChange"
                  value={language}
                  onChange={handleLanguageChange}
                  className="w-full form-select border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                >
                  <option value="english">English</option>
                  <option value="hindi">हिंदी</option>
                  <option value="tamil">தமிழ்</option>
                  <option value="bengali">বাংলা</option>
                  <option value="assamese">অসমীয়া</option>
                  <option value="punjabi">ਪੰਜਾਬੀ</option>
                  <option value="gujarati">ગુજરાતી</option>
                  <option value="kannada">ಕನ್ನಡ</option>
                  <option value="marathi">मराठी</option>
                  <option value="malayalam">മലയാളം</option>
                  <option value="odia">ଓଡ଼ିଆ</option>
                  <option value="telugu">తెలుగు</option>
                </select>
              </div>
            </li>
  
            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-center py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                <span className="mr-2 tooltiptext">{darkMode ? "Light" : "Dark"}</span>
              </button>
            </li>
  
            {/* Font Size Adjustment */}
            <li>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <button
                    onClick={() => adjustFontSize(-2)}
                    className="flex-1 px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => adjustFontSize(0)}
                    className="flex-1 px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
                  >
                    A
                  </button>
                  <button
                    onClick={() => adjustFontSize(2)}
                    className="flex-1 px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500"
                  >
                    A+
                  </button>
                </div>
              </div>
            </li>
  
            {/* Skip to Main Content */}

          </ul>
        </div>
      </div>
    );
};

export default LangThemFontUtility;