import React, { Component } from 'react'

//import components
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import UserHeader from "./UserHeader";

//import css
import './../css/Liga.css'


//import bootstrap
import { Card } from "react-bootstrap";

class Liga extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div className="display" style={{ display: "flex" }} >
                    <Sidebar />
                    <div className="container-fluid Liga">
                        <Card id="content">
                            <div className="elements">
                                <Navigation />
                            </div>

                        </Card>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Liga;