import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/Header2.css';

//import image
import logo2 from './../images/logo2.png';

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


class UserHeader extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Navbar expand="md">
                        <div className="nav-right">
                            {/* <p className="text-muted">user name</p> */}
                            
                        </div>
                        <div className="nav-left">
                            <input type="search" placeholder="search"></input>
                            <div className="empty-content"></div>
                            <h4 className="UFOGame">UFO<span>Game</span></h4>
                            <img className="logo" src={logo2} alt="" />

                        </div>


                    </Navbar>
                </div>
            </div>
        )
    }

}

export default UserHeader;