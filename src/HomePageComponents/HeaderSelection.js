import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const HeaderNavigation = () => {
  return (
    <Navbar expand="lg" className="justify-content-between px-5">
      <Navbar.Brand href="#">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7O5HTO_YEiK21yL/frame.png"
          alt="Checkers Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <span className="ml-2">CHECKERS</span>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#">Как Работи</Nav.Link>
        <Nav.Link href="#">Услуги</Nav.Link>
        <Nav.Link href="#">За Нас</Nav.Link>
        <Nav.Link href="#">Запиши Се</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default HeaderNavigation;
