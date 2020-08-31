import React, { Component } from "react";

//import css
import "./../css/Login.css";
import "./../css/mediaLogin.css";
import "./../css/toastify.css";

//import boostrap
import { Button, Form, Modal } from "react-bootstrap";

//import components 
import UserHeaderRight from "./UserHeaderRight";

//import routes
import { NavLink, Redirect } from "react-router-dom";

//import packages
import { ToastContainer, toast, Flip, Slide } from "react-toastify";
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';


//import contexts
import { modalContext } from "./Contexts";
import { LoginContext } from './Contexts';
import { usernameContext } from './Contexts';



import { logout, isLogin } from '../utils';


import { login } from "./../Services/userService";

class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: {
            username: "",
            password: "",
        },
        redirect: false,
        // isLogin: isLogin(),
    };
    // history = createBrowserHistory()

    static contextType = modalContext;

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        return valid;
    };

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                if (value.length < 6 && value.match(/[a-zA-Z0-9]+$/)) {
                    errors.username = "Username must be 6 characters long!";
                } else if (value.match(/^[a-zA-Z0-9]+$/ && value.length > 6)) {
                    errors.username = "";
                } else if (!value.match(/[a-zA-Z]+/) && value.length >= 6) {
                    errors.username = "Username can not be only number";
                } else if (
                    (!value.match(/^[a-zA-Z0-9]+$/) && 1 < value.length < 6) ||
                    (!value.match(/^[a-zA-Z0-9]+$/) && value.length > 6)
                ) {
                    errors.username = "please enter correct";
                } else {
                    errors.username = "";
                }
                break;
            case "password":
                errors.password =
                    value.length < 8
                        ? "Password at least must be 8 characters long!"
                        : "";
                break;
            default:
                return this.state;
        }

        this.setState({ errors, [name]: value });
    };

    handleSubmit = (e) => {
        event.preventDefault();

        if (
            this.validateForm(this.state.errors) &&
            this.state.username &&
            this.state.password
        ) {
            console.info("Valid Form");
            this.goAccount();
        } else {
            console.error("Invalid Form");
        }
    };

    goAccount = async () => {
        try {
            await login(this.state);

            // this.props.dispatch({
            //     type: 'HistorySlider'
            // })

            // this.props.history.push({
            //     pathname: "/account",
            //     state: { username: this.state.username },
            // });

            // this.props.history.history.history.push({
            //     // pathname: "/account",
            //     state: { username: this.state.username },
            // });

            // <usernameContext.Provider value={{ username: this.state.username }}>
            // <UserHeaderRight />

            this.setState({ redirect: true })

            {/* </usernameContext.Provider > */ }

            // console.log('aaaaa')

        } catch (err) {
            if (err.response && err.response.status === 400) {
                this.notifyError();
            }
        }
    };

    notifyError = () => {
        toast.error("Username or Password is invalid", {
            className: "toast-container-error",
            transition: Slide,
            autoClose: 3500,
            draggable: true,
            closeOnClick: true,
            // position: "relative",
        });
    };

    // handleLogout = () => {
    //     logout();
    //     this.setState({ isLogin: false })
    // }


    render() {
        const { errors, redirect } = this.state;
        // console.log(this.props)

        if (redirect) {
            return (

                <React.Fragment>
                    {this.state.isLogin}
                    <usernameContext.Provider value={{ username: this.state.username }}>
                        <UserHeaderRight />
                    </usernameContext.Provider >
                    <Redirect to={{
                        pathname: '/account',
                        // state: { username: this.state.username }
                    }} />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>


                <Modal
                    className="login-modal"
                    show={this.context.modalShow}
                    onHide={() => this.context.setModalShow(false)}
                >
                    <Modal.Body>
                        <ToastContainer limit={1} />
                        <Modal.Title className="title-login text-center mx-2">
                            <h2>
                                Welcome <span>back</span>
                            </h2>
                            <p className="text-white px-2">
                                Do not have account ?{" "}
                                <NavLink
                                    to="/signup"
                                    onClick={() => this.context.setModalShow(false)}
                                >
                                    Sign up
                                </NavLink>
                            </p>
                        </Modal.Title>


                        <Form
                            action="#"
                            className="form-login py-4"
                            onSubmit={this.handleSubmit.bind(this)}
                        >
                            <div className="form-fields mb-4">
                                <Form.Label>Username :</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="text"
                                    className="mb-1 mt-1"
                                    id="username"
                                    name="username"
                                    placeholder="User"
                                    value={this.state.username}
                                    onChange={this.handleChange.bind(this)}
                                ></Form.Control>
                                {errors.username.length > 0 && (
                                    <span className="form-validate">{errors.username}</span>
                                )}
                            </div>
                            <div className="form-fields">
                                <Form.Label>Password :</Form.Label>
                                <Form.Control
                                    type="text"
                                    className="mb-1 mt-1"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange.bind(this)}
                                ></Form.Control>
                                {errors.password.length > 0 && (
                                    <span className="form-validate">{errors.password}</span>
                                )}
                            </div>
                            <NavLink className="forgot mb-4" to="/" alt="">
                                Forget your password?
                                        </NavLink>

                            <div className="mt-5 form-button w-75">
                                <Button
                                    className={`btn-block login ${
                                        !this.state.errors.username &&
                                            !this.state.errors.password &&
                                            this.state.username &&
                                            this.state.password
                                            ? ""
                                            : "disabled"
                                        }`}
                                    variant="none"
                                    id="submit"
                                    value="Submit"
                                    type="submit"
                                >
                                    LOG IN
                                            </Button>
                            </div>
                        </Form>


                        {/* </usernameContext.Consumer> */}

                    </Modal.Body>
                </Modal>


            </React.Fragment>
        );

    }
}

// const mapStateToProps = (state) => {
//     return {
//         history: state.history
//     }
// }

export default Login;
