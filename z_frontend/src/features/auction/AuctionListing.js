import React, {useState, useRef, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Eye, Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { TextField, Select, MenuItem, Button, Grid, Typography, InputLabel, FormControl } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { BsCalendar, BsBuilding } from 'react-icons/bs';
import { MdCategory, MdLocalOffer } from 'react-icons/md';
import AuctionForm from "./AuctionSearchForm";

const AuctionListing = () =>{
    const categories = ["Electronics", "Furniture", "Vehicles", "Real Estate"];
    const auctionTypes = ["Forward", "Reverse", "Dutch"];
    const lotTypes = ["Single", "Multiple", "Bundle"];
    const statuses = ["Active", "Closed", "Upcoming", "Draft"];

    
    // Sample data - Here data need to be loaded using a sql entity, which queries database according to user.
    const tableData = [
        { id: "AUC001", title: "Vintage Car", publishDate: "2025-01-01", submissionStartDate: "2025-01-20" },
        { id: "AUC002", title: "Classic Painting", publishDate: "2025-01-02", submissionStartDate: "2025-01-21" },
        { id: "AUC003", title: "Rare Antique Furniture", publishDate: "2025-01-05", submissionStartDate: "2025-01-25" },
        { id: "AUC004", title: "Ancient Coins Collection", publishDate: "2025-01-03", submissionStartDate: "2025-01-22" },
        { id: "AUC005", title: "Diamond Jewelry Set", publishDate: "2025-01-04", submissionStartDate: "2025-01-24" },
        { id: "AUC006", title: "Luxury Watch", publishDate: "2025-01-06", submissionStartDate: "2025-01-26" },
        { id: "AUC007", title: "Historical Manuscripts", publishDate: "2025-01-07", submissionStartDate: "2025-01-27" },
        { id: "AUC008", title: "Antique Musical Instruments", publishDate: "2025-01-08", submissionStartDate: "2025-01-28" },
        { id: "AUC009", title: "Rare Gemstone Collection", publishDate: "2025-01-09", submissionStartDate: "2025-01-29" },
        { id: "AUC010", title: "Vintage Motorcycle", publishDate: "2025-01-10", submissionStartDate: "2025-01-30" },
        { id: "AUC011", title: "Luxury Yacht", publishDate: "2025-01-11", submissionStartDate: "2025-02-01" },
        { id: "AUC012", title: "Ancient Artifact", publishDate: "2025-01-12", submissionStartDate: "2025-02-02" },
        { id: "AUC013", title: "Rare Book Collection", publishDate: "2025-01-13", submissionStartDate: "2025-02-03" },
        { id: "AUC014", title: "Gold Coins", publishDate: "2025-01-14", submissionStartDate: "2025-02-04" },
        { id: "AUC015", title: "Antique Vase", publishDate: "2025-01-15", submissionStartDate: "2025-02-05" },
        { id: "AUC016", title: "Historical Maps", publishDate: "2025-01-16", submissionStartDate: "2025-02-06" },
        { id: "AUC017", title: "Exotic Car Model", publishDate: "2025-01-17", submissionStartDate: "2025-02-07" },
        { id: "AUC018", title: "Antique Clock", publishDate: "2025-01-18", submissionStartDate: "2025-02-08" },
        { id: "AUC019", title: "Vintage Wine Collection", publishDate: "2025-01-19", submissionStartDate: "2025-02-09" },
        { id: "AUC020", title: "Precious Stamp Collection", publishDate: "2025-01-20", submissionStartDate: "2025-02-10" },
        { id: "AUC021", title: "Antique Sword", publishDate: "2025-01-21", submissionStartDate: "2025-02-11" },
        { id: "AUC022", title: "Rare Sculpture", publishDate: "2025-01-22", submissionStartDate: "2025-02-12" },
        { id: "AUC023", title: "Luxury Handbag", publishDate: "2025-01-23", submissionStartDate: "2025-02-13" },
        { id: "AUC024", title: "Historical Photograph", publishDate: "2025-01-24", submissionStartDate: "2025-02-14" },
        { id: "AUC025", title: "Rare Sports Memorabilia", publishDate: "2025-01-25", submissionStartDate: "2025-02-15" },
        { id: "AUC026", title: "Vintage Movie Poster", publishDate: "2025-01-26", submissionStartDate: "2025-02-16" },
        { id: "AUC027", title: "Antique Desk", publishDate: "2025-01-27", submissionStartDate: "2025-02-17" },
        { id: "AUC028", title: "Rare Fossils", publishDate: "2025-01-28", submissionStartDate: "2025-02-18" },
        { id: "AUC029", title: "Antique Jewelry Box", publishDate: "2025-01-29", submissionStartDate: "2025-02-19" },
        { id: "AUC030", title: "Exotic Animal Sculpture", publishDate: "2025-01-30", submissionStartDate: "2025-02-20" },
    ];
    // Table Constants
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(tableData);
    const location = useLocation();
  
    // Handle search across all fields
    const handleSearch = (value) => {
      setSearchTerm(value);
      const filtered = tableData.filter(auction => {
        const searchStr = value.toLowerCase();
        return (
          auction.id.toString().toLowerCase().includes(searchStr) ||
          auction.title.toLowerCase().includes(searchStr) ||
          auction.publishDate.toLowerCase().includes(searchStr) ||
          auction.submissionStartDate.toLowerCase().includes(searchStr)
        );
      });
      setFilteredData(filtered);
    };

    const formRef = useRef();
    console.log("Current Path is : ",location.pathname);
    const setTheFormData = () =>{
        console.log("Setting the form data");

        let currentPath = location.pathname;
        console.log("Current Path : ",currentPath);
        // currentPath = currentPath.split("/").filter(part=>part);
        if(currentPath == '/searchAuction/metals'){
            console.log("got the metal path");
        }
        else if(currentPath == '/searchAuction'){
            console.log("got the pathname");
        }

    }

    const renderTableData = (data) => {

    }

    useEffect(()=>{
        console.log("Setting up forms value")
        setTheFormData();
    }); 
    
    
    return (
        <div>
            <div id="AdvanceAuctionForm" className="flex w-4/5 mx-auto px-4 pt-8  justify-center items-center">{< AuctionForm />}</div>
            <div id="list-table">
            <div className="mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="w-4/5 mx-auto mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Auction List</h2>
                <div className="relative">
                    <div className="relative">
                    <input
                        type="text"
                        placeholder="Search auctions..."
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>
                </div>

                {/* Table Section */}
                <div className="w-4/5 mx-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Auction ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Publish Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Submission Start Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        View
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((auction) => (
                        <tr key={auction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                            {auction.id}
                        </td>
                        <td className="px-6 py-4 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                            {auction.title}
                        </td>
                        <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                            {auction.publishDate}
                        </td>
                        <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                            {auction.submissionStartDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="h-5 w-5" />
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AuctionListing