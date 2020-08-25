import React, { Component } from 'react';

//import css
import './../css/reset.css';
import './../css/Ticket.css'

//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem, NavLink, } from 'reactstrap';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';


class Ticket extends Component {
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
                <NavItem className="nav-item-icon" id="ticket" >
                    <NavLink to="/ticket" onClick={this.toggle.bind(this)} id="ticket">
                        <i className="image-icon fas fa-ticket-alt" id="ticket"></i>
                    </NavLink>
                </NavItem>
            </React.Fragment>
        );
    }
}

export default Ticket;