import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/FinalResult.css";

//import bootstrap
import { Card } from "react-bootstrap";

//import images
import Football from './../images/football.png'
import UserLogo from './../images/Icon-user.png'
import RedRound from './../images/red-round-glass-button.png'

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";



class FinalResult extends Component {

    state = {
        stateDisplay: true,

    }

    displayHandler = () => {
        this.setState({ stateDisplay: true });
    };
    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <div className="container-fluid FinalResult">
                        <Card id="content">
                            <div className="parent-content">
                                <h2 className="h2 result section-1">1 : 2</h2>
                                <div className="section-2">
                                    <div className="own-logo">
                                        <img alt="" src={UserLogo} className="user-team-logo" />
                                        <div className="result-win">
                                            <span className="">Win</span>
                                            <div className="color-box"></div>
                                        </div>
                                    </div>
                                    <div className="football">
                                        <img alt="" src={Football} className="football-field" />
                                    </div>
                                    <div className="other-logo">
                                        <img alt="" src={UserLogo} className="user-team-logo" />
                                        <div className="result-lose">
                                            <div className="color-box"></div>
                                            <span className="">Lose</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-3">
                                    <img src={RedRound} alt="" className="red-round" />
                                    <div className="box"></div>
                                </div>
                                <div className="live-content section-4">
                                    <p className="text-live">Live :</p>
                                    <div className="live"></div>
                                </div>
                            </div>
                            <div className="empty-square"></div>
                        </Card>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}

export default FinalResult;