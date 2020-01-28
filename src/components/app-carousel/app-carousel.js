import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import img1 from "../../img/carousel/1.svg"
import img2 from "../../img/carousel/2.jpg"
import img3 from "../../img/carousel/3.jpg"
import img4 from "../../img/carousel/4.jpg"
import "./app-carousel.css"


class AppCarousel extends Component {
  state = {};

  render() {
    return (
      <Carousel>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            //src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption className="first">
            <h1>Bienvenue ! ! ! </h1>
            <p>Arrangements complets des idées aux décorations</p>
            <button className="btn btn-light">Services</button>
          </Carousel.Caption>
        </Carousel.Item> 
         <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            //src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption className="second">
            <h1>ÉNTREW ET VIVE UNE <br /> EXPÉRIENCE DESIGN <br /> PERSONNALISÉ</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            //src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            // src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    );
  }
}

export default AppCarousel;
