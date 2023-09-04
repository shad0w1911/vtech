import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "reactstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="position-sticky"
      style={{ background: "#fff" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="v tech" className="topbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-auto">
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/services">
              Services
            </NavLink>
            <NavLink className="navlink" to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="navlink" to="/contact_us">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
