import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css";

//import bootstrap
import { Card, Form, FormControl } from "react-bootstrap";

//import images
import Football from './../images/football.png'
import UserLogo from './../images/Icon-user.png'
import JoinButton from './../images/green-button.png'

//import packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'


class LeaderBoards extends Component {

    state = {
        Ownvalue: "0",
        Othervalue: "0",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        return (
            <div className="container-fluid LeaderBoards">
                <Card id="content">
                    <div className="elements">
                        <div className="tabs">
                            <div className="One-av-One tab">One av One</div>
                            <div className="Tourny tab">Tourny</div>
                            <div className="Liga tab">Liga</div>
                        </div>
                        <Card id="tab-content">
                            <div className="tab-content-parent">
                                <div className="tab-content-left">
                                    <div className="section-left">
                                        <div className="own-logo">
                                            <img alt="" src={UserLogo} className="user-team-logo" />
                                            <div className="difference">
                                                <Form.Control
                                                    type="number"
                                                    name="Ownvalue"
                                                    className="difference-number"
                                                    value={this.state.Ownvalue}
                                                    onChange={this.handleChange.bind(this)}
                                                    max={10}
                                                    min={-10}
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
                                                    name="Othervalue"
                                                    className="difference-number"
                                                    value={this.state.Othervalue}
                                                    onChange={this.handleChange.bind(this)}
                                                    max={10}
                                                    min={-10}
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
                                                ></FormControl>
                                                <FormControl
                                                    className="time num-second"
                                                    type="number"
                                                    name=""
                                                    max={59}
                                                    min={0}
                                                ></FormControl>
                                                <FormControl
                                                    className="time"
                                                    type="text"
                                                    name=""
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
                        <div className="create-game">
                            <div className="new-game">
                                <i className="fglyphicon glyphicon-plus"></i>
                            </div>
                            <span className="">Create Game</span>

                        </div>
                    </div>


                </Card>
            </div>
        )
    }
}

export default LeaderBoards;