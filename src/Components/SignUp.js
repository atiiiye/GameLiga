import React, { Component } from "react";

//import css
import "./../css/signup.css";
import "./../css/mediaSignup.css";
import "./../css/toastify.css";

//import boostrap
import { Form, ProgressBar } from "react-bootstrap";
import { Button } from "reactstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

//import routes
import { NavLink, Redirect } from "react-router-dom";

//import components
import UserHeaderLeft from "./UserHeaderLeft";
import Loader from "./Loader";
import Progressbar from "./Progressbar";

//import packages
import RefreshIcon from "@material-ui/icons/Refresh";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@material-ui/core/Checkbox";

//import services
import { signup } from "./../Services/userService";

//import contexts
import { Context } from "./Contexts/index";

class SignUp extends Component {
  state = {
    // errors: {
    //   firstName: "",
    //   lastName: "",
    //   nickName: "",
    //   username: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   phone: "",
    //   promotional: "",
    //   referred: "",
    //   generate: 0,
    // captchaInput: "",
    // },
    // firstName: "",
    // lastName: "",
    // nickName: "",
    // username: "",
    // email: "",
    // password: "",
    // confirmPassword: "",
    // phone: "",
    // promotional: "",
    // referred: "",
    // generate: 0,
    // captcha: "",
    // captchaInput: "",
    // redirect: false,
    // checkbox: false,
    // loading: false,

    type: "text",
  };

  static contextType = Context;

  handleVisiblePassword = () => {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));
  };

  componentDidMount() {
    this.context.randomCode(6);
  }

  componentDidUpdate() {

      (e)=>this.context.handleChange(e);
  }

  // postData = async () => {
  //   this.setState({ loading: true });
  //   try {
  //     const { data, status } = await signup(this.state);
  // if(status === 201) successMessage("Create account successfully , Please wait");
  //     localStorage.setItem("token", data);
  //     this.setState({ redirect: true });
  //     this.setState({ loading: false });
  //   } catch (err) {
  //     if (err.response && err.response.status === 400) {
  //       this.setState({ loading: false });
  //       errorMessage("Your Information is invalid")
  //       // const errors = { ...this.state.errors }
  //       // errors.username = 'Username or E-mail is invalid ';
  //       // this.setState({ errors })
  //     }
  //   }
  // };


  render() {

    const { loading } = this.state;
    const { errors, password, redirect } = this.context;
    // console.log("SignUp Context", this.context);

    let progressStyle = "";

    if (password.length < 6) progressStyle = "danger";
    if (password.length >= 6) progressStyle = "warning";
    if (password.length >= 10) progressStyle = "success";

    if (redirect) {
      return <Redirect to={{ pathname: "/account" }} />;
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

            <Form
              id="signupForm"
              className="form-signup"
              onSubmit={(e) => this.context.handleSubmitSignup(e)}
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
                    className="form-control-plaintext"
                    placeholder="User name"
                    name="username"
                    onChange={(e) => this.context.handleChange(e)}
                    value={this.context.username}
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
                      onChange={(e) => this.context.handleChange(e)}
                      value={this.context.password}
                      name="password"
                    />
                    <i
                      className="far fa-eye"
                      onClick={this.handleVisiblePassword.bind(this)}
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
                    now={this.context.password.length * 10}
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
                    onClick={() => this.context.randomPassword(11)}
                  >
                    Generate Password
                  </Button>
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
                    value={this.context.confirmPassword}
                    onChange={(e) => this.context.handleChange(e)}
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
                    value={this.context.email}
                    onChange={(e) => this.context.handleChange(e)}
                    noValidate
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
              </Form.Group>

              {loading && <Loader />}

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
                    onChange={(e) => this.context.handleChange(e)}
                    value={this.context.nickName}
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
                    onChange={(e) => this.context.handleChange(e)}
                    value={this.context.firstName}
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
                    onChange={(e) => this.context.handleChange(e)}
                    value={this.context.lastName}
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
                    onChange={(e) => this.context.handleChange(e)}
                    value={this.context.phone}
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
                    onChange={(e) => this.context.handleChange(e)}
                    value={this.context.promotional}
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
                    onChange={(e) => this.context.handleChange(e)}
                    value={this.context.referred}
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
                    <div className="captcha">{this.context.captcha}</div>
                    <RefreshIcon
                      className="refresh-captcha"
                      onClick={() => this.context.randomCode(6)}
                    />
                  </div>

                  <div className="validation-box ">
                    <Form.Control
                      type="text"
                      name="captchaInput"
                      className="form-control-plaintext"
                      onChange={(e) => this.context.handleChange(e)}
                      value={this.context.captchaInput}
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
                  checked={this.context.checkbox}
                  onChange={(e) => this.context.handleChangeBox(e)}
                  style={{ color: "rgba(255, 255, 255 , .88)" }}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />

                <Form.Label className="label-check-box  col-form-label px-0">
                  I confirm that I have read and accepted all the
                  <NavLink to="/rules">rules and condition</NavLink>
                </Form.Label>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Button
                  className={`register col-sm-7 ${
                    this.context.validateForm(errors) &&
                    this.context.checkbox &&
                    this.context.username &&
                    this.context.password &&
                    this.context.confirmPassword &&
                    this.context.email &&
                    this.context.nickName &&
                    this.context.phone &&
                    this.context.captchaInput
                      ? ""
                      : "disabled"
                  }`}
                  variant="none"
                  type="submit"
                >
                  Register
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
