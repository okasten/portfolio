import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about">About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/projects">Projects</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/resume">Resume</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">Contact</Link>
        </Nav.Item>
      </Nav>
    );
  }
}
