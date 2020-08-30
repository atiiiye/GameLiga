import React, { Component } from 'react';

//import css
import './../css/UserHeaderRight.css'
import './../css/mediaUserHeaderRight.css'

//import boostrap
import { Collapse, Navbar, NavbarToggler, } from 'reactstrap'

//import components
import Wallet from './Wallet';
import Telegram from './Telegram';
import Bell from './Bell';
import Ticket from './Ticket';
import Profile from './Profile';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';

//import contexts
import { modalContext } from './Contexts';
import { TelegramContext } from './Contexts';
import { usernameContext } from './Contexts';
import { LoginContext } from './Contexts';


class UserHeaderRight extends Component {
    state = {
        isOpen: false
    }

    toggle = () => this.setState(!isOpen);

    /* {this.props.history.location.state.username} */

    componentDidUpdate() {
        // return (
        //     <usernameContext.Consumer>
        //         {
        //             value => (value.loginUsername)
        //         }
        //     </usernameContext.Consumer>
        // )
    }

    render() {
        // console.log(this.context)
        return (

            <Navbar className="user-header-right" expand="md">
                <div className="hamburger-menu px-0" data-target="#collapse-navbar">
                    <NavbarToggler onClick={this.toggle.bind(this)} className="px-0">
                        <span className="menu navbar-toggler-icon">
                            <div className="menu-line menu-line-1"></div>
                            <div className="menu-line menu-line-2"></div>
                            <div className="menu-line menu-line-3"></div>
                        </span>
                    </NavbarToggler>
                </div>

                <div className="navbar-right" collapseonselect="true">
                    < Collapse isOpen={this.state.isOpen} navbar className="collapse-user row part-1" id="collapse-navbar">
                        <usernameContext.Consumer>
                            {
                                value => (
                                    <p className="text-muted">
                                        {console.log(value.loginUsername)}
                                        {value.loginUsername || value.signinUsername}
                                    </p>
                                )
                            }
                        </usernameContext.Consumer>

                        <Profile />
                        <Ticket />
                        {/* <div className="row part-2"> */}
                        <Bell />
                        <Telegram />
                        <Wallet />
                        {/* </div> */}
                    </Collapse >

                </div>
            </Navbar>

        );
    }
}

export default UserHeaderRight;