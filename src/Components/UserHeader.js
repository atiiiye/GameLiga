import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/UserHeader.css'

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
                <Navbar className="user-header" expand="md">
                    <div className="navbar-right">
                        <p className="text-muted">user name</p>
                        <NavLink to="/account" className="nav-link-icon" id="user"><img className="image-icon" id="user" src={UserIcon} alt=""></img></NavLink>
                        <NavLink to="/ticket" className="nav-link-icon" id="ticket"><img className="image-icon" id="ticket" src={TicketIcon} alt=""></img></NavLink>
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