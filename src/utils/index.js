import jwt from "jsonwebtoken";

export let TOKEN_KEY = "jwt";

export const LoginUtil = (data) => {

  localStorage.setItem(TOKEN_KEY, data);
};

export const LogoutUtil = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {

  if (localStorage.getItem(TOKEN_KEY)) {
    const decoded = jwt.decode(localStorage.getItem(TOKEN_KEY));
    // console.log({decoded})
    return {decoded};
  }
};
