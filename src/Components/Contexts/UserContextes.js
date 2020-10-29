import React, { Component } from "react";

//import context
import { Context } from "./index";

//import services
import { login, signup } from "../../Services/userService";

//import routes
import {  Redirect } from "react-router-dom";

//import utils
import { errorMessage, successMessage } from "../../utils/messages";
import { LoginUtil } from "./../../utils";
// import { LogoutUtil } from "./../../utils";

class UserContextes extends Component {
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
    captcha: "",
    captchaInput: "",
    redirect: false,
    loading: false,
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmitSignup = (event) => {
    event.preventDefault();
    console.log("handleSubmitSignup");
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
    }
  };

  postData = async () => {
    this.setState({ loading: true });
    try {
      const { data, status } = await signup(this.state);
      if (status === 201 || status === 200) {
        successMessage("Create account successfully , Please wait");
        LoginUtil(data);
      }
      this.setState({ redirect: true });
      this.setState({ loading: false });
      // this.resetInputs();
      // this.setState({ redirect: false });
      
    } catch (err) {
      if (err.response && err.response.status === 400) {
        errorMessage("Your Information is invalid");
        this.setState({ loading: false });
      }
      this.resetInputs();

    }
  };

  handleChangeLogin = (event) => {
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

  handleSubmitLogin = (event) => {
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
    this.setState({ loading: true });
    try {
      const { data, status } = await login(this.state);
      if (status === 200) {
        successMessage("You have logged in successfully");
        LoginUtil(data);
        this.setState({ redirect: true });
        // if (this.state.redirect) {
        //   return <Redirect to={{ pathname: "/account" }} />;
        //   console.log(this.state.redirect)
        // }
      }
      // this.props.dispatch({type:"LOGIN" , payload : data})
      this.setState({ loading: false });
      this.resetInputs();
    } catch (err) {
      if (err.response && err.response.status === 400) {
        errorMessage("Username or Password is invalid");
        this.setState({ loading: false });
      }
      this.resetInputs()

    }
  };

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

  handleChangeBox = (event) => {
    this.setState({ checkbox: event.target.checked });
  };

  randomPassword = (length) => {
    let chars =
      "abcdefghijklmnopqrstuvwxyz!@#$%&*ABCDEFGHIJKLMNOPSTQRWXYZ1234567890";
    let pass = "";
    for (let x = 0; x < length; x++) {
      let i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }

    this.setState({ password: pass, confirmPassword: pass });
  };

  randomCode = (length) => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPSTQRWXYZ1234567890";
    let code = "";
    for (let x = 0; x < length; x++) {
      let i = Math.floor(Math.random() * chars.length);
      code += chars.charAt(i);
    }

    this.setState({ captcha: code });
  };

  resetInputs = () => {
    this.setState({
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      nickName: "",
      confirmPassword: "",
      phone: "",
      promotional: "",
      referred: "",
      checkbox: false,
      captchaInput: "",
      loading:false,
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
        captchaInput: "",
      },
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          username: this.state.username,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          email: this.state.email,
          nickName: this.state.nickName,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          promotional: this.state.promotional,
          referred: this.state.referred,
          captcha: this.state.captcha,
          captchaInput: this.state.captchaInput,
          errors: this.state.errors,
          loading: this.state.loading,
          checkbox: this.state.checkbox,
          redirect: this.state.redirect,
          handleChangeLogin: this.handleChangeLogin.bind(this),
          handleSubmitLogin: this.handleSubmitLogin.bind(this),
          goAccount: this.goAccount.bind(this),
          handleSubmitSignup: this.handleSubmitSignup.bind(this),
          handleChange: this.handleChange.bind(this),
          postData: this.postData.bind(this),
          validateForm: this.validateForm.bind(this),
          randomPassword: this.randomPassword.bind(this),
          randomCode: this.randomCode.bind(this),
          handleChangeBox: this.handleChangeBox.bind(this),
          resetInputs: this.resetInputs.bind(this),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default UserContextes;
