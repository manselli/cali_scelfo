import React from 'react'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from './logo.png'

export default function Navigation() {
    return (
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/cali_scelfo"><img src={Logo} alt="" height="45px" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"><NavLink className="nav-link" to="/cali_scelfo/">Home</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className="nav-link" to="/cali_scelfo/about">About</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className="nav-link" to="/cali_scelfo/contact">Contact</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
