import React, { Component } from 'react'

//import css
import './../../css/HeaderAdmin.css';
import './../../css/mediaHeaderAdmin.css';
import './../../css/AdminSidebar.css';

//import images
import Logo from './../../images/logo5.png';

//import boostrap
import { Navbar, UncontrolledCollapse, Button, Collapse } from "reactstrap";

//import routes
import { NavLink } from "react-router-dom";

//import icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

//import components
import SearchBox from './../SearchBox';

class HeaderAdmin extends Component {
    state = {
        isOpen: false,
    };

    // componentDidUpdate() {
    //     const listItems = document.querySelectorAll('li.nav-item.menu-items');
    //     // console.log(listItems)
    //     listItems.forEach(listItem => listItem.addEventListener('click', () => {
    //         console.log(listItem.children.children)

    //     }))
    // }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <React.Fragment>
                <div className="container-scroller">
                    <Collapse
                        toggler="#sidebar"
                        className="sidebar navbar sidebar-offcanvas p-0 "
                        expand="lg"
                        isOpen={this.state.isOpen}

                    // id="sidebar"
                    >
                        <div className="sidebar-brand-wrapper fixed-top">
                            <NavLink className="logo-link" to="/admin">
                                <img className="logo" src={Logo} alt="" />
                            </NavLink>
                            <NavLink className="title-link" to="/admin">
                                <h4 className="UFOGame">
                                    UFO<span>Game</span>
                                </h4>
                                {/* <div className="empty-content"></div> */}
                            </NavLink>
                        </div>
                        <ul className="nav">
                            <li className="nav-item nav-category">
                                <span className="nav-link">Admin Panel</span>
                            </li>
                            <li className="nav-item menu-items" id="toggler1">
                                <div className="nav-link" to="/admin">
                                    <span className="menu-icon">
                                        <i className="fas fa-users-cog"></i>
                                    </span>
                                    <span className="menu-title">Users</span>
                                    <ExpandMoreIcon />
                                </div>
                                <UncontrolledCollapse toggler="#toggler1" className="sub-collapse">
                                    <ul className="nav sub-menu">
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">List Users</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Add User</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Delete User</NavLink></li>
                                    </ul>
                                </UncontrolledCollapse>
                            </li>
                            <li className="nav-item menu-items" id="toggler2">
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i className="far fa-newspaper"></i>
                                    </span>
                                    <span className="menu-title">News</span>
                                    <ExpandMoreIcon />
                                </div>
                                <UncontrolledCollapse toggler="#toggler2" className="sub-collapse">
                                    <ul className="nav sub-menu">
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">All News</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/add-news">Add News</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Edit News</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Delete News</NavLink></li>
                                    </ul>
                                </UncontrolledCollapse>
                            </li>
                            <li className="nav-item menu-items" id="toggler3">
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i className="fas fa-edit"></i>
                                    </span>
                                    <span className="menu-title">Rules and Conditon</span>
                                    <ExpandMoreIcon />
                                </div>
                                <UncontrolledCollapse toggler="#toggler3" className="sub-collapse">
                                    <ul className="nav sub-menu">
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Rules</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Edit Rules</NavLink></li>
                                    </ul>
                                </UncontrolledCollapse>
                            </li>
                            <li className="nav-item menu-items" id="toggler4">
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i className="fas fa-gamepad"></i>
                                    </span>
                                    <span className="menu-title">Games</span>
                                    <ExpandMoreIcon />
                                </div>
                                <UncontrolledCollapse toggler="#toggler4" className="sub-collapse">
                                    <ul className="nav sub-menu">
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">List Games</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Add Games</NavLink></li>
                                        <li className="nav-item"><NavLink className="nav-link" to="/admin">Delete Games</NavLink></li>
                                    </ul>
                                </UncontrolledCollapse>
                            </li>
                            <li className="nav-item menu-items" id="toggler5">
                                <div className="nav-link">
                                    <span className="menu-icon">
                                        <i className="material-icons">&#xe8b8;</i>
                                    </span>
                                    <span className="menu-title">Setting</span>
                                    <ExpandMoreIcon />
                                </div>
                                <UncontrolledCollapse toggler="#toggler5" className="sub-collapse">
                                    <ul className="nav sub-menu">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/admin">Edie profile</NavLink>
                                        </li>
                                    </ul>
                                </UncontrolledCollapse>
                            </li>
                        </ul>
                    </Collapse>

                    <div className="container-fluid page-body-wrapper">
                        <Navbar className="fixed-top main-nav">
                            <div className="navbar-menu-wrapper">
                                <div className="navbar-menu-wrapper-right">
                                    <i className="image-icon fas fa-user-circle" id="user" />
                                    <p className="text-center">Admin User</p>

                                </div>
                                <div className="navbar-menu-wrapper-left">
                                    <Button className="navbar-toggler" type="button">

                                        <MenuIcon className="hamburger-menu" id="sidebar" onClick={() => this.toggle()} />
                                    </Button>
                                    <SearchBox />
                                </div>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderAdmin
