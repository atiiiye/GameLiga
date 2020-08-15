import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css";

//import bootstrap
import { Card, Form, FormControl } from "react-bootstrap";

//import images
import Football from "./../images/football.png";
import UserLogo from "./../images/Icon-user.png";
import JoinButton from "./../images/green-button.png";

//import packages
import "@fortawesome/fontawesome-free/css/all.min.css";

import { NavLink } from "react-router-dom";

class LeaderBoards extends Component {
  state = {
    box: [
      {
        ownValue: 0,
        otherValue: 0,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createGame = () => {
    this.setState((prevState) => {
      let box_length = this.state.box.length;
      let new_array = { id: box_length - 1 };
      const old_state = this.state.box;
      const new_state = { id: box_length };
      // prevState.box.push(new_array);
      // console.log([...prevState.box, prevState.box.push(new_array)]);
      return {
        box: [...this.state.box, old_state],
      };
    });
  };

  handlePrevent = (e) => {
    e.preventDefault();
  };

  componentDidUpdate() {
    console.log("leader boards :componentDidUpdate");
  }

  render() {
    return (
      <div className="container-fluid LeaderBoards">
        <Card id="content">
          <div className="elements">
            <div className="tabs">
              <NavLink
                to="/Leader-boards"
                activeClassName="selected"
                className="one-av-one tab"
                data-content="one-av-one"
              >
                One av One
              </NavLink>
              <NavLink
                to="/tourny"
                activeClassName="selected"
                className="tourny tab"
                data-content="tourny"
              >
                Tourny
              </NavLink>
              <NavLink
                to="/liga"
                activeClassName="selected"
                className="liga tab"
                data-content="liga"
              >
                Liga
              </NavLink>
            </div>
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
    );
  }
}

export default LeaderBoards;
