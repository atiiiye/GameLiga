import React, { Component } from 'react';

//import css
import './../css/reset.css';
import './../css/UserHeaderRight.css'
import './../css/mediaUserHeaderRight.css'


//import boostrap
import { Navbar } from 'react-bootstrap';

//import components
import Wallet from './Wallet';
import Telegram from './Telegram';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';
import BellIcon from '@material-ui/icons/Notifications';
import TelegramIcon from '@material-ui/icons/Telegram';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';

//import contexts
import { modalContext } from './Contexts';
import { TelegramContext } from './Contexts';
import { usernameContext } from './Contexts'

//import route
import { NavLink } from "react-router-dom";

class UserHeaderRight extends Component {
    state = {
        show: false,
    }

    handlePrevntDefault = (e) => {
        e.preventDefault()
        this.setShow({ show: true })
    }

    handleRoutingWallet = (e) => {
        e.preventDefault()
        this.setShow({ show: true })
    }

    setShow = (status) => {
        this.setState({ show: status })
    }

    // static contextType = usernameContext;

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
                                context => (
                                    <p className="text-muted">
                                        {/* {this.props.history.location.state.username} */}
                                        {console.log(context)}
                                        {context.username}

                                        {console.log('bbbbb')}
                                    </p>
                                )
                            }

                        </usernameContext.Consumer>
                        <NavLink to="/account" className="nav-link-icon" id="user"><i className="image-icon fas fa-user-circle" id="user"></i></NavLink>
                        <NavLink to="/ticket" className="nav-link-icon" id="ticket"><i className="image-icon fas fa-ticket-alt" id="ticket"></i></NavLink>
                        {/* <div className="row part-2"> */}
                        <NavLink to="/bell" className="nav-link-icon" id="bell"><BellIcon className="image-icon" id="bell"></BellIcon></NavLink>

                        <NavLink to="/telegram"
                            onClick={this.handlePrevntDefault.bind(this)}
                            className="nav-link-icon"
                            id="telegram"
                        >
                            <TelegramIcon className="image-icon " id="telegram"></TelegramIcon>

                        </NavLink>

                        <NavLink to="/wallet"
                            onClick={this.handleRoutingWallet.bind(this)}
                            className="nav-link-icon"
                            id="wallet"
                        >
                            <WalletIcon className="image-icon" id="wallet" />
                        </NavLink>
                        {/* </div> */}
                    </Navbar.Collapse>

                    <TelegramContext.Provider value={{
                        dropDownShow: this.state.show,
                        setDropDownShow: this.setShow.bind(this)
                    }}
                    >
                        <Telegram />
                    </TelegramContext.Provider>

                    <modalContext.Provider value={{
                        modalShow: this.state.show,
                        setModalShow: this.setShow.bind(this)
                    }}
                    >
                        <Wallet />
                    </modalContext.Provider>
                    <Navbar.Collapse className="collapse-user row part-1 d-none" id="collapse-navbar" />
                </div>
            </Navbar>
        );
    }
}

export default UserHeaderRight;