import React, { Component } from "react";

//import components
import Header from "./Header";

//import css
import "./../css/Home.css";
import "./../css/mediaHome.css";
import "./../css/formlogin.css";

//import image
import sidan from "./../images/sidan.png";
import background2 from "./../images/background2.png";
import CounterStrike from "./../images/CounterStrike.png";

//import bootstrap
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

// import packages
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { NavLink } from "react-router-dom";

//import utils
import { LogoutUtil } from "../utils";

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
    icon: [
      {
        id: 1,
        name: "facebook",
        class: "fab fa-facebook-f",
      },
      {
        id: 2,
        name: "instagram",
        class: "fab fa-instagram",
      },
      {
        id: 3,
        name: "twitch",
        class: "fab fa-twitch",
      },
      {
        id: 4,
        name: "twitter",
        class: "fab fa-twitter",
      },
    ],
  };

  componentDidMount() {
    LogoutUtil();
  }

  render() {
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      // mousewheel: true,
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
      <React.Fragment>
        <Header />
        <section className="main-slider">
          <div className="container-fluid box-slider">
            <div className="row pratition-slider">
              <div className="sidebar-slider">
                <CardColumns className="card-columns-slider">
                  <div className="line"></div>
                  {this.state.icon.map((item) => (
                    <Card id="social-medias" key={item.id}>
                      <Card.Body id="social-media">
                        <NavLink className="icon-media" to="/">
                          <i
                            className={`icon-image ${item.name} ${item.class}`}
                          />
                        </NavLink>
                      </Card.Body>
                    </Card>
                  ))}
                </CardColumns>
              </div>
              <Card className="content-slider" id="content">
                <div className="main-content">
                  <div className="titles">
                    {/* <Canvas /> */}
                    <div className="top"></div>
                    <div className="card-body-titles">
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
                </div>

                <div className="images-content images">
                  {/* <img src={CounterStrike} className="image-counterstrike image-fluid" /> */}
                  <img src={background2} className="image-fluid background" />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Slider;
