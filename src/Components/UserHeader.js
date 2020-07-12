import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/UserHeader.css'

//import image
import logo5 from "./../images/logo5.png";


//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


class UserHeader extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md">
                    <div className="navbar-right">
                        {/* <p className="text-muted">user name</p> */}
                    </div>
                    <div className="navbar-left">
                        <input type="search" placeholder="search"></input>
                        <div className="empty-content"></div>
                        <h4 className="UFOGame">UFO<span>Game</span></h4>
                        <img className="logo" src={logo5} alt="" />

                    </div>
                </Navbar>
            </div>
        )
    }

}

export default UserHeader;