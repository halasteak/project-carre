import React, { Component } from "react";
import "./portfolio.scss";
import $ from 'jquery'; 

import img1 from "./../../img/portfolio/Img1.svg";
import img2 from "./../../img/portfolio/Img2.svg";
import img3 from "./../../img/portfolio/Img3.svg";
import img4 from "./../../img/portfolio/Img4.svg";
import img5 from "./../../img/portfolio/Img5.svg";
import img6 from "./../../img/portfolio/Img6.svg";
import img7 from "./../../img/portfolio/Img7.svg";
import img8 from "./../../img/portfolio/Img8.svg";
import img9 from "./../../img/portfolio/Img9.svg";
import img10 from "./../../img/portfolio/Img10.svg";
import img11 from "./../../img/portfolio/Img11.svg";
import img12 from "./../../img/portfolio/Img12.svg";

import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles } from "@material-ui/core/styles";

class Portfolio extends Component {
  state = {};
  render() {
    const itemsPortfolio = [
      {
        img: img1,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img2,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img3,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img4,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img5,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img6,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img7,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img8,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img9,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img10,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img11,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      },
      {
        img: img12,
        hoverTitle: "Rénovation d'un appartement",
        hoverSubTitle: "Résidentel"
      }
    ];

    let subBlock = [];
    let block = [];

    const quatroBlocks = itemsPortfolio.map((item, index) => {
      if (index && index % 4 == 0) {
        subBlock = [];
      }

      subBlock.push(item);

      if (subBlock.length == 3) {
        block.push(subBlock);
      }
    });

    const itemElem = (item, i) => (
      <div className="col-md-3 gallery-img-block" key={i}>
        <a href={item.img}  data-toggle="lightbox">
          <img src={item.img} alt="" className="img-fluid" />
          <div className="overlay">
            <h3>{item.hoverTitle}</h3>
            <p>{item.hoverSubTitle}</p>
          </div>
        </a>
      </div>
    );

    const itemsPortfolioWithData = block.map((items, i) => {
      return (
        <div className="row no-gutters" key={i}>
          {items.map((item, index) => {
            return itemElem(item, index);
          })}
        </div>
      );
    });

    return (
      <div className="portfolio">
        <div className="row domains-header">
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8">
            <div className="row content">
              <div className="container p-3">
                <h3 className="">
                  <span>PORTFOLIO</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
        <div className="portfolio-img-items">{itemsPortfolioWithData}</div>
      </div>
    );
  }
}

export default Portfolio;
