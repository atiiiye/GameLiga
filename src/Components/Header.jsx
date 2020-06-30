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
import ModalDialog from 'react-bootstrap/ModalDialog'


//import routes
import { Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                    <Navbar className="" collapseOnSelect expand="md" bg="none">
                        <div className="hamburger-menu navbar-toggler px-0" data-target="#coll-navbar">
                            <Navbar.Toggle aria-controls="collapse" className="px-0">
                                <span className="menu navbar-toggler-icon">
                                    <div className="menu-line menu-line-1"></div>
                                    <div className="menu-line menu-line-2"></div>
                                    <div className="menu-line menu-line-3"></div>
                                </span>
                            </Navbar.Toggle>

                        </div>
                        <div className="nav-right">
                            <BrowserRouter>
                                <Route>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" id="login" to="/" onClick={() => this.setState({ show: true })}>LOG IN</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="signin" to="/signin">SIGN UP</Link>
                                        </li>
                                        <Navbar.Collapse className="navbar-collapse" id="coll-navbar">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="more">More</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="about">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="news">News</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="studi">Studi</Link>
                                            </li>
                                        </Navbar.Collapse>
                                    </ul>
                                </Route>
                            </BrowserRouter>

                        </div>
                        <div className="nav-left">
                            <div className="empty-content"></div>
                            <h4 className="UFOGame">UFO<span>Game</span></h4>
                            <img className="logo" src={logo2} alt="" />
                        </div>
                    </Navbar>

                    <Modal className="modal fade" show={this.state.show} onHide={() => this.setState({ show: false })}>
                        <Modal.Dialog className="modal-dialogs modal-dialog-centered">
                                <Modal.Body>
                                    <Modal.Title className="text-center mx-2">
                                        <BrowserRouter>
                                            <Route>
                                                <h2>Welcome <span>back</span></h2>
                                                <p className="text-white px-2">Do not have account ? <Link to="#">Sign up</Link></p>
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
                                        <div className="form-fields mb-4">
                                            <label>
                                                Password :
                                                        <input type="password" className="form-control mb-2 mt-1" id="password"
                                                    placeholder="Password"></input>
                                            </label>
                                        </div>

                                        <div className="mt-5 form-group w-75">
                                            <Button className="btn-lg btn-light btn-block" variant="none" id="submit" onClick={() => this.setState({ show: false })} type="submit">LOG
                                                                 IN</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                        </Modal.Dialog>
                    </Modal>

                </div>

            </>
        )

    }
}