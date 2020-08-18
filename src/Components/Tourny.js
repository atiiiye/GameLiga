import React, { Component } from 'react';

//import css
import "./../css/reset.css";
import "./../css/tourny.css";
import "./../css/navigation.css"
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

//import bootstrap
import { Card, Form, FormControl } from "react-bootstrap";

//import images
import WorldCupTrophy from './../images/World-Cup-Trophy.png';
import iconTrophy from './../images/icon-trophy.png';
import JoinButton from "./../images/green-button.png";

//import components
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

import MdTrophy from 'react-ionicons/lib/MdTrophy'

class Tourny extends Component {
    state = {
        box: [
            {
                id: 0,
            },
        ],
    };
    render() {
        return (
            <div className="display" style={{ display: "flex" }} >
                <Sidebar />
                <div className="container-fluid Tourny">
                    <Card id="content">
                        <div className="elements">
                            <Navigation />
                            {
                                this.state.box.map((item) => (
                                    <Card id="tab-content" key={item.id}>
                                        <div className="tab-content-parent">
                                            <div className="col-md-3 tab-content-child tab-content-child-1" >
                                                <img className="WorldCupTrophy" src={WorldCupTrophy} />
                                                <span className="hosted">Hosted By Matti_Div2</span>
                                            </div>
                                            <div className="col-md-3 tab-content-child tab-content-child-2" >
                                                <MdTrophy
                                                    name="trophy-outline"
                                                    className="icon-trophy"
                                                    fontSize="25%"
                                                    color="rgb(207, 179, 113)"
                                                />
                                                <span className="score">100/600</span>
                                                <div className="section1">
                                                    <div className="join-button"><span className="join">join</span></div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 tab-content-child tab-content-child-3" >
                                                <span className="time-game">Time Game</span>
                                                <div className="timing">
                                                    <FormControl
                                                        className="time num-minute"
                                                        type="number"
                                                        name=""
                                                        max={59}
                                                        min={0}
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
                                                <span className="waiting-title">Waiting Personal</span>
                                                <div className="waiting-input">
                                                    <FormControl
                                                        className="wait"
                                                        type="text"
                                                        name="type"
                                                        maxLength="3"
                                                    ></FormControl>
                                                </div>
                                            </div>
                                            <div className="col-md-3 tab-content-child tab-content-child-4" ></div>


                                        </div>
                                    </Card>
                                ))
                            }

                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Tourny;