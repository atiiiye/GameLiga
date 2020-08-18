import React, { Component } from 'react'

//import packages
import { NavLink } from "react-router-dom";



class Navigation extends Component {
    state = {}
    render() {
        return (
            <div className="tabs">
                <NavLink
                    to="/Leader-boards"
                    activeClassName="selected"
                    className="one-av-one tab"
                    data-content="one-av-one"
                >
                    One av One
                </NavLink>
                <NavLink
                    to="/tourny"
                    activeClassName="selected"
                    className="tourny tab"
                    data-content="tourny"
                >
                    Tourny
                </NavLink>
                <NavLink
                    to="/liga"
                    activeClassName="selected"
                    className="liga tab"
                    data-content="liga"
                >
                    Liga
                </NavLink>
            </div>
        );
    }
}

export default Navigation;