
import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/Header.css';
import logo2 from './../images/logo2.png';

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'


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
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg">
                        <div className="nav-right">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link " id="login" to="/login" data-target="#loginModal" data-toggle="modal">LOG IN</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" id="signin" to="/signin">SIGN UP</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button type="button"> */}
                                    <a className="nav-link" to="more">More</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" to="about">About</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" to="news">News</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" to="studi">Studi</a>
                                    {/* </Button> */}
                                </li>
                            </ul>
                        </div>
                        <div className="nav-left">
                            <div className="empty-content"></div>
                            <h4 className="UFOGame">UFO<span>Game</span></h4>
                            <img className="logo" src={logo2} />
                        </div>
                    </div>

                    <Modal className="modal fade" id="loginModal">
                        <Modal.Dialog className="modal-dialogs modal-dialog-centered modal-sm">
                            <div className="form-register modal-content mt-3">
                                <Modal.Body className="modal-bodys d-block">
                                    <div className="card">
                                        <div className="card-body px-0">
                                            <div className="card-title text-center">
                                                <h2>Welcome <span>back</span></h2>
                                                <p className="text-white">Do not have account ? <a href="#">Sign up</a></p>
                                            </div>
                                            <form action="#" className="form-login py-4" >
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
                                                    <button className="btn btn-info btn-lg btn-block" id="submit" type="submit">LOG
                                                                 IN</button>
                                                </div>


                                            </form>
                                        </div>
                                    </div>
                                </Modal.Body>

                            </div>

                        </Modal.Dialog>

                    </Modal>
                </div>

            </>
        )

    }
}