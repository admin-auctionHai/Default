import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import CaptchaValidation from "../../features/auth/captcha";
function SignUpPageTailwind() {
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState({
        loginId: "",
        correspondenceEmail: "",
        countryCode: "",
        mobileNumber: "",
        title: "",
        contactName: "",
        designation: "",
        dateOfBirth: "",
    });
    // State for validation errors
    const [errors, setErrors] = useState({
        loginId: "",
        correspondenceEmail: "",
        mobileNumber: "",
        contactName: "",
        designation: "",
        dateOfBirth: "",
    });
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Mobile number validation regex (assuming 10 digits)
    const mobileRegex = /^\d{10}$/;
    // Validation functions
    const validateEmail = (email) => {
        if (!email)
            return "Email is required";
        if (!emailRegex.test(email))
            return "Invalid email format";
        return "";
    };
    const validateMobile = (mobile) => {
        if (!mobile)
            return "Mobile number is required";
        if (!mobileRegex.test(mobile))
            return "Mobile number must be 10 digits";
        return "";
    };
    const validateRequired = (value, fieldName) => {
        if (!value)
            return `${fieldName} is required`;
        return "";
    };
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
        // Validate on change
        let error = "";
        switch (name) {
            case "loginId":
            case "correspondenceEmail":
                error = validateEmail(value);
                break;
            case "mobileNumber":
                error = validateMobile(value);
                break;
            case "contactName":
                error = validateRequired(value, "Contact name");
                break;
            case "designation":
                error = validateRequired(value, "Designation");
                break;
            case "dateOfBirth":
                error = validateRequired(value, "Date of birth");
                break;
            default:
                break;
        }
        setErrors((prev) => (Object.assign(Object.assign({}, prev), { [name]: error })));
    };
    // Form validation function
    const formValidation = () => {
        const newErrors = {
            loginId: validateEmail(formData.loginId),
            correspondenceEmail: validateEmail(formData.correspondenceEmail),
            mobileNumber: validateMobile(formData.mobileNumber),
            contactName: validateRequired(formData.contactName, "Contact name"),
            designation: validateRequired(formData.designation, "Designation"),
            dateOfBirth: validateRequired(formData.dateOfBirth, "Date of birth"),
        };
        setErrors(newErrors);
        // Check if there are any errors
        return !Object.values(newErrors).some((error) => error !== "");
    };
    //Company Details Validation
    const [companyData, setCompanyData] = useState({
        companyName: "",
        cin: "",
        preferentialBidder: "",
        registeredAddress: "",
        partnersDirectors: "",
        foreignCompany: "",
        city: "",
        state: "",
        postalCode: "",
        panNumber: "",
        establishmentYear: "",
        natureOfBusiness: "",
        legalStatus: "",
        companyCategory: "",
    });
    // Add these to the existing errors state
    const [companyErrors, setCompanyErrors] = useState({
        companyName: "",
        cin: "",
        registeredAddress: "",
        partnersDirectors: "",
        city: "",
        state: "",
        postalCode: "",
        panNumber: "",
        establishmentYear: "",
        natureOfBusiness: "",
        legalStatus: "",
        companyCategory: "",
    });
    // Validation patterns
    const cinRegex = /^([L|U]{1})([0-9]{5})([A-Z]{2})([0-9]{4})([A-Z]{3})([0-9]{6})$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const postalCodeRegex = /^[0-9]{6}$/;
    // Validation functions
    const validateCompanyField = (name, value) => {
        switch (name) {
            case "companyName":
                return value.trim() ? "" : "Company name is required";
            case "cin":
                if (!value)
                    return "CIN is required";
                return cinRegex.test(value) ? "" : "Invalid CIN format";
            case "registeredAddress":
                return value.trim() ? "" : "Registered address is required";
            case "partnersDirectors":
                return value.trim() ? "" : "Partners/Directors information is required";
            case "city":
                return value.trim() ? "" : "City is required";
            case "state":
                return value.trim() ? "" : "State is required";
            case "postalCode":
                if (!value)
                    return "Postal code is required";
                return postalCodeRegex.test(value) ? "" : "Invalid postal code format";
            case "panNumber":
                if (!value)
                    return "PAN/TAN number is required";
                return panRegex.test(value) ? "" : "Invalid PAN/TAN format";
            case "establishmentYear":
                if (!value)
                    return "Establishment year is required";
                const year = parseInt(value);
                return year >= 1800 && year <= new Date().getFullYear()
                    ? ""
                    : "Invalid year";
            case "natureOfBusiness":
                return value.trim() ? "" : "Nature of business is required";
            case "legalStatus":
                return value === "0" ? "Please select legal status" : "";
            case "companyCategory":
                return value === "0" ? "Please select company category" : "";
            default:
                return "";
        }
    };
    // Handle company information input changes
    const handleCompanyInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyData((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
        const error = validateCompanyField(name, value);
        setCompanyErrors((prev) => (Object.assign(Object.assign({}, prev), { [name]: error })));
    };
    // Validate all company fields
    const validateCompanyForm = () => {
        const newErrors = {};
        Object.keys(companyData).forEach((key) => {
            newErrors[key] = validateCompanyField(key, companyData[key]);
        });
        setCompanyErrors(newErrors);
        return !Object.values(newErrors).some((error) => error !== "");
    };
    const handleSubmit = () => {
        var _a;
        // First validate both form sections
        const generalInfoValid = formValidation();
        const companyInfoValid = validateCompanyForm();
        // Update form validity state
        setIsFormValid(generalInfoValid && companyInfoValid);
        if (!generalInfoValid) {
            alert('Please check General Information section for errors');
            return;
        }
        if (!companyInfoValid) {
            alert('Please check Company Information section for errors');
            return;
        }
        // If form is valid, trigger the captcha validation
        if (generalInfoValid && companyInfoValid) {
            // This will trigger the existing handleCaptchaSubmit
            (_a = document.querySelector('[data-captcha-submit]')) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    return (_jsx("div", { className: "flex justify-center items-center min-h-screen bg-gray-100", children: _jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full", children: [_jsxs("div", { className: "flex flex-wrap", children: [_jsx("h2", { className: "w-full pt-3", children: "Register As Vendor With Auction Hai" }), _jsxs("div", { className: "w-full p-8 ml-4", children: [_jsx("h2", { className: "text-xl text-left font-semibold text-indigo-600", style: { borderBottom: "5px double red" }, children: "General Information" }), _jsxs("div", { id: "div-general-information", className: "flex flex-col w-full h-full", children: [_jsxs("div", { className: "flex w-full h-full", children: [_jsxs("div", { className: "mb-2 mr-2 w-full", children: [_jsx("label", { className: "form-label", children: "Login ID" }), _jsx("input", { type: "email", name: "loginId", value: formData.loginId, onChange: handleInputChange, className: `mt-1 block w-full border ${errors.loginId ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500`, placeholder: "abc@nic.com" }), errors.loginId && (_jsx("small", { className: "text-red-500", children: errors.loginId })), _jsx("small", { className: "text-gray-500", children: "Enter a valid email. This cannot be changed later." })] }), _jsxs("div", { className: "mb-2 mx-2 w-full", children: [_jsx("label", { className: "form-label", children: "Correspondence Email" }), _jsx("input", { type: "email", name: "correspondenceEmail", value: formData.correspondenceEmail, onChange: handleInputChange, className: `mt-1 block w-full border ${errors.correspondenceEmail
                                                                ? "border-red-500"
                                                                : "border-gray-300"} rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500`, placeholder: "abc@nic.com" }), errors.correspondenceEmail && (_jsx("small", { className: "text-red-500", children: errors.correspondenceEmail }))] }), _jsx("div", { className: "mb-2 mx-2 w-full", children: _jsxs("div", { className: "flex flex-col", children: [_jsx("div", { id: "div-mobile-number-label", children: _jsx("label", { className: "form-label", children: "Mobile No" }) }), _jsxs("div", { id: "div-mobile-number", className: "flex flex-row", children: [_jsx("div", { id: "div-mobile-number-country-code", className: "w-1/3 pr-3", children: _jsxs("select", { name: "countryCode", value: formData.countryCode, onChange: handleInputChange, className: "w-full h-[42px] bg-white mt-1 block border border-gray-300 rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500", children: [_jsx("option", { value: "0", children: "-Select-" }), _jsx("option", { value: "1", children: "ABW (297)" }), _jsx("option", { value: "2", children: "AFG (93)" }), _jsx("option", { value: "3", children: "AGO (244)" }), _jsx("option", { value: "4", children: "ALB (355)" }), _jsx("option", { value: "5", children: "AND (376)" }), _jsx("option", { value: "6", children: "ANT (599)" }), _jsx("option", { value: "7", children: "ARG (54)" }), _jsx("option", { value: "8", children: "ARM (374)" }), _jsx("option", { value: "9", children: "ATA (672)" }), _jsx("option", { value: "10", children: "AUS (61)" }), _jsx("option", { value: "11", children: "AUT (43)" }), _jsx("option", { value: "12", children: "AZE (994)" }), _jsx("option", { value: "13", children: "BDI (257)" }), _jsx("option", { value: "14", children: "BEL (32)" }), _jsx("option", { value: "15", children: "BEN (229)" }), _jsx("option", { value: "16", children: "BFA (226)" }), _jsx("option", { value: "17", children: "BGD (880)" }), _jsx("option", { value: "18", children: "BGR (359)" }), _jsx("option", { value: "19", children: "BHR (973)" }), _jsx("option", { value: "20", children: "BIH (387)" }), _jsx("option", { value: "21", children: "BLR (375)" }), _jsx("option", { value: "22", children: "BLZ (501)" }), _jsx("option", { value: "23", children: "BOL (591)" }), _jsx("option", { value: "24", children: "BRA (55)" }), _jsx("option", { value: "25", children: "BRN (673)" }), _jsx("option", { value: "26", children: "BTN (975)" }), _jsx("option", { value: "27", children: "BWA (267)" }), _jsx("option", { value: "28", children: "CAF (236)" }), _jsx("option", { value: "29", children: "CAN (1)" }), _jsx("option", { value: "30", children: "CCK (672)" }), _jsx("option", { value: "31", children: "CHL (56)" }), _jsx("option", { value: "32", children: "CHN (86)" }), _jsx("option", { value: "33", children: "CIV (225)" }), _jsx("option", { value: "34", children: "CMR (237)" }), _jsx("option", { value: "35", children: "COG (242)" }), _jsx("option", { value: "36", children: "COK (682)" }), _jsx("option", { value: "37", children: "COL (57)" }), _jsx("option", { value: "38", children: "COM (269)" }), _jsx("option", { value: "39", children: "CPV (238)" }), _jsx("option", { value: "40", children: "CRI (506)" }), _jsx("option", { value: "41", children: "CUB (53)" }), _jsx("option", { value: "42", children: "CXR (61)" }), _jsx("option", { value: "43", children: "CYP (357)" }), _jsx("option", { value: "44", children: "CZE (420)" }), _jsx("option", { value: "45", children: "DEU (49)" }), _jsx("option", { value: "46", children: "DJI (253)" }), _jsx("option", { value: "47", children: "DNK (45)" }), _jsx("option", { value: "48", children: "DZA (213)" }), _jsx("option", { value: "49", children: "ECU (593)" }), _jsx("option", { value: "50", children: "EGY (20)" }), _jsx("option", { value: "51", children: "ERI (291)" }), _jsx("option", { value: "52", children: "EST (372)" }), _jsx("option", { value: "53", children: "ETH (251)" }), _jsx("option", { value: "54", children: "FIN (358)" }), _jsx("option", { value: "55", children: "FJI (679)" }), _jsx("option", { value: "56", children: "FLK (500)" }), _jsx("option", { value: "57", children: "FRA (33)" }), _jsx("option", { value: "58", children: "FRO (298)" }), _jsx("option", { value: "59", children: "GAB (241)" }), _jsx("option", { value: "60", children: "GEO (995)" }), _jsx("option", { value: "61", children: "GHA (233)" }), _jsx("option", { value: "62", children: "GIB (350)" }), _jsx("option", { value: "63", children: "GIN (224)" }), _jsx("option", { value: "64", children: "GLP (590)" }), _jsx("option", { value: "65", children: "GMB (220)" }), _jsx("option", { value: "66", children: "GNB (245)" }), _jsx("option", { value: "67", children: "GNQ (240)" }), _jsx("option", { value: "68", children: "GRC (30)" }), _jsx("option", { value: "69", children: "GRL (299)" }), _jsx("option", { value: "70", children: "GTM (502)" }), _jsx("option", { value: "71", children: "GUY (592)" }), _jsx("option", { value: "72", children: "HKG (852)" }), _jsx("option", { value: "73", children: "HND (504)" }), _jsx("option", { value: "74", children: "HRV (385)" }), _jsx("option", { value: "75", children: "HTI (509)" }), _jsx("option", { value: "76", children: "HUN (36)" }), _jsx("option", { value: "77", children: "IDN (62)" }), _jsx("option", { value: "78", children: "IND (91)" }), _jsx("option", { value: "79", children: "IOT (246)" }), _jsx("option", { value: "80", children: "IRL (353)" }), _jsx("option", { value: "81", children: "IRN (98)" }), _jsx("option", { value: "82", children: "IRQ (964)" }), _jsx("option", { value: "83", children: "ISL (354)" }), _jsx("option", { value: "84", children: "ISR (972)" }), _jsx("option", { value: "85", children: "ITA (39)" }), _jsx("option", { value: "86", children: "JOR (962)" }), _jsx("option", { value: "87", children: "JPN (81)" }), _jsx("option", { value: "88", children: "KAZ (7)" }), _jsx("option", { value: "89", children: "KEN (254)" }), _jsx("option", { value: "90", children: "KGZ (996)" }), _jsx("option", { value: "91", children: "KHM (855)" }), _jsx("option", { value: "92", children: "KIR (686)" }), _jsx("option", { value: "93", children: "KOR (82)" }), _jsx("option", { value: "94", children: "KWT (965)" }), _jsx("option", { value: "95", children: "LBN (961)" }), _jsx("option", { value: "96", children: "LBR (231)" }), _jsx("option", { value: "97", children: "LBY (218)" }), _jsx("option", { value: "98", children: "LIE (423)" }), _jsx("option", { value: "99", children: "LSO (266)" }), _jsx("option", { value: "100", children: "LTU (370)" }), _jsx("option", { value: "101", children: "LUX (352)" }), _jsx("option", { value: "102", children: "LVA (371)" }), _jsx("option", { value: "103", children: "MAC (853)" }), _jsx("option", { value: "104", children: "MAR (212)" }), _jsx("option", { value: "105", children: "MCO (377)" }), _jsx("option", { value: "106", children: "MDG (261)" }), _jsx("option", { value: "107", children: "MDV (960)" }), _jsx("option", { value: "108", children: "MEX (52)" }), _jsx("option", { value: "109", children: "MHL (692)" }), _jsx("option", { value: "110", children: "MKD (389)" }), _jsx("option", { value: "111", children: "MLI (223)" }), _jsx("option", { value: "112", children: "MLT (356)" }), _jsx("option", { value: "113", children: "MMR (95)" }), _jsx("option", { value: "114", children: "MNE (382)" }), _jsx("option", { value: "115", children: "MNG (976)" }), _jsx("option", { value: "116", children: "MOZ (258)" }), _jsx("option", { value: "117", children: "MRT (222)" }), _jsx("option", { value: "118", children: "MTQ (596)" }), _jsx("option", { value: "119", children: "MUS (230)" }), _jsx("option", { value: "120", children: "MWI (265)" }), _jsx("option", { value: "121", children: "MYS (60)" }), _jsx("option", { value: "122", children: "MYT (269)" }), _jsx("option", { value: "123", children: "NAM (264)" }), _jsx("option", { value: "124", children: "NCL (687)" }), _jsx("option", { value: "125", children: "NER (227)" }), _jsx("option", { value: "126", children: "NGA (234)" }), _jsx("option", { value: "127", children: "NIC (505)" }), _jsx("option", { value: "128", children: "NIU (683)" }), _jsx("option", { value: "129", children: "NLD (31)" }), _jsx("option", { value: "130", children: "NOR (47)" }), _jsx("option", { value: "131", children: "NPL (977)" }), _jsx("option", { value: "132", children: "NRU (674)" }), _jsx("option", { value: "133", children: "NZL (64)" }), _jsx("option", { value: "134", children: "OMN (968)" }), _jsx("option", { value: "135", children: "PAK (92)" }), _jsx("option", { value: "136", children: "PAN (507)" }), _jsx("option", { value: "137", children: "PCN (64)" }), _jsx("option", { value: "138", children: "PER (51)" }), _jsx("option", { value: "139", children: "PHL (63)" }), _jsx("option", { value: "140", children: "PLW (680)" }), _jsx("option", { value: "141", children: "PNG (675)" }), _jsx("option", { value: "142", children: "POL (48)" }), _jsx("option", { value: "143", children: "PRT (351)" }), _jsx("option", { value: "144", children: "PRY (595)" }), _jsx("option", { value: "145", children: "QAT (974)" }), _jsx("option", { value: "146", children: "REU (262)" }), _jsx("option", { value: "147", children: "ROM (40)" }), _jsx("option", { value: "148", children: "RUS (70)" }), _jsx("option", { value: "149", children: "RWA (250)" }), _jsx("option", { value: "150", children: "SAU (966)" }), _jsx("option", { value: "151", children: "SEN (221)" }), _jsx("option", { value: "152", children: "SLV (503)" }), _jsx("option", { value: "153", children: "SMR (378)" }), _jsx("option", { value: "154", children: "SRB (381)" }), _jsx("option", { value: "155", children: "STP (239)" }), _jsx("option", { value: "156", children: "TCD (235)" }), _jsx("option", { value: "157", children: "TLS (670)" }), _jsx("option", { value: "158", children: "USA (1)" }), _jsx("option", { value: "159", children: "WSM (684)" }), _jsx("option", { value: "160", children: "XKX (383)" })] }) }), _jsxs("div", { id: "div-id-mobile-number", children: [_jsx("input", { type: "text", name: "mobileNumber", value: formData.mobileNumber, onChange: handleInputChange, placeholder: "9876543210", className: `mt-1 block border ${errors.mobileNumber
                                                                                    ? "border-red-500"
                                                                                    : "border-gray-300"} rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2` }), errors.mobileNumber && (_jsx("small", { className: "text-red-500", children: errors.mobileNumber }))] })] })] }) })] }), _jsxs("div", { className: "flex w-full h-full", children: [_jsxs("div", { className: "flex mr-2 w-2/5", children: [_jsxs("div", { className: "w-1/6", children: [_jsx("label", { className: "form-label", children: "Title" }), _jsxs("select", { name: "title", value: formData.title, onChange: handleInputChange, className: "mt-1 h-[42px] bg-white block w-full border border-gray-300 rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500", children: [_jsx("option", { value: "0", children: "Select.." }), _jsx("option", { value: "1", children: "Mr" }), _jsx("option", { value: "2", children: "Mrs" }), _jsx("option", { value: "3", children: "Ms" }), _jsx("option", { value: "4", children: "Dr" }), _jsx("option", { value: "5", children: "Shri" })] })] }), _jsxs("div", { className: "w-5/6 flex flex-col mx-2", children: [_jsx("label", { className: "form-label", children: "Contact Name" }), _jsx("input", { type: "text", name: "contactName", value: formData.contactName, onChange: handleInputChange, placeholder: "Anurag Mehar", className: `block w-full mt-1 p-2 text-md border ${errors.contactName
                                                                        ? "border-red-500"
                                                                        : "border-gray-300"} rounded-md focus:ring-indigo-500 focus:border-indigo-500` }), errors.contactName && (_jsx("small", { className: "text-red-500", children: errors.contactName }))] })] }), _jsxs("div", { className: "mx-2 w-2/5", children: [_jsx("label", { className: "form-label", children: "Designation" }), _jsx("input", { type: "text", name: "designation", value: formData.designation, onChange: handleInputChange, className: `mt-1 block w-full border ${errors.designation ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500`, placeholder: "Chief Technical Officer" }), errors.designation && (_jsx("small", { className: "text-red-500", children: errors.designation }))] }), _jsxs("div", { className: "mx-2 w-1/5", children: [_jsx("label", { className: "form-label", children: "Date of Birth" }), _jsx("input", { type: "date", name: "dateOfBirth", value: formData.dateOfBirth, onChange: handleInputChange, className: `mt-1 block w-full border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500` })] })] })] })] }), _jsxs("div", { id: "div-company-information", className: "w-full px-8 pb-8 ml-4", children: [_jsx("h2", { className: "text-xl text-left font-semibold text-indigo-600", style: { borderBottom: "5px double red" }, children: "Company Information" }), _jsxs("div", { id: "div-company-information-card", className: "flex flex-col w-full", children: [_jsxs("div", { className: "flex w-full h-full", children: [_jsxs("div", { className: "mx-2 w-2/5", children: [_jsx("label", { className: "form-label", children: "Company Name" }), _jsx("input", { type: "text", name: "companyName", value: companyData.companyName, onChange: handleCompanyInputChange, className: `mt-1 block w-full border ${companyErrors.companyName
                                                                ? "border-red-500"
                                                                : "border-gray-300"} rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500`, placeholder: "Enter company name" }), companyErrors.companyName && (_jsx("small", { className: "text-red-500", children: companyErrors.companyName }))] }), _jsxs("div", { className: "mx-2 w-2/5", children: [_jsx("label", { className: "form-label", children: "CIN" }), _jsx("input", { type: "text", name: "cin", value: companyData.cin, onChange: handleCompanyInputChange, className: `mt-1 block w-full border ${companyErrors.cin ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm text-md p-2 focus:ring-indigo-500 focus:border-indigo-500`, placeholder: "Enter CIN" }), companyErrors.cin && (_jsx("small", { className: "text-red-500", children: companyErrors.cin }))] }), _jsxs("div", { className: "mx-2 w-1/5", children: [_jsx("label", { className: "block text-lg text-center font-medium text-gray-700", children: "Preferential Bidder" }), _jsxs("div", { className: "flex flex-row justify-center", children: [_jsxs("div", { className: "flex p-2", children: [_jsx("label", { className: "text-md", children: "Yes" }), _jsx("input", { type: "radio", name: "preferentialBidder", value: "yes", checked: companyData.preferentialBidder === "yes", onChange: handleCompanyInputChange, className: "mt-1 w-full m-1" })] }), _jsxs("div", { className: "flex p-2", children: [_jsx("label", { children: "No" }), _jsx("input", { type: "radio", name: "preferentialBidder", value: "no", checked: companyData.preferentialBidder === "no", onChange: handleCompanyInputChange, className: "mt-1 w-full m-1" })] })] })] })] }), _jsxs("div", { className: "flex w-full h-full pt-3", children: [_jsxs("div", { className: "mx-2 w-2/5", children: [_jsx("label", { className: "text-lg font-medium text-left block text-gray-700", children: "Registered Address" }), _jsx("textarea", { name: "registeredAddress", value: companyData.registeredAddress, onChange: handleCompanyInputChange, className: `form-input text-md ${companyErrors.registeredAddress ? "border-red-500" : ""}` }), companyErrors.registeredAddress && (_jsx("small", { className: "text-red-500", children: companyErrors.registeredAddress }))] }), _jsxs("div", { className: "mx-2 w-2/5", children: [_jsx("label", { className: "text-lg font-medium text-left block text-gray-700", children: "Name Of Partners/Directors" }), _jsx("textarea", { name: "partnersDirectors", value: companyData.partnersDirectors, onChange: handleCompanyInputChange, className: `form-input text-md ${companyErrors.partnersDirectors ? "border-red-500" : ""}` }), companyErrors.partnersDirectors && (_jsx("small", { className: "text-red-500", children: companyErrors.partnersDirectors }))] }), _jsxs("div", { className: "mx-2 w-1/5 h-full flex flex-col pt-4", children: [_jsx("label", { className: "block text-lg text-center font-medium text-gray-700", children: "Foreign Company" }), _jsxs("div", { className: "flex flex-row h-full justify-center", children: [_jsxs("div", { className: "flex p-2", children: [_jsx("label", { className: "text-md", children: "Yes" }), _jsx("input", { type: "radio", name: "foreignCompany", value: "yes", checked: companyData.foreignCompany === "yes", onChange: handleCompanyInputChange, className: "mt-1 w-full m-1" })] }), _jsxs("div", { className: "flex p-2", children: [_jsx("label", { children: "No" }), _jsx("input", { type: "radio", name: "foreignCompany", value: "no", checked: companyData.foreignCompany === "no", onChange: handleCompanyInputChange, className: "mt-1 w-full m-1" })] })] })] })] }), _jsxs("div", { className: "flex w-full h-full pt-3", children: [_jsxs("div", { id: "div-id-company-city", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "City" }), _jsx("input", { type: "text", name: "city", value: companyData.city, onChange: handleCompanyInputChange, className: `form-input text-md ${companyErrors.city ? "border-red-500" : ""}` }), companyErrors.city && (_jsx("small", { className: "text-red-500", children: companyErrors.city }))] }), _jsxs("div", { id: "div-id-company-state", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "State" }), _jsx("input", { type: "text", name: "state", value: companyData.state, onChange: handleCompanyInputChange, className: `form-input text-md ${companyErrors.state ? "border-red-500" : ""}` }), companyErrors.state && (_jsx("small", { className: "text-red-500", children: companyErrors.state }))] }), _jsxs("div", { id: "div-id-company-postal-code", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "Postal Code" }), _jsx("input", { type: "text", name: "postalCode", value: companyData.postalCode, onChange: handleCompanyInputChange, className: `form-input text-md ${companyErrors.postalCode ? "border-red-500" : ""}`, maxLength: "6" }), companyErrors.postalCode && (_jsx("small", { className: "text-red-500", children: companyErrors.postalCode }))] })] }), _jsxs("div", { className: "flex w-full h-full pt-3", children: [_jsxs("div", { id: "div-id-company-pan", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "PAN/TAN or Temporary Number" }), _jsx("input", { type: "text", name: "panNumber", value: companyData.panNumber, onChange: handleCompanyInputChange, className: `form-input text-md ${companyErrors.panNumber ? "border-red-500" : ""}`, maxLength: "10" }), companyErrors.panNumber && (_jsx("small", { className: "text-red-500", children: companyErrors.panNumber }))] }), _jsxs("div", { id: "div-id-company-starting_year", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "Establishment Year" }), _jsxs("select", { name: "establishmentYear", value: companyData.establishmentYear, onChange: handleCompanyInputChange, className: `form-input text-md bg-white ${companyErrors.establishmentYear ? "border-red-500" : ""}`, children: [_jsx("option", { value: "", children: "-Select Year-" }), Array.from({ length: 226 }, (_, i) => 1800 + i).map((year) => (_jsx("option", { value: year, children: year }, year)))] }), companyErrors.establishmentYear && (_jsx("small", { className: "text-red-500", children: companyErrors.establishmentYear }))] }), _jsxs("div", { id: "div-id-company-nature_of_buisness", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "Nature of Business" }), _jsx("input", { type: "text", name: "natureOfBusiness", value: companyData.natureOfBusiness, onChange: handleCompanyInputChange, className: `form-input text-md ${companyErrors.natureOfBusiness ? "border-red-500" : ""}` }), companyErrors.natureOfBusiness && (_jsx("small", { className: "text-red-500", children: companyErrors.natureOfBusiness }))] })] }), _jsxs("div", { className: "flex w-full h-full pt-3", children: [_jsxs("div", { id: "div-id-company-legal_status", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "Legal Status" }), _jsxs("select", { name: "legalStatus", value: companyData.legalStatus, onChange: handleCompanyInputChange, className: `form-input text-md bg-white ${companyErrors.legalStatus ? "border-red-500" : ""}`, children: [_jsx("option", { value: "0", children: "-Select-" }), _jsx("option", { value: "1", children: "Limited Company" }), _jsx("option", { value: "2", children: "Undertaking" }), _jsx("option", { value: "3", children: "Jointventure" }), _jsx("option", { value: "4", children: "Partnership" }), _jsx("option", { value: "5", children: "Others" })] }), companyErrors.legalStatus && (_jsx("small", { className: "text-red-500", children: companyErrors.legalStatus }))] }), _jsxs("div", { id: "div-id-company-category", className: "mx-2 w-1/3", children: [_jsx("label", { className: "form-label text-left", children: "Company Category" }), _jsxs("select", { name: "companyCategory", value: companyData.companyCategory, onChange: handleCompanyInputChange, className: `form-input text-md bg-white ${companyErrors.companyCategory ? "border-red-500" : ""}`, children: [_jsx("option", { value: "0", children: "-Select-" }), _jsx("option", { value: "1", children: "Micro Unit as per MSME" }), _jsx("option", { value: "2", children: "Small Unit as per MSME" }), _jsx("option", { value: "3", children: "Medium Unit as per MSME" }), _jsx("option", { value: "4", children: "Ancillary Unit" }), _jsx("option", { value: "5", children: "Project Affected Person of this Company" }), _jsx("option", { value: "6", children: "SSI" }), _jsx("option", { value: "7", children: "Others" })] }), companyErrors.companyCategory && (_jsx("small", { className: "text-red-500", children: companyErrors.companyCategory }))] })] })] })] })] }), _jsx("div", { id: "div-captcha-validation", className: "flex w-full pt-1 px-8", children: _jsx(CaptchaValidation, {}) }), _jsx("div", { className: "w-full items-end", children: _jsx("button", { className: "py-2 px-6 my-4 border border-solid border-black hover:bg-gray-600 transition-colors duration-300", onClick: handleSubmit, children: "Submit" }) })] }) }));
}
export default SignUpPageTailwind;
