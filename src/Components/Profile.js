import React, { Component } from 'react';

//import css
import './../css/Profile.css'

//import boostrap
import { NavItem, NavLink, } from 'reactstrap';


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
                        <i className="image-icon fas fa-user-circle" id="user" />
                    </NavLink>
                </NavItem>
            </React.Fragment>
        );
    }
}

export default Profile;