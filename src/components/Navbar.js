import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar">
        <Nav.Item>
          <Link to="/" className="navbarText">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="navbarText">
            About
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/projects" className="navbarText">
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/resume" className="navbarText">
            Resume
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact" className="navbarText">
            Contact
          </Link>
        </Nav.Item>
      </Nav>
    );
  }
}
