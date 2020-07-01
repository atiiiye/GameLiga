import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/Header.css';
import './../css/mediaHeader.css'
import './../css/formlogin.css';

//import image
import logo2 from './../images/logo2.png';

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Navbar, Modal } from 'react-bootstrap';


//import routes
import { Route, BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <BrowserRouter>
                        <Route>
                            <Navbar className="" collapseOnSelect expand="md" bg="none">
                                <div className="hamburger-menu px-0" data-target="#coll-navbar">
                                    <Navbar.Toggle aria-controls="collapse" className="px-0">
                                        <span className="menu navbar-toggler-icon">
                                            <div className="menu-line menu-line-1"></div>
                                            <div className="menu-line menu-line-2"></div>
                                            <div className="menu-line menu-line-3"></div>
                                        </span>
                                    </Navbar.Toggle>

                                </div>
                                <div className="nav-right">

                                    <ul className="navbar-nav">
                                        <div className="buttons">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" id="login" to="/" onClick={() => this.setState({ show: true })}>LOG IN</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" id="signin" to="/signin">SIGN UP</NavLink>
                                            </li>
                                        </div>
                                        <Navbar.Collapse className="" id="coll-navbar">
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="more">More</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="about">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="news">News</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="studi">Studi</NavLink>
                                            </li>
                                        </Navbar.Collapse>
                                    </ul>
                                </div>
                                <div className="nav-left">
                                    <div className="empty-content"></div>
                                    <h4 className="UFOGame">UFO<span>Game</span></h4>
                                    <img className="logo" src={logo2} alt="" />
                                </div>
                            </Navbar>

                            <Modal className="fade" show={this.state.show} onHide={() => this.setState({ show: false })}>
                                {/* <Modal.Dialog className="modal-dialog-centered"> */}
                                <Modal.Body>
                                    <Modal.Title className="text-center mx-2">
                                        <BrowserRouter>
                                            <Route>
                                                <h2>Welcome <span>back</span></h2>
                                                <p className="text-white px-2">Do not have account ? <NavLink to="#">Sign up</NavLink></p>
                                            </Route>
                                        </BrowserRouter>
                                    </Modal.Title>
                                    <Form action="#" className="form-login py-4" >
                                        <div className="form-fields mb-4">
                                            <label>
                                                User name :
                                                        <input type="text" className="form-control mb-2 mt-1" id="username"
                                                    placeholder="User"></input>
                                            </label>

                                        </div>
                                        <div className="form-fields">
                                            <label>
                                                Password :
                                                        <input type="password" className="form-control mb-2 mt-1" id="password"
                                                    placeholder="Password"></input>
                                            </label>
                                        </div>
                                        <NavLink className="forgot mb-4" to="/" alt="" >Forget your password?</NavLink>

                                        <div className="mt-5 form-group w-75">
                                            <Button className="btn-block" variant="none" id="submit" onClick={() => this.setState({ show: false })} type="submit">LOG
                                                                 IN</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                                {/* </Modal.Dialog> */}
                            </Modal>
                        </Route>
                    </BrowserRouter>

                </div>

            </>
        )

    }
}