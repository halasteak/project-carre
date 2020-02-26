import React, { Component } from "react";
import "./domains-d-activite.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ResidentielImg from "./../../img/domains/ResidentielImg.svg";
import ComercialImg from "./../../img/domains/CommercialImg.svg";

class DomainDActivite extends Component {
  state = {};
  render() {
    return (
      <div className=" domains-d-activite">
        <div className="row domains-header">
          <div className="col-md-2 col-lg-3"></div>
          <div className="col-md-8 col-lg-6">
            <div className="row content">
              <div className="container p-3">
                <h1 className="">
                  <span>Domaines D'activite</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-4"></div>
        </div>

        <section id="explore-section" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={ResidentielImg} alt="" className="img-fluid mb-3" />
              </div>
              <div className="col-md-6">
                <h3 className="text-center">Résidentiel</h3>
                <span>
                  Quelque soit le type de rénovation ou de construction, Projet
                  Carré propose des services de design permetant la réalisation
                  de lieux personnalisés tout en demeurant accessibles à tous
                  les budgets. à l'écoute de vos besoins et désirs, Projet Carré
                  déploie son savoir-fair pour allier fonctionnalité et beauté
                  dans la création d'éspaces contemporains résidentiel, à
                  l'affût de ces tendences qui vont au-delà des models. Projet
                  Carré vous accompagne tout au long du processus, de la
                  conception au choix des matériaux et rendu final.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="explore-section" className="py-5">
          <div className="container">
            <div className="row ">
              <div className="col-md-6 float-sm-right">
                <h3 className="text-center">Commercial</h3>
                <span>
                  L'élaboration d'un espace commercial, quelle que soit sa
                  nature, est un projet qui exige efficacité, professionnalisme
                  mais aussi créativité pour que votre espace se démarque de la
                  concurrence. Projet Carré, avec son approche personnalisée,
                  conçoit des lieux commerciaux novateurs et contemporains. Nous
                  nous efforçons de créer un espace qui fera vivre une
                  expérience unique à vos clients, simplifiera le travail de vos
                  emplyés et véhiculera une image positive de votre entreprise.
                  Nous comprenons l'importance de la mission et de la culture de
                  votre entreprise, et nous travaillons en ce sens pour en
                  réliser le reflet le plus fidèle.
                </span>
              </div>
              <div className="col-md-6 float-sm-left">
                <img src={ComercialImg} alt="" className="img-fluid mb-3" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DomainDActivite;

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
