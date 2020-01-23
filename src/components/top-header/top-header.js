import React from "react";
import "./top-header.css";

const TopHeader = () => {
  return (
    <nav className="navbar navbar-expand  d-none d-sm-block top-header">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <span className="nav-link">
            <a href="tel:+33752230282">0752230282</a>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">projetcarre2020@gmail.com</span>
        </li>
      </ul>
    </nav>
  );
};

export default TopHeader;
