import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact-form.css";
import gMapImg from "../../img/contact/g_map.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  sendEmail = e => {
    e.preventDefault();
    try {
      console.log("send click");
      //template_QC1P1jX4
      const templateId = "template_QC1P1jX4";
      const { name, email, phone, message } = this.state;
      const body =
        "<br />emailFrom:" +
        email +
        "<br />name:" +
        name +
        "<br />phone:" +
        phone +
        "<br />message: " +
        message;

      this.sendFeedback(templateId, {
        message_html: phone,
        from_name: name,
        reply_to: email
      });
    } catch (e) {
      console.error(e);
    }
  };

  sendFeedback(templateId, variables) {
    // debugger
    console.log(variables);
    // window.emailjs.send(
    //   'gmail', templateId,
    //   variables
    //   ).then(res => {
    //     console.log('Email successfully sent!')
    this.cleanForm(true);
    //   })
    //   // Handle errors here however you like, or use a React error boundary
    //   .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  cleanForm = send => {
    this.setState({ name: "", email: "", phone: "", message: "" });

    debugger;
    if (send) {
      toast('Send!', {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
    } else {
      toast('Not send', {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
  };
}

  //#region ChangeEvents
  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeEmail = event => {
    this.setState({ email: event.target.value });
  };

  changePhone = event => {
    this.setState({ phone: event.target.value });
  };
  changeMessage = event => {
    this.setState({ message: event.target.value });
  };
  //#endregion

  render() {
    const { name, email, phone, message } = this.state;
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
              onSubmit={this.sendEmail}
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
                      value={name}
                      onChange={this.changeName}
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
                      value={email}
                      onChange={this.changeEmail}
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
                      type="tel"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={this.changePhone}
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
                      id="message"
                      value={message}
                      onChange={this.changeMessage}
                      placeholder="Type your message here."
                      required
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
                >
                  <br />
                  <img className="gmap" src={gMapImg} alt="gmap img" />
                  &nbsp; <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          {/* </div> */}
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
        />
      </div>
    );
  }
}

export default ContactForm;
