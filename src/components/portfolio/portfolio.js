import React, { Component } from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
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

class Portfolio extends Component {
  state = {};
  render() {
    const itemsPortfolio = [
      {
        img: img1
      },
      {
        img: img2
      },
      {
        img: img3
      },
      {
        img: img4
      },
      {
        img: img5
      },
      {
        img: img6
      },
      {
        img: img7
      },
      {
        img: img8
      },
      {
        img: img9
      },
      {
        img: img10
      },
      {
        img: img11
      },
      {
        img: img12
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

    const itemElem = (img, i) => (
      <div className="col-md-3 sm-12" key={i}>
        <a href="" data-toggle="lightbox">
          <img src={img} alt="" className="img-fluid" />
        </a>
      </div>
    );

    const itemsPortfolioWithData = block.map((items, i) => {
      return (
        <div className="row no-gutters" key={i}>
          {items.map((item, index) => {
            return itemElem(item.img, index);
          })}
        </div>
      );
    });

    return (
      <div className="container portfolio">
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
