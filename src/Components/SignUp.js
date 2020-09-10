import React, { Component } from "react";

//import css
import "./../css/signup.css";
import "./../css/mediaSignup.css";
import "./../css/toastify.css";

//import boostrap
import { Form, Button, ProgressBar } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

//import routes
import { NavLink, Redirect } from "react-router-dom";

//import components
import UserHeaderLeft from "./UserHeaderLeft";
import UserHeaderRight from "./UserHeaderRight";
import Progressbar from "./Progressbar";
import Loader from "./Loader";

//import packages
import RefreshIcon from "@material-ui/icons/Refresh";
import { ToastContainer, toast, Flip, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@material-ui/core/Checkbox";
import { Circle } from "react-preloaders";

//import services
import { signup } from "./../Services/userService";

import { login } from "../utils";

//import contexts
import { Context } from "./Contexts";

class SignUp extends Component {
  state = {
    errors: {
      firstName: "",
      lastName: "",
      nickName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      promotional: "",
      referred: "",
      generate: 0,
      captchaInput: "",
    },
    firstName: "",
    lastName: "",
    nickName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    promotional: "",
    referred: "",
    checkbox: false,
    generate: 0,
    captcha: "",
    captchaInput: "",
    redirect: false,
    completed: 50,
    bgColor: "#ffffff",
    loading: false,
    type: "text",
  };

  // static contextType = usernameContext;

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^([A-Za-z])(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

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
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password at least must be 8 characters long!"
            : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value != this.state.password ? "Password not match!" : "";
        break;
      case "firstName":
        if (value.length < 6 && value.match(/^[a-zA-Z]+$/)) {
          errors.firstName = "First Name must be 6 characters long!";
        } else if (value.match(/^[a-zA-Z]+$/ && value.length > 6)) {
          errors.firstName = "";
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length >= 6) {
          errors.firstName = "please enter only letters";
        } else if (!value.match(/^[a-zA-Z]+$/) && 1 < value.length < 6) {
          errors.firstName = "please enter correct";
        } else {
          errors.firstName = "";
        }
        break;
      case "lastName":
        if (value.length < 6 && value.match(/^[a-zA-Z]+$/)) {
          errors.lastName = "Last Name must be 6 characters long!";
        } else if (value.match(/^[a-zA-Z]+$/ && value.length > 6)) {
          errors.lastName = "";
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length >= 6) {
          errors.lastName = "please enter only letters";
        } else if (!value.match(/^[a-zA-Z]+$/) && 1 < value.length < 6) {
          errors.lastName = "please enter correct";
        } else {
          errors.lastName = "";
        }
        break;
      case "nickName":
        if (value.length < 6 && value.match(/[a-zA-Z0-9]+$/)) {
          errors.nickName = "Nick name must be 6 characters long!";
        } else if (value.match(/^[a-zA-Z0-9]+$/ && value.length > 6)) {
          errors.nickName = "";
        } else if (!value.match(/[a-zA-Z]+/) && value.length >= 6) {
          errors.nickName = "Nick name can not be only number";
        } else if (
          (!value.match(/^[a-zA-Z0-9]+$/) && 1 < value.length < 6) ||
          (!value.match(/^[a-zA-Z0-9]+$/) && value.length > 6)
        ) {
          errors.nickName = "please enter correct";
        } else {
          errors.nickName = "";
        }
        break;
      case "phone":
        if (value.length < 11 && value.match(/[0-9]+/)) {
          errors.phone = "Phone must be 11 characters long!";
        } else if (
          (value.match(/[a-zA-Z]+/) && value.length <= 11) ||
          (value.match(/[a-zA-Z]+/) && value.length > 11)
        ) {
          errors.phone = "please enter only number";
        } else {
          errors.phone = "";
        }
        break;
      case "promotional":
        if (value.length < 6 && value.match(/[a-zA-Z0-9]+/)) {
          errors.promotional = "Code at least must be 6 characters!";
        } else if (
          (value.match(/[^a-zA-Z0-9]+/) && value.length >= 6) ||
          (value.match(/[^a-zA-Z0-9]+/) && value.length < 6)
        ) {
          errors.promotional = "Code is invalid";
        } else {
          errors.promotional = "";
        }
        break;
      case "referred":
        if (value.length < 6 && value.match(/^[a-zA-Z]+$/)) {
          errors.referred = "Code must be 6 characters long!";
        } else if (value.match(/^[a-zA-Z]+$/ && value.length > 6)) {
          errors.referred = "";
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length >= 6) {
          errors.referred = "please enter only letters";
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length < 6) {
          errors.referred = "Referred is not valid";
        } else {
          errors.referred = "";
        }
        break;
      case "captchaInput":
        if (value.length != 6 || value != this.state.captcha) {
          errors.captchaInput = "Code is incorrect!";
        } else {
          errors.captchaInput = "";
        }

        break;
      default:
        return this.state;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmitSignup = (event) => {
    event.preventDefault();
    if (
      this.validateForm(this.state.errors) &&
      this.state.checkbox &&
      this.state.username &&
      this.state.password &&
      this.state.confirmPassword &&
      this.state.email &&
      this.state.nickName &&
      this.state.phone &&
      this.state.captchaInput
    ) {
      console.info("Valid Form");

      this.postData();
    } else {
      console.error("Invalid Form");
      // this.notifyError();
    }
  };

  postData = async () => {
    this.setState({ loading: true });
    try {
      const { data, status } = await signup(this.state);
      if (status === 201) this.notifySuccess();
      localStorage.setItem("token", data);
      this.setState({ redirect: true });
      this.setState({ loading: false });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        this.setState({ loading: false });
        this.notifyError();
        // const errors = { ...this.state.errors }
        // errors.username = 'Username or E-mail is invalid ';
        // this.setState({ errors })
      }
    }
  };

  notifySuccess = () => {
    toast.success("Create account successfully , Please wait", {
      className: "toast-container-success",
      transition: Slide,
      autoClose: 1500,
      closeOnClick: true,
    });
  };

  notifyError = () => {
    toast.error("Your Information is invalid", {
      className: "toast-container-error",
      transition: Slide,
      autoClose: 3500,
      closeOnClick: true,
    });
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleChangeBox = (e) => {
    this.setState({
      checkbox: e.target.checked,
    });
  };

  randomPassword = (length) => {
    let chars =
      "abcdefghijklmnopqrstuvwxyz!@#$%&*ABCDEFGHIJKLMNOPSTQRWXYZ1234567890";
    let pass = "";
    for (let x = 0; x < length; x++) {
      let i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }

    this.setState({
      password: pass,
    });
  };

  componentDidMount() {
    this.randomCode(6);
  }

  randomCode = (length) => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPSTQRWXYZ1234567890";
    let code = "";
    for (let x = 0; x < length; x++) {
      let i = Math.floor(Math.random() * chars.length);
      code += chars.charAt(i);
    }

    this.setState({
      captcha: code,
    });
  };

  handleVisiblePassword = () => {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }))
  };

  static getDerivedStateFromProps(props, state) {
    console.log("SignUp : getDerivedStateFromProps");
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("SignUp : shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("SignUp : getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("SignUp : componentDidUpdate");
  }

  render() {
    const { errors, redirect, password, loading } = this.state;
    // console.log(this.props);
    console.log("SignUp : renderred");

    let progressStyle = "";

    if (password.length < 6) progressStyle = "danger";
    if (password.length >= 6) progressStyle = "warning";
    if (password.length >= 10) progressStyle = "success";

    if (redirect) {
      return (
        <Context.Provider value={{ username: this.state.username }}>
          <Redirect to={{ pathname: "/account" }} />
          <UserHeaderRight />
        </Context.Provider>
      );
    }
    return (
      <React.Fragment>
        <UserHeaderLeft />

        <div className="card-body" id="card-form-signup">
          <div className="card-form">
            <div className="title">
              <h1 className="h1">Registration</h1>
              <p className="text-muted">
                If you already have an Account with Challenge Stars
              </p>
              <NavLink to="/" id="goLogin">
                click here to login
              </NavLink>
            </div>

            {/* <Context.Provider value={this.state.username}> */}
            <Form
              action="#"
              id="signupForm"
              className="form-signup"
              onSubmit={this.handleSubmitSignup}
              method="post"
            >
              <ToastContainer limit={1} />

              <h3 className="h3">Login Information</h3>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 username">
                  User name :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    autoFocus
                    type="text"
                    className=" form-control-plaintext"
                    placeholder="User name"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                  {errors.username.length > 0 && (
                    <span className="error">{errors.username}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 password">
                  Password :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <div className="password-block">
                    <Form.Control
                      type={this.state.type}
                      id="randomPassword"
                      className="form-control-plaintext "
                      placeholder="Password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      name="password"
                    />
                    <i
                      className="far fa-eye"
                      onClick={this.handleVisiblePassword}
                    />
                  </div>
                  {errors.password.length > 0 && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1" controlId="formBasicRangeCustom">
                <Form.Label className="col-sm-4 col-form-label px-0">
                  <NavLink to="/generate">Generate :</NavLink>
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <ProgressBar
                    className="form-control-plaintext"
                    variant={progressStyle}
                    now={this.state.password.length * 10}
                    min={0}
                    max={100}
                    name="progressbar"
                  />
                  {/* 
                  <Progressbar
                    className="form-control-plaintext"
                    bgcolor={this.state.bgColor}
                    completed={this.state.completed}
                  /> */}

                  <Button
                    className="generate-password mt-3"
                    variant="warning"
                    type="button"
                    onClick={this.randomPassword.bind(this, 11)}
                  >
                    Generate Password
                  </Button>

                  {errors.generate.length > 0 && (
                    <span className="error">{errors.generate}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 confirmPassword">
                  confirm password :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="text"
                    className="form-control-plaintext"
                    placeholder="confirm password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                  {errors.confirmPassword.length > 0 && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 email">
                  E-mail address :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="email"
                    className="form-control-plaintext"
                    placeholder="E-mail address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
              </Form.Group>
              {loading && <Loader />}

              {/* <Circle
                        time={0}
                        color="#ff9300"
                        background="blur"
                        customLoading={loading}
                      /> */}

              <h3 className="h3">Personal Information</h3>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 nickName">
                  Nick name :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Nick name"
                    name="nickName"
                    onChange={this.handleChange}
                    value={this.state.nickName}
                    noValidate
                  />
                  {errors.nickName.length > 0 && (
                    <span className="error">{errors.nickName}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 fistName">
                  First name :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="text"
                    className="form-control-plaintext"
                    placeholder="First name"
                    name="firstName"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                  />
                  {errors.firstName.length > 0 && (
                    <span className="error">{errors.firstName}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 lastName">
                  Last name :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Last name"
                    name="lastName"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                  {errors.lastName.length > 0 && (
                    <span className="error">{errors.lastName}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 phone">
                  Phone number :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Phone number"
                    name="phone"
                    onChange={this.handleChange}
                    value={this.state.phone}
                  />
                  {errors.phone.length > 0 && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 promotional">
                  Promotional Code :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Promotional code"
                    name="promotional"
                    onChange={this.handleChange}
                    value={this.state.promotional}
                  />
                  {errors.promotional.length > 0 && (
                    <span className="error">{errors.promotional}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0 referred">
                  Referred by :
                </Form.Label>
                <div className="validation-box col-sm-7">
                  <Form.Control
                    type="text"
                    className="form-control-plaintext"
                    placeholder="Referred by"
                    name="referred"
                    onChange={this.handleChange}
                    value={this.state.referred}
                  />
                  {errors.referred.length > 0 && (
                    <span className="error">{errors.referred}</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-sm-4 col-form-label px-0">
                  Captcha :
                </Form.Label>
                <div className="captcha-block col-sm-7">
                  <div className="captcha-generate">
                    <div className="captcha">{this.state.captcha}</div>
                    <RefreshIcon
                      className="refresh-captcha"
                      onClick={this.randomCode.bind(this, 6)}
                    />
                  </div>

                  <div className="validation-box ">
                    <Form.Control
                      type="text"
                      name="captchaInput"
                      className="form-control-plaintext"
                      onChange={this.handleChange}
                      value={this.state.captchaInput}
                      placeholder="please enter code"
                    />

                    {errors.captchaInput.length > 0 && (
                      <span className="error">{errors.captchaInput}</span>
                    )}
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                {/* <Form.Check
                  inline
                  type="checkbox"
                  className="form-control-plaintext"
                  placeholder=""
                  name="checkbox"
                  onChange={this.handleChangeBox}
                  value={this.state.checkbox}
                /> */}

                <Checkbox
                  checked={this.state.checkbox}
                  onChange={this.handleChangeBox}
                  style={{ color: "rgba(255, 255, 255 , .88)" }}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />

                <Form.Label className="label-check-box  col-form-label px-0">
                  I confirm that I have read and accepted all the
                  <NavLink to="/rules">rules and condition</NavLink>
                </Form.Label>
              </Form.Group>

              <Form.Group className="row ml-1">
                {/* <div className="col-form-label"></div> */}
                <Button
                  className={`register col-sm-7 ${
                    this.validateForm(this.state.errors) &&
                    this.state.checkbox &&
                    this.state.username &&
                    this.state.password &&
                    this.state.confirmPassword &&
                    this.state.email &&
                    this.state.nickName &&
                    this.state.phone &&
                    this.state.captchaInput
                      ? ""
                      : "disabled"
                  }`}
                  variant="none"
                  type="submit"
                  onClick={
                    this.state.handleChange
                  }
                >
                  Register
                </Button>
              </Form.Group>
            </Form>

            {/* </Context.Provider> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
