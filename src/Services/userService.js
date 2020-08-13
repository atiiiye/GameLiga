import http from './httpService'
import config from './../config.json'
import axios from 'axios';

export function login(user) {

    return http.post(config.loginApi, {
        Username: user.Username,
        Password: user.password
    })
}

export function signup(user) {

    return http.post(config.signupApi, {
        Username: user.username,
        Password: user.password,
        Email: user.email,
        NickName: user.nickName,
        FirstName: user.firstName,
        LastName: user.lastName,
        PhoneNumber: user.phone,
        PromotionalCode: user.promotional,
        Referred: user.referred,
    })

}

