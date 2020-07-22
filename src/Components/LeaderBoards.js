import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css";

//import bootstrap
import { Card } from "react-bootstrap";

//import images
import Football from './../images/football.png'
import UserLogo from './../images/Icon-user.png'

class LeaderBoards extends Component {
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
                                            <div className="result-win">
                                                <span className=""></span>
                                            </div>
                                        </div>
                                        <div className="football">
                                            <img alt="" src={Football} className="football-field" />
                                        </div>
                                        <div className="other-logo">
                                            <img alt="" src={UserLogo} className="user-team-logo" />
                                            <div className="result-lose">
                                                <span className=""></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content-right"></div>
                            </div>
                        </Card>
                    </div>
                </Card>
            </div>
        )
    }
}

export default LeaderBoards;