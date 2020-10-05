import React, { Component } from 'react';

//import css
import './../css/Chat.css'

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import bootstrap
import { Card } from "react-bootstrap";

class Chat extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div className="display" style={{ display: "flex" }} >
                    <Sidebar />
                    <div className="container-fluid Chat">
                        <Card id="content">
                            <div className="elements">
                                <div className="single-line"></div>
                            </div>

                        </Card>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Chat;