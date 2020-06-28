import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/Header.css';
import './../css/formlogin.css';
import logo2 from './../images/logo2.png';

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
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


    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
      } 

    // handleShow = () => this.setState({ show: true });
    // handleClose = () => this.setSatate({ show: false });


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
                                            <Link className="nav-link" id="login" to="/" onClick= {() => this.setState({ show: true })}>LOG IN</Link>
                                        </li>


                                        <li className="nav-item">
                                            <Link className="nav-link" id="signin" to="/signin">SIGN UP</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="more">More</Link>
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

                    <Modal className="modal fade" show={this.state.show} onHide={()=>this.setState({ show: false })}>
                        <Modal.Dialog className="modal-dialogs modal-dialog-centered">
                            <div className="form-register modal-content mt-3">
                                <Modal.Body className="modal-body d-block">
                                    <Card>
                                        <Card.Body className="px-0">
                                            <Card.Title className="text-center mx-2">
                                                <BrowserRouter>
                                                    <Route>
                                                        <h2>Welcome <span>back</span></h2>
                                                        <p className="text-white px-2">Do not have account ? <Link to="#">Sign up</Link></p>
                                                    </Route>
                                                </BrowserRouter>

                                            </Card.Title>
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
                                                    <Button className="btn-lg btn-light btn-block" variant="none" id="submit" onClick={()=> this.setState({ show: false })} type="submit">LOG
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