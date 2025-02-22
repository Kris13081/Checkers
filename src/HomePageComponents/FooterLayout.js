import React from 'react';
import FooterNavigation from './FooterNavigation';
import FooterCopyright from './FooterCopyright';
import "bootstrap/dist/css/bootstrap.min.css";

const FooterLayout = () => {
  return (
    <div className="d-flex flex-column" style={{ width: '100%', maxWidth: "1800px", margin: "20px auto", backgroundColor: '#051c34', padding: "50px 15px",
      borderRadius: "12px", boxShadow: "0px -3px 20px rgb(103, 97, 224)" }}>
      <div className="d-flex flex-wrap justify-content-between align-items-start" style={{ flexGrow: 1, padding: '20px 50px' }}>
        <FooterNavigation />
      </div>
      <FooterCopyright />
    </div>
  );
};

export default FooterLayout;

