import React, { Component } from 'react'

//import css
import './../../css/HeaderAdmin.css'

//import images
import Logo from './../../images/logo5.png';

//import boostrap
import { Navbar, NavbarToggler, Collapse } from "reactstrap";

//import routes
import { NavLink } from "react-router-dom";

//import icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';

class HeaderAdmin extends Component {

    state = {
        isOpen: false
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });


    render() {
        return (
            <React.Fragment>
                <div className="container-scroller">
                    <Navbar
                        className="sidebar sidebar-offcanvas p-0"
                        expand="lg"
                        id="sidebar"
                    >
                        <div className="sidebar-brand-wrapper fixed-top">
                            <NavLink className="logo-link" to="/admin">
                                <img className="logo" src={Logo} alt="" />
                            </NavLink>
                            <NavLink className="title-link" to="/admin">
                                <h4 className="UFOGame">
                                    UFO<span>Game</span>
                                </h4>
                                <div className="empty-content"></div>
                            </NavLink>
                        </div>

                        <ul className="nav">
                            <li className="nav-item nav-category">
                                <span className="nav-link">Admin Panel</span>
                            </li>
                            <li className="nav-item menu-items">
                                <div className="nav-link" to="/admin">
                                    <span className="menu-icon">
                                        <i class="fas fa-users-cog"></i>
                                    </span>
                                    <span className="menu-title">Users</span>
                                    <ExpandMoreIcon />
                                </div>
                                <Collapse isOpen={this.state.isOpen}>
                                    <ul className="nav sub-menu"></ul>
                                </Collapse>
                            </li>
                            <li className="nav-item menu-items">
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i class="far fa-newspaper"></i>
                                    </span>
                                    <span className="menu-title">News</span>
                                    <ExpandMoreIcon />
                                </div>
                                <Collapse isOpen={this.state.isOpen}>
                                    <ul className="nav sub-menu"></ul>
                                </Collapse>
                            </li>
                            <li className="nav-item menu-items">
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                    <span className="menu-title">Rules and Conditon</span>
                                    <ExpandMoreIcon />
                                </div>
                                <Collapse isOpen={this.state.isOpen}>
                                    <ul className="nav sub-menu"></ul>
                                </Collapse>
                            </li>
                            <li className="nav-item menu-items" onClick={() => this.toggle()}>
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i class="fas fa-gamepad"></i>
                                    </span>
                                    <span className="menu-title">Games</span>
                                    <ExpandMoreIcon />
                                </div>
                            </li>
                            <li className="nav-item menu-items" onClick={() => this.toggle()}>
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i class="material-icons">&#xe8b8;</i>
                                    </span>
                                    <span className="menu-title">Setting</span>
                                    <ExpandMoreIcon />

                                </div>
                                <Collapse isOpen={this.state.isOpen}>
                                    <ul className="nav sub-menu">
                                        <li className="nav-item">List Games</li>
                                        <li className="nav-item">Add Games</li>
                                        <li className="nav-item">Delete Games</li>
                                    </ul>
                                </Collapse>
                            </li>
                        </ul>

                        {/* <div className="navbar-right"></div>
                        <div className="navbar-left">
                            <div className="hamburger-menu px-0" data-target="#coll-navbar">
                                <NavbarToggler aria-controls="collapse" className="px-0">
                                    <span className="menu navbar-toggler-icon">
                                        <div className="menu-line menu-line-1"></div>
                                        <div className="menu-line menu-line-2"></div>
                                        <div className="menu-line menu-line-3"></div>
                                    </span>
                                </NavbarToggler>
                            </div>
                       </div> */}
                    </Navbar>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderAdmin
