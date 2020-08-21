import React, { Component } from "react";

//import components
import Header from "./Header";


//import css
import "./../css/reset.css";
import "./../css/Slider.css";
import "./../css/mediaSlider.css";
import "./../css/formlogin.css";

//import image
// import slide1 from "./../images/slide-1.1.png";
// import slide3 from "./../images/slide-3.1.png";
// import slide5 from "./../images/slide-5.1.png";
// import slide7 from "./../images/slide-7.png";
// import slide8 from "./../images/slide-8.png";
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
    icon: [
      {
        id: 1,
        name: "facebook",
        source: facebook,
      },
      {
        id: 2,
        name: "instagram",
        source: instagram,
      },
      {
        id: 3,
        name: "twitch",
        source: twitch,
      },
      {
        id: 4,
        name: "twitter",
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
    // console.log(this.props.history);


    return (
      <React.Fragment>
        <Header history={this.props} />
        <section className="main-slider">
          <div className="container-fluid box-slider">
            <div className="row pratition-slider">
              <div className="sidebar-slider">
                <CardColumns className="card-columns-slider">
                  <div className="line"></div>
                  {this.state.icon.map((item) => (
                    <Card id="social-medias" key={item.id}>
                      <Card.Body id="social-media">
                        <NavLink className="icon-media" to="/"><img src={item.source} className={`icon-image ${item.name}`} alt={item.name}></img></NavLink>
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
                  <img src={background2} className="image-fluid" alt=""></img>
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
