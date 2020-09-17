import jwt from "jsonwebtoken";


const TOKEN_KEY = "jwt";

export const LoginUtil = (data) => {


  localStorage.setItem(TOKEN_KEY, data);
};

export const Logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) return true;

  return false;
};
