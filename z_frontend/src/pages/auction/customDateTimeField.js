import React, { useState, useEffect } from 'react';

const CustomDateTimeField = ({ 
  value, 
  onChange, 
  name, 
  isEditing = true, 
  error 
}) => {
  // Parse initial datetime value
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [period, setPeriod] = useState('AM');

  useEffect(() => {
    if (value) {
      const dateObj = new Date(value);
      setDate(dateObj.toISOString().split('T')[0]);
      
      let hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const newPeriod = hours >= 12 ? 'PM' : 'AM';
      
      // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12;
      
      // Format time without seconds
      setTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
      setPeriod(newPeriod);
    }
  }, [value]);

  const handleChange = (type, newValue) => {
    if (!isEditing) return;

    let dateObj = value ? new Date(value) : new Date();

    if (type === 'date' && newValue) {
      dateObj = new Date(newValue + 'T' + dateObj.toTimeString());
      setDate(newValue);
    } else if (type === 'time' && newValue) {
      const [hours, minutes] = newValue.split(':');
      let hour = parseInt(hours);
      
      // Adjust hour based on AM/PM
      if (period === 'PM' && hour !== 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
      
      dateObj.setHours(hour);
      dateObj.setMinutes(parseInt(minutes));
      setTime(newValue);
    } else if (type === 'period') {
      const newPeriod = newValue;
      let [hours] = time.split(':');
      hours = parseInt(hours);
      
      // Adjust hour based on new period
      if (newPeriod === 'PM' && hours !== 12) hours += 12;
      if (newPeriod === 'AM' && hours > 12) hours -= 12;
      
      dateObj.setHours(hours);
      setPeriod(newPeriod);
    }

    onChange({ target: { name, value: dateObj.toISOString() } });
  };

  const formatTimeInput = (inputTime) => {
    // Remove any non-digit characters except colon
    let cleaned = inputTime.replace(/[^\d:]/g, '');
    
    // Ensure hours are between 1-12
    let [hours, minutes] = cleaned.split(':');
    if (hours) {
      hours = parseInt(hours);
      if (hours > 12) hours = 12;
      if (hours < 1) hours = 1;
      cleaned = `${hours.toString().padStart(2, '0')}${minutes ? ':' + minutes : ''}`;
    }
    
    return cleaned;
  };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Auction End Date
      </label>
      <div className="flex gap-2 items-center">
        <input
          type="date"
          value={date}
          onChange={(e) => handleChange('date', e.target.value)}
          className={`
            flex-1 px-2 py-2.5
            text-gray-700
            bg-white
            border ${error ? "border-red-500" : "border-gray-300"}
            rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            hover:border-blue-400
            transition-colors duration-200
            outline-none
          `}
          readOnly={!isEditing}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => handleChange('time', formatTimeInput(e.target.value))}
          className={`
            w-32 px-2 py-2.5
            text-gray-700
            bg-white
            border ${error ? "border-red-500" : "border-gray-300"}
            rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            hover:border-blue-400
            transition-colors duration-200
            outline-none
          `}
          readOnly={!isEditing}
        />
        <select
          value={period}
          onChange={(e) => handleChange('period', e.target.value)}
          className={`
            w-24 px-2 py-2.5
            text-gray-700
            bg-white
            border ${error ? "border-red-500" : "border-gray-300"}
            rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            hover:border-blue-400
            transition-colors duration-200
            outline-none
          `}
          disabled={!isEditing}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      {error && (
        <p className="text-red-500 mt-1 text-sm">{error}</p>
      )}
    </div>
  );
};

export default CustomDateTimeField;