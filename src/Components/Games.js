import React, { Component } from "react";

//import css
import "./../css/Games.css";
import "./../css/mediaGames.css";

//import bootstrap
import { Card, Form, FormControl } from "react-bootstrap";

//import images
import Football from "./../images/football.png";
import JoinButton from "./../images/green-button.png";

//import components
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import UserHeader from "./UserHeader";

//import packages
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

class Games extends Component {
  state = {
    box: [
      {
        ownValue: 0,
        otherValue: 0,
        id: 0,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createGame = () => {
    this.setState((prevState) => {
      let box_length = prevState.box.length;
      const new_game = { ownValue: 0, otherValue: 0, id: box_length };
      return {
        box: [...prevState.box, new_game],
      };
    });
  };

  render() {
    const params = {
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // slidesPerView: "auto",
      centeredSlides: true,
      // spaceBetween: 20,
    };

    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }}>
          <Sidebar />
          <div className="container-fluid games">
            <Card id="content">
              {/* <Swiper {...params} className="swiper-tabs"> */}

              <div className="elements">
                <Navigation />
                {this.state.box.map((item) => (
                  <Card id="tab-content" key={item.id}>
                    <div className="tab-content-parent">
                      <div className="tab-content-left">
                        <div className="section-left">
                          <div className="own-logo">
                            <i className="user-team-logo fas fa-user-circle" />
                            <div className="difference">
                              <Form.Control
                                type="number"
                                name="ownValue"
                                className="difference-number"
                                value={this.state.box.ownValue}
                                onChange={this.handleChange.bind(this)}
                                max={10}
                                min={-10}
                                maxLength="2"
                              ></Form.Control>
                            </div>
                          </div>
                          <div className="football">
                            <img
                              alt=""
                              src={Football}
                              className="football-field"
                            />
                          </div>
                          <div className="other-logo">
                            <i className="user-team-logo fas fa-user-circle" />
                            <div className="difference">
                              <Form.Control
                                type="number"
                                name="otherValue"
                                className="difference-number"
                                value={this.state.box.otherValue}
                                onChange={this.handleChange.bind(this)}
                                max={10}
                                min={-10}
                                maxLength="2"
                              ></Form.Control>
                            </div>
                          </div>
                        </div>
                        <span className="hosted">Hosted by Alex52 / Div2</span>
                      </div>
                      <div className="tab-content-right">
                        <div className="section-right">
                          <img src={JoinButton} className="join-button" />
                          <div className="options">
                            <div className="option">
                              <span className="option-item">Time game :</span>
                              <FormControl
                                className="time num-minute"
                                type="number"
                                name=""
                                max={59}
                                min={4}
                                maxLength="2"
                              ></FormControl>
                              <FormControl
                                className="time num-second"
                                type="number"
                                name=""
                                max={59}
                                min={0}
                                maxLength="2"
                              ></FormControl>
                              <FormControl
                                className="time"
                                type="text"
                                name="type"
                                maxLength="3"
                              ></FormControl>
                            </div>
                            <div className="option">
                              <span className="option-item">Buy in :</span>
                              <FormControl
                                className=""
                                type="text"
                                name="buy"
                              ></FormControl>
                            </div>
                            <div className="option">
                              <span className="option-item">Advantage :</span>
                              <FormControl
                                className="advantage"
                                type="number"
                                name="advantage"
                                max={10}
                                min={-10}
                              ></FormControl>
                            </div>
                            <span className="No">No.T0001</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              {/* </Swiper> */}
              <div className="sidebar-right">
                <div className="priorities">
                  <div className="Priority">
                    <div className="ascending"></div>
                    <span>Seats Ascending</span>
                  </div>
                  <div className="Priority">
                    <div className="descending"></div>
                    <span>Seats Descending</span>
                  </div>
                </div>
                <div className="create-game-section">
                  <div className="create-game-button" onClick={()=>this.createGame()}>
                    <i className="fas fa-plus"></i>
                  </div>
                  <span className="create-game-title">Create Game</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Games;
