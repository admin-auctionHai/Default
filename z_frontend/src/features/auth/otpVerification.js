import React, { useState, useRef, useEffect } from 'react';

const OTPVerification = ({onVerify, onRequestAgain}) => {
  const [otpValues, setOTPValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Focus on first input when component mounts
    inputRefs.current[0].focus();
  }, []);

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedValue = (event.clipboardData || window.clipboardData).getData('text');
    const newOTPValues = [...otpValues];

    for (let i = 0; i < inputRefs.current.length; i++) {
      if (i < pastedValue.length) {
        newOTPValues[i] = pastedValue[i];
      } else {
        newOTPValues[i] = '';
      }
    }

    setOTPValues(newOTPValues);
  };

  const handleKeyUp = (index, e) => {
    const newOTPValues = [...otpValues];

    // Limit to single digit
    if (newOTPValues[index].length > 1) {
      newOTPValues[index] = '';
      setOTPValues(newOTPValues);
      return;
    }

    // Move to next input if current is filled and not last input
    if (newOTPValues[index] !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Handle backspace
    if (e.key === 'Backspace' && index > 0 && newOTPValues[index] === '') {
      inputRefs.current[index - 1].focus();
    }

    setOTPValues(newOTPValues);
  };

  const handleInputChange = (index, value) => {
    const newOTPValues = [...otpValues];
    newOTPValues[index] = value;
    setOTPValues(newOTPValues);
  };

  const isVerifyButtonActive = otpValues.every(value => value !== '');

  const handleVerify = () => {
    if (isVerifyButtonActive) {
      // Implement verification logic here
      console.log('Verifying OTP:', otpValues.join(''));
      // api to send otp verification to the email
      // on verification either redirect through step change via service or here, for now here.

    }
  };

  const handleRequestAgain = () => {
    console.log("handle again is requested");
    onRequestAgain();
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h4 className="text-center text-xl font-semibold mb-4">Verify</h4>
          <p className="text-center text-gray-600 mb-4">Your code was sent to you via email</p>
          
          <div className="flex justify-center space-x-2 mb-4">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="number"
                ref={(el) => inputRefs.current[index] = el}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyUp={(e) => handleKeyUp(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                maxLength={1}
                className="w-10 h-12 text-center text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={index !== 0 && otpValues[index - 1] === ''}
              />
            ))}
          </div>

          <button
            ref={buttonRef}
            onClick={handleVerify}
            disabled={!isVerifyButtonActive}
            className={`w-full py-2 rounded-md text-white ${
              isVerifyButtonActive 
                ? 'bg-blue-500 hover:bg-blue-600' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Verify
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Didn't receive code? <a href={handleRequestAgain} className="text-blue-500 hover:underline">Request again</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;