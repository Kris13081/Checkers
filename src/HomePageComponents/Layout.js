import React from "react";
import { Container } from "react-bootstrap";
import HeaderNavigation from "./HeaderNavigation";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import HowItWorks from "./HowItWorks";
import ServicesLayout from "./ServicesLayout";
import FooterLayout from "./test/FooterLayout";

const Layout = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column min-vh-100"
      style={{
        background: "#000721", // Soft neutral background
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cartographer.png')", // Subtle texture
        backgroundAttachment: "fixed",
      }}
    >
      <HeaderNavigation />
      {/* Section one start*/}
      <div
        style={{
          background: "#ffffff",
          padding: "0px 15px 50px 15px",
          borderRadius: "12px",
          margin: "20px auto",
          marginTop: "100px",
          maxWidth: "1800px",
          boxShadow: "0px -3px 20px rgb(103, 97, 224)",
        }}
      >
        <HeroSection />
        <InfoSection />
      </div>
      {/* Section one end*/}
      {/* Section two start */}
      <div
        style={{
          background: "#ffffff",
          padding: "50px 15px",
          borderRadius: "12px",
          margin: "20px auto",
          marginTop: "20px",
          maxWidth: "1800px",
          width: "100%", // Forces it to take the full width like the first section
          boxShadow: "0px -3px 20px rgb(103, 97, 224)",
        }}
      >
        <HowItWorks />
      </div>
      {/* Section two end */}
      {/* Section 3 start */}
      <div
        style={{
          background: "#ffffff",
          padding: "50px 15px",
          borderRadius: "12px",
          margin: "20px auto",
          marginTop: "20px",
          maxWidth: "1800px",
          width: "100%", // Forces it to take the full width like the first section
          boxShadow: "0px -3px 20px rgb(103, 97, 224)",
        }}
      >
        <ServicesLayout />
      </div>
      {/* Section 3 end */}
      {/* Section 4 start */}
        <FooterLayout />
      {/* Section 4 end */}
    </Container>
  );
};

export default Layout;
