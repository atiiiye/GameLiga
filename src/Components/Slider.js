import React, { Component } from "react";

//import components
import Canvas from "./Canvas";

//import css
import "./../css/reset.css";
import "./../css/Slider.css";
import "./../css/mediaSlider.css";
import "./../css/formlogin.css";

//import image
import slide1 from "./../images/slide-1.1.png";
import slide3 from "./../images/slide-3.1.png";
import slide5 from "./../images/slide-5.1.png";
import slide7 from "./../images/slide-7.png";
import slide8 from "./../images/slide-8.png";
import sidan from "./../images/sidan.png";
import background2 from "./../images/background2.png";
import facebook from "./../images/Icon-facebook.png";
import instagram from "./../images/Icon-instagram.png";
import twitch from "./../images/Icon-twitch.png";
import twitter from "./../images/Icon-twitter.png";


//import bootstrap
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
// import { navLink } from "react-bootstrap";

// import packages
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { NavLink } from "react-router-dom";

class Slider extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "img1",
        source: sidan,
      },
      {
        id: 2,
        name: "img2",
        source: sidan,
      },
      {
        id: 3,
        name: "img3",
        source: sidan,
      },
      {
        id: 4,
        name: "img4",
        source: sidan,
      },
      {
        id: 5,
        name: "img5",
        source: sidan,
      },
    ],
    icon:[
     { 
       id:1,
       name: "facebook",
       source: facebook,
    },
     {
      id:2,
      name:"instagram",
      source: instagram,
      },
     {
       id:3,
       name:"twitch",
       source: twitch,
      },
     {
      id:4,
      name:"twitter",
      source: twitter,
      }
    ]
  };
  render() {
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      mousewheel: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return (
            '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
          );
        },
      },
    };
    return (
      <section className="main-slider">
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar">
              <CardColumns>
                <div className="line"></div>
                {this.state.icon.map((item)=>(
                  <Card id="social-medias">
                    <Card.Body key={item.id} id="social-media">
                      <NavLink className="icons" to="/"><img src={item.source} className="icon" alt=""></img></NavLink>
                    </Card.Body>
                  </Card>
                ))}
              </CardColumns>
            </div>
            <Card className="row" id="content">
              <div className="titles">
                {/* <Canvas /> */}
                <div className="top"></div>
                <div className="card-bodys">
                  <div className="line-orange"></div>
                  <div className="card-text">
                    <h1 className="h Tournament">Tournament</h1>
                    <h1 className="h1 title">
                      20<span className="h1">000kr</span>
                    </h1>
                    <h1 className="h1 garanti">Gauranteed</h1>
                  </div>
                </div>
                <div className="bottom"></div>
              </div>
              <Swiper {...params}>
                {this.state.data.map((img) => (
                  <div key={img.id} className="slides">
                    <img src={img.source} className="card-img-top" alt="" />
                  </div>
                ))}
              </Swiper>
              <div className="images">
                <img src={background2} className="image-fluid"></img>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
