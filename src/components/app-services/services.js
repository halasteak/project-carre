import React, { Component } from "react";
import "./services.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ServiceItems from "./ServiceItems"
import IconConception from "./../../img/app-services/Icon_Conception.svg";
import IconDessin from "./../../img/app-services/Icon_Dessin.svg";
import IconTravaux from "./../../img/app-services/Icon_Travaux.svg";
import IconExterior from "./../../img/app-services/Icon_Exterior.svg";


class Services extends Component {
  state = {};
  render() {
    return (
      <div className=" services mt-2">
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
        <div className="row mt-3">
          <div className="container">
            {/* <div className="col-md-2 col-lg-1"></div> */}
            <div className="services-header align-text-center pt-3">
              Quel que soit le design dont vous rêvez, notre équipe créative à
              l'écoute de vos idées et travaillant avec votre budget; vous
              imaginera un univers qui vous ressemblera et qui répondra à vos
              exigences!
            </div>
            {/* <div className="col-md-2 col-lg-1"></div> */}
          </div>
        </div>
        {/* BOXES  */}
        
        <ServiceItems></ServiceItems>
        {/* BOXES  */}
        {/* <section id="boxes" className="py-5">
          <div className="container ">
            <div className="row">
              <div className="col-md-3">
                <div className="card text-center  bg-transparent">
                  <div className="card-body bg-2">
                    <img src={IconConception} />
                    <h3 className="card-title">Conception</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center bg-transparent">
                  <div className="card-body">
                  <img src={IconDessin} />
                    <h3 className="card-title">Dessigns & Plan</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center bg-transparent">
                  <div className="card-body">
                  <img src={IconTravaux} />
                    <h3 className="card-title">Travaux</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center bg-transparent">
                  <div className="card-body">
                  <img src={IconExterior} />
                    <h3 className="card-title">Extérieur</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default Services;

{
  /* <div className="row">
          <div className="col-md-1 col-sm-block"></div>
          <div className=" col-md-10 col-sm-12">
            {/ Card /}
            <Card>
              
              <Card.Img variant="left" src={ResidentielImg} />
              
            
              <Card.Body >
              
                <Card.Title  variant="left">Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              {/ <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> /}
            </Card>

            {/ Card /}
          </div>
          <div className="col-md-1 col-sm-block"></div>
        </div> */
}
