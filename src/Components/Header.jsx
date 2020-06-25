
import React, { Component } from 'react'

//import css
import './../css/reset.css'
import './../css/Header.css';
import logo2 from './../images/logo2.png';

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'


export default class Header extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg">
                        <div className="nav-right">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link " id="login" to="/login">LOG IN</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" id="signin" to="/signin">SIGN UP</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button type="button"> */}
                                    <a className="nav-link" to="more">More</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" to="about">About</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" to="news">News</a>
                                    {/* </Button> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Button className=""> */}
                                    <a className="nav-link" to="studi">Studi</a>
                                    {/* </Button> */}
                                </li>
                            </ul>
                        </div>
                        <div className="nav-left">
                            <div className="empty-content"></div>
                            <h4 className="UFOGame">UFO<span>Game</span></h4>
                            <img className="logo" src={logo2}/>
                        </div>
                    </div>
                </div>

            </>
        )

    }
}