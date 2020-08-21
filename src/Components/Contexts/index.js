import React, { Component } from 'react'

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


export const AuthContext = React.createContext({
    username: [],

});

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false,
    };
    toggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
    };

    render() {
        return (
            <AuthContext.Provider
                value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;