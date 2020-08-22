import React, { Component } from 'react';
//import css
import "./../css/reset.css";
import "./../css/console.css"
//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';

//import bootstrap
import { Card, Form, FormControl } from "react-bootstrap";

class Console extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div className="display" style={{ display: "flex" }} >
                    <Sidebar />
                    <div className="container-fluid Console">
                        <Card id="content">
                            <div className="main-section">
                                <i className="image-icon fas fa-user-circle" id="user"></i>
                                <p className="username">User name</p>
                                <span className="status-activation">Active now .Sined uo 2 months age</span>
                                <div className="inputs">
                                    <Form.Group className="">
                                        <div className="validation-box col-sm-7">
                                            <Form.Control
                                                type="text"
                                                className="form-control-plaintext"
                                                placeholder=""
                                                name=""
                                            // onChange={this.handleChange}
                                            // value={this.state.promotional}
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="">
                                        <div className="validation-box col-sm-7">
                                            <Form.Control
                                                type="text"
                                                className="form-control-plaintext"
                                                placeholder=""
                                                name=""
                                            // onChange={this.handleChange}
                                            // value={this.state.promotional}
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="">
                                        <div className="validation-box col-sm-7">
                                            <Form.Control
                                                type="text"
                                                className="form-control-plaintext"
                                                placeholder=""
                                                name=""
                                            // onChange={this.handleChange}
                                            // value={this.state.promotional}
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="">
                                        <div className="validation-box col-sm-7">
                                            <Form.Control
                                                type="text"
                                                className="form-control-plaintext"
                                                placeholder=""
                                                name=""
                                            // onChange={this.handleChange}
                                            // value={this.state.promotional}
                                            />
                                        </div>
                                    </Form.Group>
                                </div>

                            </div>
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Console;