import React, { Component } from 'react'

//import css
import './../css/reset.css';
import './../css/UserHeader.css';
import './../css/mediaUserHeader.css';

//import image
import logo5 from "./../images/logo5.png";
import UserIcon from "./../images/Icon-user.png";
import TicketIcon from "./../images/Icon-ticket.png";
import BellIcon from "./../images/Icon-bell.png";
import TelegramIcon from "./../images/Icon-telegram.png";
import WalletIcon from "./../images/Icon-wallet.png";

//import route
import { NavLink } from "react-router-dom";

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


class UserHeader extends Component {
    render() {
        return (
            <div>
                <Navbar className="user-header" collapseOnSelect expand="md">
                    <div className="hamburger-menu px-0" data-target="#coll-navbar">
                        <Navbar.Toggle aria-controls="collapse" className="px-0">
                            <span className="menu navbar-toggler-icon">
                                <div className="menu-line menu-line-1"></div>
                                <div className="menu-line menu-line-2"></div>
                                <div className="menu-line menu-line-3"></div>
                            </span>
                        </Navbar.Toggle>
                    </div>
                    <div className="navbar-right">
                        <Navbar.Collapse className="" id="coll-navbar">
                            <p className="text-muted">user name</p>
                            <NavLink to="/account" className="nav-link-icon" id="user"><img className="image-icon" id="user" src={UserIcon} alt=""></img></NavLink>
                            <NavLink to="/ticket" className="nav-link-icon" id="ticket"><img className="image-icon" id="ticket" src={TicketIcon} alt=""></img></NavLink>
                        </Navbar.Collapse>
                        <NavLink to="/bell" className="nav-link-icon" id="bell"><img className="image-icon" id="bell" src={BellIcon} alt=""></img></NavLink>
                        <NavLink to="/telegram" className="nav-link-icon" id="telegram"><img className="image-icon" id="telegram" src={TelegramIcon} alt=""></img></NavLink>
                        <NavLink to="/wallet" className="nav-link-icon" id="wallet"><img className="image-icon" id="wallet" src={WalletIcon} alt=""></img></NavLink>
                    </div>
                    <div className="navbar-left">
                        <input type="search" placeholder="search"></input>
                        <div className="empty-content"></div>
                        <h4 className="UFOGame">UFO<span>Game</span></h4>
                        <img className="logo" src={logo5} alt="" />

                    </div>
                </Navbar>
            </div>
        )
    }

}

export default UserHeader;