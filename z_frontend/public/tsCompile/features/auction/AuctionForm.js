import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { RefreshCcw } from 'lucide-react';
import { Card, CardContent } from '@mui/material';
const AuctionForm = () => {
    const [formData, setFormData] = useState({
        lotType: '',
        auctionId: '',
        secretariat: '',
        organization: '',
        keyword: '',
        department: '',
        auctionType: '',
        division: '',
        productCategory: '',
        subDivision: '',
        branch: '',
        valueCriteria: '',
        valueParameter: '',
        fromValue: '',
        toValue: '',
        dateCriteria: '',
        fromDate: '',
        toDate: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return (_jsx(Card, { children: _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-700", children: ["Lot Type ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsxs("select", { name: "lotType", value: formData.lotType, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", required: true, children: [_jsx("option", { value: "", children: "-Select-" }), _jsx("option", { value: "1", children: "SingleLot" }), _jsx("option", { value: "2", children: "MultiLot" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Auction ID" }), _jsx("input", { type: "text", name: "auctionId", value: formData.auctionId, onChange: handleInputChange, placeholder: "Auction ID", maxLength: 30, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Secretariat" }), _jsxs("select", { name: "secretariat", value: formData.secretariat, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "-Select-" }), _jsx("option", { value: "1", children: "Central Govt" }), _jsx("option", { value: "2", children: "Central PSU" }), _jsx("option", { value: "3", children: "State Govt" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Organisation" }), _jsxs("select", { name: "organization", value: formData.organization, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "-Select-" }), _jsx("option", { value: "1", children: "GNCTD OF DELHI" }), _jsx("option", { value: "2", children: "Govt of Goa" }), _jsx("option", { value: "3", children: "Govt of Haryana" })] })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Keyword" }), _jsx("input", { type: "text", name: "keyword", value: formData.keyword, onChange: handleInputChange, placeholder: "Keyword", maxLength: 50, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Product Category" }), _jsxs("select", { name: "productCategory", value: formData.productCategory, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "-Select-" }), _jsx("option", { value: "1", children: "Agricultural or Forestry" }), _jsx("option", { value: "2", children: "Electrical and Electronics Scrap" })] })] })] }), _jsxs("div", { className: "grid grid-cols-4 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Value Criteria" }), _jsxs("select", { name: "valueCriteria", value: formData.valueCriteria, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "-Select-" }), _jsx("option", { value: "1", children: "Auction Fee" }), _jsx("option", { value: "2", children: "EMD Fee" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Parameter" }), _jsxs("select", { name: "valueParameter", value: formData.valueParameter, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "-Select-" }), _jsx("option", { value: "1", children: "Equal" }), _jsx("option", { value: "2", children: "LessThan" }), _jsx("option", { value: "3", children: "GreaterThan" }), _jsx("option", { value: "4", children: "Between" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "From Value" }), _jsx("input", { type: "text", name: "fromValue", value: formData.fromValue, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "To Value" }), _jsx("input", { type: "text", name: "toValue", value: formData.toValue, onChange: handleInputChange, className: "w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsxs("div", { className: "flex justify-end space-x-4", children: [_jsx("button", { type: "button", onClick: () => setFormData({}), className: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200", children: "Clear" }), _jsx("button", { type: "submit", className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700", children: "Search" })] })] }) }) }));
};
export default AuctionForm;
