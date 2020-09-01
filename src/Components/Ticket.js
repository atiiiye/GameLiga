import React, { Component } from 'react';

//import css
import './../css/Ticket.css'

//import boostrap
import { NavItem, NavLink, } from 'reactstrap';


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