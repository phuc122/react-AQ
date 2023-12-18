// Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.scss';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href=""><img
    src="https://cdn.dribbble.com/users/3958693/screenshots/11019581/media/7125011e48dc528bd2058ac8e69f92ca.jpg?resize=1600x1200&vertical=center"
    alt=""
    width="70px"
    height="70px"
  /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
