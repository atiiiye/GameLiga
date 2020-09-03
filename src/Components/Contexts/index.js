import React from 'react'

export const modalContext = React.createContext({
    show: [],
    setShow: () => { }
})

export const TelegramContext = React.createContext({
    show: [],
    setShow: () => { }
})

export const SignupContext = React.createContext({
    username: [],
})

export const LoginContext = React.createContext({
    username: [],
})

export const usernameContext = React.createContext({
    username: {},
})

