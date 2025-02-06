import React from "react";
import { useState, useEffect } from "react";
import { ChevronDown,ChevronUp } from "lucide-react";

const ItemPublishPage = ({itemData, onSubmit, setPublishForm}) =>{
    const [errors,setErrors] = useState({});
    const [hasChanges,setHasChanges] = useState(false);
    const [isEditing,setIsEditing] = useState(true);
    const [formData,setFormData] = useState({})
    const [showLotDetails,setShowLotDetails] = useState(false);

    // const [selectedLot, setSelectedLot] = useState({});
      useEffect(() => {
        // Initialize formData with lot data
      setFormData({
        auctionPublishDate: '',
        minBidderRequired : '',
        auctionStartDate: '',
        auctionEndDate : '',
        companyName: itemData.companyName,
        auctionType: itemData.auctionType,
        auctionDescription: itemData.auctionDescription || '',
        auctionTitle: itemData.auctionTitle || '',
        auctionLotDetails: itemData.auctionLotDetails?.map(lotItem => ({
          ...lotItem,
          lotEMD: lotItem.lotEMD || '',
          lotAuctionAmount: lotItem.lotAuctionAmount || '',
          productCategory: lotItem.productCategory || '',
          lotWeight: lotItem.lotWeight || '',
          lotDescription: lotItem.lotDescription || '',
          lotAddress: lotItem.lotAddress || '',
          lotCity: lotItem.lotCity || '',
          lotState: lotItem.lotState || '',
          lotPostalCode: lotItem.lotPostalCode || '',
          lotSellerContactNumber: lotItem.lotSellerContactNumber || '',
        })) || []
      });
    }, [itemData]);


    const handleInputChange = (e, lotIndex = null, field = null) => {
      const { name, value } = e.target;
      
      setHasChanges(true);
      
      if (lotIndex !== null && field) {
        // Handle lot detail fields
        setFormData(prev => ({
          ...prev,
          auctionLotDetails: prev.auctionLotDetails.map((lot, idx) =>
            idx === lotIndex ? { ...lot, [field]: value } : lot
          )
        }));
      } else {
        // Handle main fields
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    };
  
    const validateForm = () => {
      const newErrors = {};
  
      // Validate main fields
      if (!formData.auctionDescription) {
        newErrors.auctionDescription = 'Auction description is required';
      }
      if (!formData.auctionTitle) {
        newErrors.auctionTitle = 'Auction title is required';
      }

      if(!formData.auctionPublishDate){
        newErrors.auctionPublishDate = "Auction Publish Date is required";
      }
      if(!formData.auctionStartDate){
        newErrors.auctionStartDate = "Auction Start Date is required";
      }
      if(!formData.auctionEndDate){
        newErrors.auctionEndDate = "Auction End Date is required";
      }
  
      // Validate lot details
      formData.auctionLotDetails.forEach((lot, index) => {
        if (!lot.lotDescription) {
          newErrors[`lot_${index}_description`] = 'Lot description is required';
        }
        if (!lot.lotAuctionAmount) {
          newErrors[`lot_${index}_amount`] = 'Auction amount is required';
        }
        if (!lot.lotEMD) {
          newErrors[`lot_${index}_emd`] = 'EMD is required';
        }
      });
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const calculateLotsValue = () => {
      console.log("Calculating the lots value");
      let amount = 0;
      if(formData.auctionLotDetails){
        formData.auctionLotDetails.forEach((val,ndx)=>{
            console.log(parseInt(val.lotAuctionAmount));
            amount += parseInt(val.lotAuctionAmount);
        })
      }
      return amount;
    }
    const handleSubmit = async () => {
      if (!hasChanges) {
        setIsEditing(false);
        return;
      }
  
      if (!validateForm()) {
        return;
      }
  
      try {
        await onSubmit(formData);
        setIsEditing(false);
        setHasChanges(false);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

    // const formData = itemData;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex w-full items-center mb-4">
              <h3 className="text-4xl w-full font-bold">Publish Item For Auction</h3>
              <button 
                onClick={() => setPublishForm(null)}
                className="text-gray-500 right-0 hover:text-gray-700 bg-gray-400 px-1 text-lg min-w-[10px] max-w-[30px] my-1"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-2">
              <div className="col-span-2 bg-gray-50 p-3 rounded">
                <h4 className="font-semibold mb-2"> Publish Information</h4>
                <div className="grid grid-cols-3 gap-2">
                <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Auction Publish Date
          </label>
          <input
            type="datetime-local"
            name="auctionPublishDate"
            value={formData.auctionPublishDate}
            onChange={handleInputChange}
            className="
              w-full px-2 py-2.5
              text-gray-700
              bg-white
              border border-gray-300 
              rounded-lg
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              hover:border-blue-400
              transition-colors duration-200
              placeholder-gray-400
              outline-none
            "
            readOnly={!isEditing}
          />
        </div>

        {/* Auction Start Date */}
        <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Auction Start Date
          </label>
          <input
            type="datetime-local"
            name="auctionStartDate"
            value={formData.auctionStartDate}
            onChange={handleInputChange}
            className="
              w-full px-2 py-2.5
              text-gray-700
              bg-white
              border border-gray-300 
              rounded-lg
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              hover:border-blue-400
              transition-colors duration-200
              placeholder-gray-400
              outline-none
            "
            readOnly={!isEditing}
          />
        </div>

        {/* Auction End Date */}
        <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Auction End Date
          </label>
          <input
            type="datetime-local"
            name="auctionEndDate"
            value={formData.auctionEndDate}
            onChange={handleInputChange}
            className="
              w-full px-2 py-2.5
              text-gray-700
              bg-white
              border border-gray-300 
              rounded-lg
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              hover:border-blue-400
              transition-colors duration-200
              placeholder-gray-400
              outline-none
            "
            readOnly={!isEditing}
          />
        </div>

        {/* Min Bidder Required */}
        <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Bidder Required
          </label>
          <input
            type="number"
            name="minBidderRequired"
            value={formData.minBidderRequired}
            onChange={handleInputChange}
            className="
              w-full px-2 py-2.5
              text-gray-700
              bg-white
              border border-gray-300 
              rounded-lg
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              hover:border-blue-400
              transition-colors duration-200
              placeholder-gray-400
              outline-none
            "
            readOnly={!isEditing}
            min="0"
          />
        </div>
                </div>
              </div>  
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-gray-50 p-3 rounded">
                <h4 className="font-semibold mb-2">Basic Information</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input 
                      name="companyName"
                      value={formData.companyName || ''}
                      className="w-full p-2 border rounded bg-gray-100"
                      readOnly 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Auction Type</label>
                    <input 
                      name="auctionType"
                      value={formData.auctionType || ''}
                      className="w-full p-2 border rounded bg-gray-100"
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Auction Description
                      {errors.auctionDescription && (
                        <span className="text-red-500 text-xs ml-2">{errors.auctionDescription}</span>
                      )}
                    </label>
                    <input 
                      name="auctionDescription"
                      value={formData.auctionDescription || ''}
                      className={`w-full p-2 border rounded`}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Auction Title
                      {errors.auctionTitle && (
                        <span className="text-red-500 text-xs ml-2">{errors.auctionTitle}</span>
                      )}
                    </label>
                    <input 
                      name="auctionTitle"
                      value={formData.auctionTitle || ''}
                      // onChange={handleInputChange}
                      className={`w-full p-2 border rounded`}
                      readOnly
                    />
                  </div>
                </div>
              </div>
    
              <div className="col-span-2 rounded p-1">
                <div className="flex flex-row w-full items-center justify-center gap-4">

                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-gray-700'>Total Auction Amount</label>
                      <input 
                        type="text"
                        className='p-2 border rounded'
                        value={calculateLotsValue()}
                        readOnly
                      />
                  </div>
                </div>
    
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-lg">Auction Lots</h4>
                    <div className='flex flex-row'>
                        <div className='px-4 py-2'>
                            <button onClick={() => setShowLotDetails(!showLotDetails)}>
                                {showLotDetails ? <div className='flex justify-between font-bold'>Hide Lot Details <ChevronUp size={20}/> </div>: (<div className='flex justify-between font-bold'>Show Lot Details <ChevronDown size={20}/> </div>)}
                            </button>
                        </div>
                        <div className="bg-blue-100 px-4 py-2 rounded-full">
                            Total Lots: {formData.auctionLotDetails?.length || 0}
                        </div>
                    </div>
                  </div>
                {showLotDetails && 
                  <div className="space-y-4">
                    {formData.auctionLotDetails?.map((lotItem, index) => (
                      <div key={index} className="bg-white border rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-semibold">Lot #{lotItem.auctionLotNumber}</h5>
                          <div className="space-y-2">
                            <label className="text-sm text-gray-600">
                              EMD
                              {errors[`lot_${index}_emd`] && (
                                <span className="text-red-500 text-xs ml-2">{errors[`lot_${index}_emd`]}</span>
                              )}
                            </label>
                            <input
                              value={lotItem.lotEMD}
                              className={`p-2 border rounded
                                ${errors[`lot_${index}_emd`] ? 'border-red-500' : ''}`}
                              readOnly
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-600">Category</label>
                            <input
                              value={lotItem.productCategory}
                              className={`w-full p-2 border rounded`}
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">
                              Amount
                              {errors[`lot_${index}_amount`] && (
                                <span className="text-red-500 text-xs ml-2">{errors[`lot_${index}_amount`]}</span>
                              )}
                            </label>
                            <input
                              value={lotItem.lotAuctionAmount}
                              className={`w-full p-2 border rounded
                                ${errors[`lot_${index}_amount`] ? 'border-red-500' : ''}`}
                              readOnly
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="text-sm text-gray-600">
                              Description
                              {errors[`lot_${index}_description`] && (
                                <span className="text-red-500 text-xs ml-2">{errors[`lot_${index}_description`]}</span>
                              )}
                            </label>
                            <textarea
                              value={lotItem.lotDescription}
                              className={`w-full p-2 border rounded
                                ${errors[`lot_${index}_description`] ? 'border-red-500' : ''}`}
                              readOnly
                            />
                          </div>
                          <div className="col-span-2 grid grid-cols-2 gap-4">
                            <input
                              placeholder="Address"
                              value={lotItem.lotAddress}
                              className={`p-2 border rounded`}
                              readOnly
                            />
                            <input
                              placeholder="City"
                              value={lotItem.lotCity}
                              className={`p-2 border rounded`}
                              readOnly
                            />
                            <input
                              placeholder="State"
                              value={lotItem.lotState}
                              className={`p-2 border rounded`}
                              readOnly
                            />
                            <input
                              placeholder="Postal Code"
                              value={lotItem.lotPostalCode}
                              className={`p-2 border rounded`}
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Contact</label>
                            <input
                              value={lotItem.lotSellerContactNumber}
                              className={`w-full p-2 border rounded`}
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Weight</label>
                            <input
                              value={lotItem.lotWeight}
                              className={`w-full p-2 border rounded`}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                }
                </div>
              </div>
            </div>
    
            <div className="w-full flex flex-row justify-end mt-4 gap-2">
              
              <button 
                onClick={() => {
                  setIsEditing(false);
                  setFormData(itemData);
                  setErrors({});
                  setHasChanges(false);
                  setPublishForm(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                className='px-4 py-2 rounded focus:ring-2 focus:ring-offset-2 transition-colors
                  bg-green-500 text-white hover:bg-green-600 focus:ring-green-500' 
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      );
}

export default ItemPublishPage;