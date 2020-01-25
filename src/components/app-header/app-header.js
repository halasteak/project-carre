import React, { Component } from "react";
import "./app-header.css";
import logo from "../../img/logo.png";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container
} from "react-bootstrap";

class AppHeader extends Component {
  // state = {
  //   isOpen: false
  // };

  // toggleCollapse = () => {
  //   console.log("toggleCollapse");
  //   this.setState({ isOpen: !this.state.isOpen });
  // };

  render() {
    return (
      <Container>
        <Navbar bg="red" expand="sm" className="navbar-light">
          <Navbar.Brand
            href="#home"
            className="navbar-brand-section align-items-center"
          >
            <img src={logo} className="col"></img>
            <br />
            <Navbar.Text>Project Carré</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-items-link">
              <Nav.Link href="#home">accueil</Nav.Link>
              <Nav.Link href="#domaines_d_activite">
                domaines d'activite
              </Nav.Link>
              <Nav.Link href="#portfolio">portfolio</Nav.Link>
              <Nav.Link href="#portfolio">portfolio</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default AppHeader;
