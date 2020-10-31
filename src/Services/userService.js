import http from './httpService';
import config from './../config.json';

export function login(user) {

    // var cors = require("cors");
    // user.use(cors());

  const headers = {
    // "x-apikey": "59a7ad19f5a9fa0808f11931",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
  };
    
    return http.post(
      config.loginApi,
      JSON.stringify({
        Username: user.username,
        Password: user.password,
      }),
    //   {mode: "no-cors"},
    //   { headers }
    );
}

export function signup(user) {

    return http.post(config.signupApi,
        JSON.stringify({
        Username: user.username,
        Password: user.password,
        Email: user.email,
        NickName: user.nickName,
        FirstName: user.firstName,
        LastName: user.lastName,
        PhoneNumber: user.phone,
        PromotionalCode: user.promotional,
        Referred: user.referred,
    }))

}

