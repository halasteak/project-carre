import React, { Component } from "react";
import "./services.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ServiceItems from "./ServiceItems";
import IconConception from "./../../img/app-services/Icon_Conception.svg";
import IconDessin from "./../../img/app-services/Icon_Dessin.svg";
import IconTravaux from "./../../img/app-services/Icon_Travaux.svg";
import IconExterior from "./../../img/app-services/Icon_Exterior.svg";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="container services mt-2">
        <div className="row domains-header">
          <div className="col-md-2 col-lg-3"></div>
          <div className="col-md-8 col-lg-6">
            <div className="row content">
              <div className="container p-3">
                <h1 className="">
                  <span>Services</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-4"></div>
        </div>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 services-header align-text-center pt-3">
            <div className="container mt-3">
              Quel que soit le design dont vous rêvez, notre équipe créative à
              l'écoute de vos idées et travaillant avec votre budget; vous
              imaginera un univers qui vous ressemblera et qui répondra à vos
              exigences!
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        <ServiceItems></ServiceItems>
      </div>
    );
  }
}

export default Services;
