import React, { Component } from "react";

//import context
import { Context } from "./index";

//import services
import { login ,signup } from "../../Services/userService";


//import utils
import { errorMessage, successMessage } from "../../utils/messages";

class UserContextes extends Component {
  
  state = {
    errors: {
      firstName:"",
      lastName:"",
      nickName:"",
      username:"",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      promotional: "",
      generate: "",
      referred: "",
      captchaInput: "",
    },
    firstName:"",
    lastName:"",
    nickName:"",
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    promotional: "",
    referred: "",
    generate: "",
    checkbox: false,
    captcha: "",
    captchaInput: "",
    redirect: false,
    type: "text",
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
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

  handleSubmitLogin = (e) => {
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
      }

      localStorage.setItem("token", data);
      // this.props.dispatch({type:"LOGIN" , payload : data.Username})
      this.setState({ redirect: true });
      this.resetInputs();
      this.setState({ loading: false });

      // this.props.history.push({
      //     pathname: "/account",
      //     state: { username: this.state.username },
      // });

      // this.props.history.history.history.push({
      //     // pathname: "/account",
      //     state: { username: this.state.username },
      // });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        this.setState({ loading: false });
        errorMessage("Username or Password is invalid");
      }
    }
  };

  resetInputs = () => {
    this.setState({
      username: "",
      password: "",
    });
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
      if (status === 201)
        successMessage("Create account successfully , Please wait");
      localStorage.setItem("token", data);
      this.setState({ redirect: true });
      this.setState({ loading: false });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        this.setState({ loading: false });
        errorMessage("Your Information is invalid");
        // const errors = { ...this.state.errors }
        // errors.username = 'Username or E-mail is invalid ';
        // this.setState({ errors })
      }
    }
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
    }));
  };

  render() {
    console.log('UserContext :',this.props)
    return (
      <Context.provider
        value={{
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          nickName:this.state.nickName,
          username:this.state.username,
          email:this.state.email,
          password:this.state.password,
          confirmPassword:this.state.confirmPassword,
          phone:this.state.phone,
          promotional:this.state.promotional,
          referred:this.state.referred,
          checkbox:this.state.checkbox,
          captcha:this.state.captcha,
          captchaInput:this.state.captchaInput,
          redirect:this.state.redirect,

          handleChangeLogin: this.handleChangeLogin.bind(this),
          handleSubmitLogin: this.handleSubmitLogin.bind(this),
          goAccount: this.goAccount.bind(this),
          resetInputs: this.resetInputs.bind(this),
          handleSubmitSignup: this.handleSubmitSignup.bind(this),
          handleChange: this.handleChange.bind(this),
          postData: this.postData.bind(this),
          validateForm: this.validateForm.bind(this),
          handleChangeBox: this.handleChangeBox.bind(this),
          randomPassword: this.randomPassword.bind(this),
          randomCode: this.randomCode.bind(this),
          handleVisiblePassword: this.handleVisiblePassword.bind(this),
        }}
      >
        {this.props.children}
      </Context.provider>
    );
  }
}

export default UserContextes;
