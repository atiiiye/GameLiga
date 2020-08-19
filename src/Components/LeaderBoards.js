import React, { Component } from 'react';


//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css"

//import bootstrap
import { Card } from "react-bootstrap";

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

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
                            <div className="buttons-top">
                                <div className="all-button xp">XP</div>
                                <div className="all-button console">CONSOLE</div>
                                <div className="all-button fifa20">FIFA20</div>
                            </div>

                        </Card>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default LeaderBoards;