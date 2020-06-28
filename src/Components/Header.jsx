
import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/Header.css';
import './../css/formlogin.css';
import logo2 from './../images/logo2.png';

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

//import routes
import { Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    // function FormExample() {
    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    state = {
        show: false
    }

    handleShow = () =>{ this.setShow(true)};
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg">
                        <div className="nav-right">
                            <BrowserRouter>
                                <Route>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            {/* <Button className=""> */}
                                            <Link className="nav-link " id="login" to="/login" onClick={this.handleShow}>LOG IN</Link>
                                            {/* </Button> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Button className=""> */}
                                            <Link className="nav-link" id="signin" to="/signin">SIGN UP</Link>
                                            {/* </Button> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Button type="button"> */}
                                            <Link className="nav-link" to="more">More</Link>
                                            {/* </Button> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Button className=""> */}
                                            <Link className="nav-link" to="about">About</Link>
                                            {/* </Button> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Button className=""> */}
                                            <Link className="nav-link" to="news">News</Link>
                                            {/* </Button> */}
                                        </li>
                                        <li className="nav-item">
                                            {/* <Button className=""> */}
                                            <Link className="nav-link" to="studi">Studi</Link>
                                            {/* </Button> */}
                                        </li>
                                    </ul>
                                </Route>
                            </BrowserRouter>

                        </div>
                        <div className="nav-left">
                            <div className="empty-content"></div>
                            <h4 className="UFOGame">UFO<span>Game</span></h4>
                            <img className="logo" src={logo2} alt="" />
                        </div>
                    </div>

                    <Modal className="modal fade" show={this.state.show} id="loginModal">
                        <Modal.Dialog className="modal-dialogs modal-dialog-centered modal-sm">
                            <div className="form-register modal-content mt-3">
                                <Modal.Body className="modal-bodys d-block">
                                    <Card>
                                        <Card.Body className="px-0">
                                            <Card.Title className="text-center">
                                                <h2>Welcome <span>back</span></h2>
                                                <p className="text-white">Do not have account ? <Link to="#">Sign up</Link></p>
                                            </Card.Title>
                                            <Form action="#" className="form-login py-4" >
                                                <div className="form-fields mb-4">
                                                    <label>
                                                        : User name
                                                        <input type="text" className="form-control mb-2" id="username"
                                                            placeholder="User" required></input>
                                                    </label>

                                                </div>
                                                <div className="form-fields mb-4">
                                                    <label>
                                                        : Password
                                                        <input type="password" className="form-control mb-2" id="password"
                                                            placeholder="Password" required></input>
                                                    </label>
                                                </div>

                                                <div className="mt-5 form-group">
                                                    <Button className="btn btn-info btn-lg btn-block" id="submit" type="submit">LOG
                                                                 IN</Button>
                                                </div>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Modal.Body>

                            </div>

                        </Modal.Dialog>

                    </Modal>
                </div>

            </>
        )

    }
}