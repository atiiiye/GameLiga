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


//import components
import Wallet from './../Components/Wallet'

class UserHeader extends Component {

    
    state = {
        show: false,
    }

    handleRouting=(e)=>{
        e.preventDefault()
        this.setState({ show: true })
        
    }

    setShow =(status)=>{
        this.setState(()=>{
            return {
                show : status
            }
        })
    }

    render() {
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
                                    < Navbar.Collapse className="collapse-user row part-1" id="collapse-navbar">
                                        <p className="text-muted">user name</p>
                                        <NavLink to="/account" className="nav-link-icon" id="user"><img className="image-icon" id="user" src={UserIcon} alt=""></img></NavLink>
                                        <NavLink to="/ticket" className="nav-link-icon" id="ticket"><img className="image-icon" id="ticket" src={TicketIcon} alt=""></img></NavLink>
                                        {/* <div className="row part-2"> */}
                                        <NavLink to="/bell" className="nav-link-icon" id="bell"><img className="image-icon" id="bell" src={BellIcon} alt=""></img></NavLink>
                                        <NavLink to="/telegram" className="nav-link-icon" id="telegram"><img className="image-icon" id="telegram" src={TelegramIcon} alt=""></img></NavLink>
                                        <NavLink to="/wallet" onClick={this.handleRouting.bind(this)} className="nav-link-icon" id="wallet">
                                            <img className="image-icon" id="wallet" src={WalletIcon} alt=""></img>
                                            <Wallet show={this.state.show} setShow={this.setShow.bind(this)} />
                                        </NavLink>
                                        {/* </div> */}
                                    </Navbar.Collapse>
                                ) :
                                (
                                    <Navbar.Collapse className="collapse-user row part-1 d-none" id="collapse-navbar" />
                                )
                        }
                    </div>

                    <div className="navbar-left">
                        <input type="search" placeholder="search"></input>
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