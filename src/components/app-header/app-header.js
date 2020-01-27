import React, { Component } from "react";
import "./app-header.css";
import logo from "../../img/logo.png";
import searchIcon from "../../img/searchIcon.svg"
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container
} from "react-bootstrap";

const navBarToggled = true;

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
      <div className="row">
        <div className="col-1"></div>
        <div className=" col-10">
          {/* <Container> */}
            <Navbar expand="sm">
              <Navbar.Brand
                href="#home"
                className="navbar-brand-section align-items-center"
              >
                <img src={logo} className="col"></img>
                <br />
                <Navbar.Text>Project Carré</Navbar.Text>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav  d-sm-block "
                in={navBarToggled}
              >
                <Nav className="ml-auto nav-items-link">
                  <Nav.Link href="#home">accueil</Nav.Link>
                  <Nav.Link href="#domaines_d_activite">
                    domaines d'activite
                  </Nav.Link>
                  <Nav.Link href="#portfolio">services</Nav.Link>
                  <Nav.Link href="#portfolio">portfolio</Nav.Link>
                  <Nav.Link href="#contact">contact</Nav.Link>
                </Nav>
                <embed src={searchIcon} className="ml-3"/>
                {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
              </Navbar.Collapse>
            </Navbar>
          {/* </Container> */}
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

export default AppHeader;
