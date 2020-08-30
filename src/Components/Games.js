import React, { Component } from "react";

//import css
import "./../css/Games.css";
import "./../css/navigation.css"

//import bootstrap
import { Card, Form, FormControl } from "react-bootstrap";

//import images
import Football from "./../images/football.png";
import UserLogo from "./../images/Icon-user.png";
import JoinButton from "./../images/green-button.png";

//import components
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import UserHeader from "./UserHeader";

//import packages
import "@fortawesome/fontawesome-free/css/all.min.css";


class Games extends Component {
  state = {
    stateDisplay: true,
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
      // console.log([...prevState.box, prevState.box.push(new_array)]);
      return {
        box: [...prevState.box, new_game],
      };
    });
  };

  handlePrevent = (e) => {
    e.preventDefault();
  };

  displayHandler = () => {
    this.setState({ stateDisplay: true });
  };

  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }} >
          <Sidebar />
          <div className="container-fluid LeaderBoards">

            <Card id="content">
              <div className="elements">
                <Navigation />
                {this.state.box.map((item) => (
                  <Card id="tab-content" key={item.id}>
                    <div className="tab-content-parent">
                      <div className="tab-content-left">
                        <div className="section-left">
                          <div className="own-logo">
                            <img alt="" src={UserLogo} className="user-team-logo" />
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
                            <img alt="" src={Football} className="football-field" />
                          </div>
                          <div className="other-logo">
                            <img alt="" src={UserLogo} className="user-team-logo" />
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
                                min={2}
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
                  <div className="create-game-button" onClick={this.createGame}>
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
