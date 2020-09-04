import React, { Component } from 'react'

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import bootstrap
import { Card } from "react-bootstrap";

//import css
import './../css/Layout.css'

export class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div className="display" style={{ display: "flex" }} >
                    <Sidebar />
                    <div className="container-fluid">
                        <Card id="content">
                            {this.props.children}
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout
