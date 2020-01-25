import React from "react";
import "./top-header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
  return (
    <nav className="navbar navbar-expand  d-none d-sm-block top-header">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="nav-link">
              <a href="tel:+33752230282">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="2x"
                  color="white"
                  className="nav-icon"
                />
                <span> 0752230282</span>
              </a>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <a href="mailTo:projetcarre2020@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  color="white"
                  className="nav-icon"
                />
                <span> projetcarre2020@gmail.com</span>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopHeader;
