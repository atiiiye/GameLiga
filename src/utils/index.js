import jwt from "jsonwebtoken";

const TOKEN_KEY = "jwt";

export const LoginUtil = (data) => {

  // const decoded = jwt.decode(data);

  // const Json = JSON.stringify(decoded);
  localStorage.setItem(TOKEN_KEY, data);
};

export const LogoutUtil = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {

  if (localStorage.getItem(TOKEN_KEY)) {
    const getData = localStorage.getItem(TOKEN_KEY);
    const decoded = jwt.decode(getData);
    console.log(decoded)
    return decoded;
  }

  return false;
};
