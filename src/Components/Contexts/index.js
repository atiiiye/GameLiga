import React from "react";

export const Context = React.createContext({
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
    generate: "",
    referred: "",
    captchaInput: "",
  },
  username: "",
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
  checkbox: "",
  captcha: "",
  generate: "",
  captchaInput: "",
  redirect: "",
  type: "",
  handleChangeLogin: () => {},
  handleSubmitLogin: () => {},
  goAccount: () => {},
  resetInputs: () => {},
  handleSubmitSignup: () => {},
  handleChange: () => {},
  postData: () => {},
  validateForm: () => {},
  handleChangeBox: () => {},
  randomPassword: () => {},
  randomCode: () => {},
  handleVisiblePassword: () => {},
});
