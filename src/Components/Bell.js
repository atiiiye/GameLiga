import React, { Component } from 'react';

//import css
import './../css/Bell.css'

//import boostrap
import { NavItem, NavLink, } from 'reactstrap';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';
import BellIcon from '@material-ui/icons/Notifications';

class Bell extends Component {
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
                <NavItem className="nav-item-icon" id="bell" >
                    <NavLink to="/bell" onClick={this.toggle.bind(this)} id="bell">
                        <BellIcon className="image-icon" id="bell" />
                    </NavLink>
                </NavItem>
            </React.Fragment>
        );
    }
}

export default Bell;