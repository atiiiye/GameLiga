import React, { Component } from 'react'

//import css
import './../css/reset.css';
import './../css/UserHeader.css';
import './../css/mediaUserHeader.css';

//import image
import logo5 from "./../images/logo5.png";
// import UserIcon from "./../images/Icon-user.png";
// import TicketIcon from "./../images/Icon-ticket.png";
// import BellIcon from "./../images/Icon-bell.png";
// import TelegramIcon from "./../images/Icon-telegram.png";
// import WalletIcon from "./../images/Icon-wallet.png";

//import route
import { NavLink, Redirect } from "react-router-dom";

//import boostrap
import { Navbar } from 'react-bootstrap';


//import components
import Wallet from './Wallet';
import Telegram from './Telegram';
import modalContext from './Contexts';
import SearchBox from './SearchBox';
import usernameContext from './Contexts/username';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';
import BellIcon from '@material-ui/icons/Notifications';
import TelegramIcon from '@material-ui/icons/Telegram';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';

class UserHeader extends Component {

    state = {
        show: false,
        searchQuery: '',

    }

    handleRouting = (e) => {
        e.preventDefault()
        this.setState({ show: true })
    }

    setShow = (status) => {
        this.setState({ show: status })
    }

    handleSearch = (query) => {
        this.setState({ searchQuery: query })
    }

    // static contextType = usernameContext;

    render() {
        // console.log(this.props)
        return (
            <div>
                <Navbar className="user-header" expand="md">
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
                        {
                            this.props.show
                                ? (
                                    <>
                                        < Navbar.Collapse className="collapse-user row part-1" id="collapse-navbar">
                                            <p className="text-muted">{this.props.username}</p>
                                            <NavLink to="/account" className="nav-link-icon" id="user"><i className="image-icon fas fa-user-circle" id="user"></i></NavLink>
                                            <NavLink to="/ticket" className="nav-link-icon" id="ticket"><i className="image-icon fas fa-ticket-alt" id="ticket"></i></NavLink>
                                            {/* <div className="row part-2"> */}
                                            <NavLink to="/bell" className="nav-link-icon" id="bell"><BellIcon className="image-icon" id="bell"></BellIcon></NavLink>
                                            <NavLink to="/telegram" onClick={this.handleRouting.bind(this)} className="nav-link-icon" id="telegram">
                                                <TelegramIcon className="image-icon " id="telegram"></TelegramIcon>
                                                <Telegram />
                                            </NavLink>
                                            <NavLink to="/wallet" onClick={this.handleRouting.bind(this)} className="nav-link-icon" id="wallet">
                                                <WalletIcon className="image-icon" id="wallet" />
                                            </NavLink>
                                            {/* </div> */}
                                        </Navbar.Collapse>

                                        <modalContext.Provider value={{
                                            modalShow: this.state.show,
                                            setModalShow: this.setShow.bind(this)
                                        }}
                                        >
                                            <Wallet />
                                        </modalContext.Provider>
                                    </>
                                ) :
                                (
                                    <Navbar.Collapse className="collapse-user row part-1 d-none" id="collapse-navbar" />
                                )
                        }
                    </div>

                    <div className="navbar-left">
                        <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
                        <div className="empty-content"></div>
                        <h4 className="UFOGame">UFO<span>Game</span></h4>
                        <img className="logo" src={logo5} alt="" />

                    </div>
                </Navbar>
            </div >
        )
    }

}

export default UserHeader;