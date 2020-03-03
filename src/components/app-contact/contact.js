import React, { Component } from "react";
import "./contact.css";
import BlockHeader from "../util/block-header/block-header";
import ContactForm from "./contact-form";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="bg-secondary contact mt-2">
        <BlockHeader title="Contact"></BlockHeader>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 contact-header pt-3">
            <div className="container subtitle-text mt-3 ">
              Pour toutes questions ou informations supplémentaires, n'hésitez
              pas à communiquer avec nous via le formulaire contact ci-dessous
              ou via nos coordonnées.
            </div>
          </div>
          <div className="col-md-2"></div>

        </div>
        <ContactForm></ContactForm>
      </div>
    );
  }
}

export default Services;
