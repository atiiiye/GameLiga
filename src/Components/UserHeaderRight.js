import React, { Component } from 'react';

//import css
import './../css/reset.css';
import './../css/UserHeaderRight.css'
import './../css/mediaUserHeaderRight.css'


//import boostrap
import { Navbar, NavLink, NavItem } from 'react-bootstrap';

//import components
import Wallet from './Wallet';
import Telegram from './Telegram';

//import packages
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BellIcon from '@material-ui/icons/Notifications';
import TelegramIcon from '@material-ui/icons/Telegram';

//import contexts
import { modalContext } from './Contexts';
import { TelegramContext } from './Contexts';
import { usernameContext } from './Contexts';
import { LoginContext } from './Contexts';


//import route
// import { NavLink } from "react-router-dom";

class UserHeaderRight extends Component {
    state = {
        // walletShow: false,
        // telegramShow: false,
        exampleModal: false

    }

    handlePrevntDefault = (e) => {
        // e.preventDefault()
        // this.toggleModal()
        // this.setShow({
        //     telegramShow: true,
        //     walletShow: true
        // })
    }

    // handleRoutingWallet = (e) => {
    //     e.preventDefault()
    //     // this.setState({ show: true })
    // }

    toggleModal = (state) => {
        // e.preventDefault()

        this.setState({
            [state]: !this.state[state]
        });
    };

    // setShow = (status) => {
    //     this.setState({ telegramShow: status })
    // }

    // static contextType = usernameContext;
    /* {this.props.history.location.state.username} */

    render() {
        // console.log(this.context)
        return (


            <Navbar className="user-header-right">
                <div className="hamburger-menu px-0" data-target="#collapse-navbar">
                    <Navbar.Toggle aria-controls="collapse" className="px-0">
                        <span className="menu navbar-toggler-icon">
                            <div className="menu-line menu-line-1"></div>
                            <div className="menu-line menu-line-2"></div>
                            <div className="menu-line menu-line-3"></div>
                        </span>
                    </Navbar.Toggle>
                </div>

                <div className="navbar-right" collapseonselect="true">
                    < Navbar.Collapse className="collapse-user row part-1" id="collapse-navbar">
                        <usernameContext.Consumer>
                            {
                                value => (
                                    <p className="text-muted">
                                        {/* {() => { if (context.loginUsername == 'undefined') { context.loginUsername === 'true' } }} */}

                                        {console.log(value.loginUsername)}
                                        {value.loginUsername || value.signinUsername}
                                    </p>
                                )
                            }
                        </usernameContext.Consumer>

                        <NavItem className="nav-item-icon" >
                            <NavLink to="/account" onClick={this.handlePrevntDefault.bind(this)} id="user">
                                <i className="image-icon fas fa-user-circle" id="user"></i>
                            </NavLink>
                        </NavItem>

                        <NavItem className="nav-item-icon" >
                            <NavLink to="/ticket" onClick={this.handlePrevntDefault.bind(this)} id="ticket">
                                <i className="image-icon fas fa-ticket-alt" id="ticket"></i>
                            </NavLink>
                        </NavItem>

                        {/* <div className="row part-2"> */}
                        <NavItem className="nav-item-icon" >
                            <NavLink to="/bell" onClick={this.handlePrevntDefault.bind(this)} id="bell">
                                <BellIcon className="image-icon" id="bell" />
                            </NavLink>
                        </NavItem>

                        <NavItem className="nav-link-icon" >
                            <NavLink to="/telegram" onClick={this.handlePrevntDefault.bind(this)} id="telegram">
                                <TelegramIcon className="image-icon " id="telegram" />
                            </NavLink>
                            <Telegram />
                        </NavItem>

                        <NavItem className="nav-item-icon" >
                            <NavLink to="/wallet" onClick={this.handlePrevntDefault.bind(this)} id="wallet">
                                <WalletIcon className="image-icon" id="wallet" />
                                <Wallet />

                            </NavLink>
                        </NavItem>

                        {/* </div> */}
                    </Navbar.Collapse>

                    {/* <modalContext.Provider value={{
                        modalShow: this.state.exampleModal,
                        // setModalShow: () => this.setShow(),
                        toggleModal: () => this.toggleModal(this.state.exampleModal)
                    }}
                    >
                    </modalContext.Provider> */}



                    {/* 
                    <TelegramContext.Provider value={{
                        dropDownShow: this.state.telegramShow,
                        setDropDownShow: this.setShow.bind(this)
                    }}
                    >
                        <Telegram />
                    </TelegramContext.Provider> */}



                    <Navbar.Collapse className="collapse-user row part-1 d-none" id="collapse-navbar" />
                </div>
            </Navbar>

        );
    }
}

export default UserHeaderRight;