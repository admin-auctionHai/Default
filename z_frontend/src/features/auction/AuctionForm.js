import React, {useState} from "react";
import { RefreshCcw } from 'lucide-react';
import { Card, CardContent } from '@mui/material'

const AuctionForm = () =>{
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
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
    
      return (
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Lot Type <span className="text-red-500">*</span>
                  </label>
                  <select name="lotType" value={formData.lotType} onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">-Select-</option>
                    <option value="1">SingleLot</option>
                    <option value="2">MultiLot</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Auction ID
                  </label>
                  <input
                    type="text"
                    name="auctionId"
                    value={formData.auctionId}
                    onChange={handleInputChange}
                    placeholder="Auction ID"
                    maxLength={30}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
    
              {/* Organization Section */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Secretariat
                  </label>
                  <select
                    name="secretariat"
                    value={formData.secretariat}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-Select-</option>
                    <option value="1">Central Govt</option>
                    <option value="2">Central PSU</option>
                    <option value="3">State Govt</option>
                  </select>
                </div>
    
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Organisation
                  </label>
                  <select
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-Select-</option>
                    <option value="1">GNCTD OF DELHI</option>
                    <option value="2">Govt of Goa</option>
                    <option value="3">Govt of Haryana</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
    
              {/* Search and Category Section */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Keyword
                  </label>
                  <input
                    type="text"
                    name="keyword"
                    value={formData.keyword}
                    onChange={handleInputChange}
                    placeholder="Keyword"
                    maxLength={50}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Product Category
                  </label>
                  <select
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-Select-</option>
                    <option value="1">Agricultural or Forestry</option>
                    <option value="2">Electrical and Electronics Scrap</option>
                    {/* Add more options */}
                  </select>
                </div>
              </div>
    
              {/* Value Criteria Section */}
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Value Criteria
                  </label>
                  <select
                    name="valueCriteria"
                    value={formData.valueCriteria}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-Select-</option>
                    <option value="1">Auction Fee</option>
                    <option value="2">EMD Fee</option>
                    {/* Add more options */}
                  </select>
                </div>
    
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Parameter
                  </label>
                  <select
                    name="valueParameter"
                    value={formData.valueParameter}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-Select-</option>
                    <option value="1">Equal</option>
                    <option value="2">LessThan</option>
                    <option value="3">GreaterThan</option>
                    <option value="4">Between</option>
                  </select>
                </div>
    
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    From Value
                  </label>
                  <input
                    type="text"
                    name="fromValue"
                    value={formData.fromValue}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    To Value
                  </label>
                  <input
                    type="text"
                    name="toValue"
                    value={formData.toValue}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
     
              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setFormData({})}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      );
};

export default AuctionForm;