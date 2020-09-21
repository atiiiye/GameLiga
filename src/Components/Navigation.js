import React, { Component } from 'react';

//import css
import "./../css/navigation.css";
import "./../css/mediaNavigation.css";

//import packages
import { NavLink } from "react-router-dom";



class Navigation extends Component {
    state = {}
    render() {
        return (
            <div className="tabs">
                <NavLink
                    to="/games"
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