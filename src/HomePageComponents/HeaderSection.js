import React from 'react';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderSection = ({ 
  title = "Ние предлагаме най-качествените ослуги на пазара!",
  buttonText = "НАШИТЕ ОСЛУГИ"
}) => {
  return (
    <div className="d-flex flex-column align-items-start gap-3">
      <Button 
        className="px-4 py-2 text-primary fw-bold"
        style={{
          backgroundColor: 'rgba(21, 114, 211, 0.1)',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '150%',
          fontFamily: 'Poppins'
        }}
      >
        {buttonText}
      </Button>
      
      <h2 
        className="m-0"
        style={{
          color: '#333333',
          fontSize: '32px',
          fontWeight: 500,
          lineHeight: '130%',
          fontFamily: 'Poppins',
          maxWidth: '670px'
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default HeaderSection;

