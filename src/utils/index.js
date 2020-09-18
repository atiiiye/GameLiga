import jwt from "jsonwebtoken";

const TOKEN_KEY = "jwt";

export const LoginUtil = (data) => {
  localStorage.setItem(TOKEN_KEY, data);
};

export const LogoutUtil = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {

  if (localStorage.getItem(TOKEN_KEY)) {
    const getData = localStorage.getItem(TOKEN_KEY);
    return jwt.decode(getData);
  }

  return false;
};
