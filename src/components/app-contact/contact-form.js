import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact-form.css";
import gMapImg from "../../img/contact/g_map.svg";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <div className=" contact-form">
        {/* <legend className="h1 text-center bg1">Contact Us</legend> */}
        <div className="row">
          {/* <div className="container"> */}
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <form
              className="form-horizontal"
              role="form"
              method="post"
              action=""
            >
              {/* Name */}
              <div className="form-group">
                {/* <label className="control-label col-sm-2" for="name">
                    <span className="required">*</span>Name:
                  </label> */}
                <div className="col-sm-12 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      name="name"
                      type="text"
                      required
                      className="form-control"
                      id="name"
                      placeholder="Ton nom complet"
                      title="Name"
                    ></input>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="form-group">
                {/* <label className="control-label col-sm-2" for="Email">
                    <span className="required">*</span>Email Address:
                  </label> */}
                <div className="col-sm-12 inputGroupContainer">
                  <div className="input-group">
                    {" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope"></i>
                    </span>
                    <input
                      name="Email"
                      type="email"
                      required
                      className="form-control"
                      id="email"
                      placeholder="votre@email.fr"
                      title="Email"
                    ></input>
                  </div>
                </div>
              </div>

              {/* Phone Optional */}
              <div className="form-group">
                {/* <label className="control-label col-sm-2" for="Phone">
                    Phone #:
                  </label> */}
                <div className="col-sm-12 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-earphone"></i>
                    </span>
                    <input
                      name="Phone"
                      type="email"
                      className="form-control"
                      id="phone"
                      placeholder="Numéro de téléphone (optionnel)"
                      title="Phone no."
                    ></input>
                  </div>
                </div>
              </div>

              {/* Text Area */}
              <div className="form-group">
                {/* <label className="control-label col-sm-2" for="message">
                    <span className="required">*</span>Message:
                  </label> */}
                <div className="col-sm-12 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-pencil"></i>
                    </span>

                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      placeholder="Type your message here."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Human validation */}
              {/* <div className="form-group">
               
                <div className="col-sm-12 inputGroupContainer">
                  <ReCAPTCHA
                    sitekey="6Lflpd0UAAAAADIuA7o7QPJfiSvcdMzBNNs3wozr"
                    // onChange={onChange}
                  />
                 
                </div>
              </div> */}

              {/* SEND Button */}
              <div className="form-group">
                <label className="col-sm-2 control-label"></label>
                <div className="col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-send btn-primary btn-lg btn-block"
                  >
                    Envoyer <span className="glyphicon glyphicon-send"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="address card bg-transparent mb-3 text-uppercase">
              <div className="card-body">
                <p className="">coordonné</p>
                <p>
                  Normadie, Région Voisine,
                  <br /> Trouville-sur-Mer 14360
                </p>
                <br />
                <p>contactez-nous</p>
                <p>
                  <a href="mailto:projetcarre2020@gmail.com">
                    projetcarre2020@gmail.com
                  </a>
                </p>
                <a
                  href="https://www.google.com/maps/place/14360+Trouville-sur-Mer,+France/@49.3725962,0.0861386,14z/data=!3m1!4b1!4m5!3m4!1s0x47e02cb6d40a62bb:0x1c0c144b8fc9e680!8m2!3d49.3703458!4d0.1033738"
                  target="_blank"
                ><br/>
                  <img className="gmap" src={gMapImg} alt="gmap img" />
                  &nbsp; <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default ContactForm;
