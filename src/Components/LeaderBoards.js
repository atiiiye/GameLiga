import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css";

//import bootstrap
import { Card, Form } from "react-bootstrap";

//import images
import Football from './../images/football.png'
import UserLogo from './../images/Icon-user.png'
import JoinButton from './../images/green-button.png'


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
                                </div>
                                <div className="tab-content-right">
                                <div className="section-right">
                                    <img src={JoinButton} className="join-button" />
                                    <div className="options">
                                    <div className="option">
                                        <span className="option-item">Time game</span>
                                    </div>
                                    <div className="option">
                                        <span className="option-item">Buy in</span>
                                    </div>
                                    <div className="option">
                                        <span className="option-item">Advantage</span>
                                    </div>
                                    </div>

                                </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Card>
            </div>
        )
    }
}

export default LeaderBoards;