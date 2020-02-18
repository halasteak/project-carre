import React, { Component } from "react";
import IconConception from "./../../img/app-services/Icon_Conception.svg";
import IconDessin from "./../../img/app-services/Icon_Dessin.svg";
import IconTravaux from "./../../img/app-services/Icon_Travaux.svg";
import IconExterior from "./../../img/app-services/Icon_Exterior.svg";

import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import "./ServiceItems.css"

class ServiceItems extends Component {
  state = {};
  render() {
    const itemsCollection = [
      {
        id: 1,
        title: "Conception",
        img: IconConception,
        toolTipText: [
          "Conception des espaces selon les besoins  fonctionnels",
          "Proposition d'ambiance générale",
          "Sélection des matériqux et accessoires",
          "Coloration",
          "Conceptualisqtion de mobilier intégré"
        ]
      },
      {
        id: 2,
        title: "Dessigns & Plan",
        img: IconDessin,
        toolTipText: [
          "Relevé général de l'espace",
          "Modélisation 3D ",
          "Perspectives d'ambiances ",
          `Production de dessins techniques: plans d'aménagement, de démolition, de construction, d'électricité, de plafond,des finis, détails, élévations,
                   dessins d'atelier / d'ébénisterie, etc.`,
          "Devis sur plans"
        ]
      },
      {
        id: 3,
        title: "Travaux",
        img: IconTravaux,
        toolTipText: [
          "Rénovation mineurs et majeures, nouvelles constructions et agrandissements",
          "Supervision des travaux tout le long du chantier: suivis avec les clients, coordination des commandes, des livraisons, etc",
          "Suivi et coordination entre les différents corps de métiers: ébénistes, entrepreneurs, fournisseurs, ingénieurs et architectes",
          "évaluation des déficiences du besoin"
        ]
      },
      {
        id: 4,
        title: "Extérieur",
        img: IconExterior,
        toolTipText: [
          "Aménagement de cours et terrasses extérieures",
          "Conception & planification de l'espace",
          "Recommandation de matériaux & de mobilier",
          "Plans pour construction (mobilier sur mesure, électricité & éclairage, etc.)",
          "Gestion de construction si nécessaire"
        ]
      }
    ];
    const HtmlTooltip = withStyles(theme => ({
      tooltip: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth:600,
        marginTop:15,
        fontSize: theme.typography.pxToRem(16),
        border: "1px solid #dadde9"
      }
    }))(Tooltip);

    const items = itemsCollection.map(item => {
      return (
        // <h2>test</h2>
        <div className="col-md-3" key={item.id}>
          <div className="card text-center  bg-transparent bg-2  card-body-item">
            <HtmlTooltip
              arrow
              title={
                <ul className="service-tooltip-list">
                  {item.toolTipText.map((tooltipItem, index) => {
                    return <li className="service-tooltip-list-item" key={index}>{tooltipItem}</li>;
                  })}
                </ul>
              }
            >
              <div className="card-body" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3 className="card-title">{item.title}</h3>
              </div>
            </HtmlTooltip>
          </div>
        </div>
      );
    });

    return (
      <section id="boxes" className="py-5">
        <div className="container ">
          <div className="row">{items}</div>
        </div>
      </section>
    );
  }
}

export default ServiceItems;
