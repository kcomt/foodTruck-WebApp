import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Brand href="/dashboard">ReqBot</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Carritos</Nav.Link>
            <Nav.Link href="comidas">Comidas</Nav.Link>
            <Nav.Link href="iniciar">Iniciar Sesión</Nav.Link>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Layout;
