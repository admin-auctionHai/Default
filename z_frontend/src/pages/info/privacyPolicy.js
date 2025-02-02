import React from "react";

const Policy = () => {
    const containerStyle = {
      maxWidth: '1200px',
      margin: 'auto',
      padding: '20px',
    };
  
    const sectionStyle = {
      backgroundColor: '#f8f9fa',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
    };
  
    const headingStyle = {
      fontSize: '1.875rem', // 30px
      color: '#007bff',
      marginBottom: '20px',
    };
  
    const textStyle = {
      fontSize: '1.25rem', // 20px
      color: '#6c757d',
      marginBottom: '20px',
    };
  
    return (
      <div style={containerStyle}>
        {/* Disclaimer */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Disclaimer</h2>
          <p style={textStyle}>
            This website is designed, developed, and maintained by Auction Hai Private Limited, a private company.
          </p>
          <p style={textStyle}>
            Though all efforts have been made to ensure the accuracy and currency of the content on this website, 
            the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, 
            users are advised to verify/check with the Company/Department(s) and/or other source(s), and to obtain appropriate professional advice.
          </p>
          <p style={textStyle}>
            Under no circumstances will Auction Hai Private Limited be liable for any expense, loss, or damage including, 
            without limitation, indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from use, 
            or loss of use, of data, arising out of or in connection with the use of this website.
          </p>
        </div>
  
        {/* Terms And Conditions */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Terms And Condition</h2>
          <p style={textStyle}>
            This website is designed, developed, and maintained by Auction Hai Private Limited, a private company.
          </p>
          <p style={textStyle}>
            Though all efforts have been made to ensure the accuracy and currency of the content on this website, 
            the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, 
            users are advised to verify/check with the Company/Department(s) and/or other source(s), and to obtain appropriate professional advice.
          </p>
          <p style={textStyle}>
            Under no circumstances will Auction Hai Private Limited be liable for any expense, loss, or damage including, 
            without limitation, indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from use, 
            or loss of use, of data, arising out of or in connection with the use of this website.
          </p>
        </div>
  
        {/* Add more policy sections as needed */}
      </div>
    );
  };
  
  export default Policy;