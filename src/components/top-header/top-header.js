import React from "react";
import "./top-header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneIcon from "../../img/phoneIcon.svg";
import emailIcon from "../../img/emailIcon.svg";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
  return (
    <nav className="navbar navbar-expand  d-none d-sm-block top-header">
      <div className="row">
        <div className="col-1"></div>
        <div className=" col-9">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span className="nav-link">
                <a href="tel:+33752230282">
                  <embed src={phoneIcon}  className="nav-icon"/>
                  <span> 0752230282</span>
                </a>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <a href="mailTo:projetcarre2020@gmail.com">
                  <embed src={emailIcon}  className="nav-icon"/>
                  <span> projetcarre2020@gmail.com</span>
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-2"></div>
      </div>
    </nav>
  );
};

export default TopHeader;
