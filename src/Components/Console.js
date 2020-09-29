import React, { Component } from 'react';

//import css
import "./../css/console.css";
import "./../css/mediaConsole.css";

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';

//import bootstrap
import { Card, Form, Nav } from "react-bootstrap";

//import utils
import { isLogin } from '../utils';


class Console extends Component {
  state = {};


  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }}>
          <Sidebar />
          <div className="container-fluid Console">
            <Card id="content">
              <div className="main-section">
                <i className="image-icon fas fa-user-circle" id="user"></i>
                <p className="username">
                  {/* {isLogin()} */}
                </p>
                <span className="status-activation">
                  Active now .Sined uo 2 months age
                </span>
                <div className="inputs">
                  {/* <Form.Group className=""> */}
                  <div className="validation-box">
                    <Form.Control
                      type="text"
                      className="form-control-plaintext"
                      placeholder=""
                      name=""
                      // onChange={this.handleChange}
                      // value={this.state.promotional}
                    />
                  </div>
                  {/* </Form.Group> */}
                  {/* <Form.Group className=""> */}
                  <div className="validation-box">
                    <Form.Control
                      type="text"
                      className="form-control-plaintext"
                      placeholder=""
                      name=""
                      // onChange={this.handleChange}
                      // value={this.state.promotional}
                    />
                  </div>
                  {/* </Form.Group> */}
                  {/* <Form.Group className=""> */}
                  <div className="validation-box">
                    <Form.Control
                      type="text"
                      className="form-control-plaintext"
                      placeholder=""
                      name=""
                      // onChange={this.handleChange}
                      // value={this.state.promotional}
                    />
                  </div>
                  {/* </Form.Group> */}
                  {/* <Form.Group className=""> */}
                  <div className="validation-box">
                    <Form.Control
                      type="text"
                      className="form-control-plaintext"
                      placeholder=""
                      name=""
                      // onChange={this.handleChange}
                      // value={this.state.promotional}
                    />
                  </div>
                  {/* </Form.Group> */}
                </div>

                <div className="nav-tabs">
                  <Nav className="nav-list">
                    <Nav.Item className="">
                      <Nav.Link href="#" className="nav-item">
                        Friends
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="">
                      <Nav.Link href="#" className="nav-item">
                        Tournaments
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="">
                      <Nav.Link href="#" className="nav-item">
                        Transfer
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="">
                      <Nav.Link href="#" className="nav-item">
                        Balance
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="">
                      <Nav.Link href="#" className="nav-item">
                        Deposit
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="">
                      <Nav.Link href="#" className="nav-item">
                        Referrals
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
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