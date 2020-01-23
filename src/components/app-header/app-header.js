import React, { Component } from "react";
import "./app-header.css";
import logo from "../../img/logo.png";

class AppHeader extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div className="container">
          <div className="navbar-brand-section align-items-center">
            <img src={logo} className="col"></img>
            <a className="navbar-brand col" href="#">
             <span>Project Carré</span> 
            </a>
          </div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppHeader;
