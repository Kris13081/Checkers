import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderNavigation = () => {
  return (
    <Navbar
      expand="lg"
      className="px-3 py-2"
      bg="light"
      variant="light"
      fixed="top" style={{boxShadow: "0px 10px 10px rgb(103, 97, 224)"}}
    >
      <Container className="w-75 justify-content-space-center">
        {/* Brand Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7O5HTO_YEiK21yL/frame.png"
            alt="Checkers Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ml-2 fw-bold text-primary fs-4">CHECKERS</span>
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center fs-4">
          <Nav className="text-center gap-3 fw-semibold">
            <Nav.Link href="#">Как Работи</Nav.Link>
            <Nav.Link href="#">Услуги</Nav.Link>
            <Nav.Link href="#">За Нас</Nav.Link>
            <Nav.Link href="#">Запиши Се</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavigation;
