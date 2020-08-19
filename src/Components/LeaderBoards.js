import React, { Component } from 'react';


//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css"

//import bootstrap
import { Card } from "react-bootstrap";

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';

class LeaderBoards extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div className="display" style={{ display: "flex" }} >
                    <Sidebar />
                    <div className="container-fluid leader-boards">
                        <Card id="content">
                            <div className="all-view-component">
                                <div className="buttons-top">
                                    <div className="all-button xp">XP</div>
                                    <div className="all-button console">CONSOLE</div>
                                    <div className="all-button fifa20">FIFA20</div>
                                </div>
                                <div className="all-view-table">
                                    <div className="title-table">
                                        <div className="section-1 user-info col-md-4">
                                            <i className="image-icon fas fa-user-circle" id="user"></i>
                                            <p className="user-name">User name</p>
                                        </div>
                                        <div className="section-2 col-md-6">
                                            <span className="section-2-1" >0</span>
                                            <span className="section-2-2" >0</span>
                                            <span className="section-2-3" >0</span>

                                        </div>
                                        <div className="section-3 col-md-2">
                                            <span className="section-3-1">0</span>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </Card>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default LeaderBoards;