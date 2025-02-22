import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "react-bootstrap";

const FooterNavigation = () => {
  const sections = [
    {
      title: "Our Product",
      links: ["Career", "Car", "Packages", "Features", "Priceline"],
    },
    {
      title: "About Rentcars",
      links: [
        "Why choose us",
        "Our Story",
        "Investor Relations",
        "Press Center",
        "Advertise",
      ],
    },
  ];

  const socialIcons = [
    {
      src: "https://dashboard.codeparrot.ai/api/image/Z7kIGVCHtJJZ6v_q/vuesax-l.png",
      alt: "Facebook",
    },
    {
      src: "https://dashboard.codeparrot.ai/api/image/Z7kIGVCHtJJZ6v_q/vuesax-l-2.png",
      alt: "Instagram",
    },
    {
      src: "https://dashboard.codeparrot.ai/api/image/Z7kIGVCHtJJZ6v_q/vuesax-l-3.png",
      alt: "Youtube",
    },
  ];

  return (
    <Container
      fluid
      className="text-white"
      style={{ backgroundColor: "#051c34", padding: "40px 0" }}
    >
      {/* Footer Content */}
      <Row className="justify-content-center text-center text-md-start">
        {/* Logo & Social Media Icons + Contact Info */}
        <Col xs={12} md={4} className="mb-5">
          {/* Logo */}
          <Row className="align-items-center justify-content-center justify-content-md-start mb-3">
            <Col xs="auto">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z7kIGVCHtJJZ6v_q/frame.png"
                alt="Rentcars Logo"
                className="img-fluid"
                style={{ width: "24px", height: "25.72px" }}
              />
            </Col>
            <Col xs="auto">
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "150%",
                }}
              >
                RENTCARS
              </span>
            </Col>
          </Row>

          {/* Social Media Icons Below Logo */}
          <Nav className="d-flex justify-content-start justify-content-md-start gap-3 mb-3">
            {socialIcons.map((icon, idx) => (
              <NavItem key={idx}>
                <NavLink href="#" className="p-0 mt-3">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="cursor-pointer"
                    style={{ width: "24px", height: "24px" }}
                    onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                    onMouseOut={(e) => (e.target.style.opacity = "1")}
                  />
                </NavLink>
              </NavItem>
            ))}
          </Nav>

          {/* Contact Information */}
          <div>
            {[
              {
                icon: "https://dashboard.codeparrot.ai/api/image/Z7kIGVCHtJJZ6v_q/vuesax-l-4.png",
                text: "25566 Hc 1, Glenallen, Alaska, 99588, USA",
              },
              {
                icon: "https://dashboard.codeparrot.ai/api/image/Z7kIGVCHtJJZ6v_q/vuesax-l-5.png",
                text: "(+359)-876-334-338",
              },
              {
                icon: "https://dashboard.codeparrot.ai/api/image/Z7kIGVCHtJJZ6v_q/vuesax-l-6.png",
                text: "rentcars@gmail.com",
              },
            ].map((item, idx) => (
              <Row key={idx} className="align-items-center mt-2">
                <Col xs="auto">
                  <img
                    src={item.icon}
                    alt="Icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </Col>
                <Col>
                  <span
                    style={{
                      color: "#d6d6d6",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "150%",
                    }}
                  >
                    {item.text}
                  </span>
                </Col>
              </Row>
            ))}
          </div>
        </Col>

        {/* Navigation Sections */}
        {sections.map((section, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <h5
              className="fw-medium"
              style={{
                fontSize: "16px",
                lineHeight: "150%",
                fontFamily: "Poppins",
              }}
            >
              {section.title}
            </h5>
            <Nav className="flex-column">
              {section.links.map((link, idx) => (
                <NavItem key={idx}>
                  <NavLink
                    href="#"
                    className="text-decoration-none"
                    style={{
                      color: "#d6d6d6",
                      fontSize: "14px",
                      lineHeight: "150%",
                      fontFamily: "Poppins",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.target.style.color = "#d6d6d6")}
                  >
                    {link}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FooterNavigation;
