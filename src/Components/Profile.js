import React, { Component } from 'react';

//import css
import './../css/reset.css';
import './../css/Profile.css'

//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem, NavLink, } from 'reactstrap';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';


class Profile extends Component {
    state = {
        show: false,
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <React.Fragment>
                <NavItem className="nav-item-icon" id="user" >
                    <NavLink to="/account" onClick={this.toggle.bind(this)} id="profile">
                        <i className="image-icon fas fa-user-circle" id="user"></i>
                    </NavLink>
                </NavItem>
            </React.Fragment>
        );
    }
}

export default Profile;