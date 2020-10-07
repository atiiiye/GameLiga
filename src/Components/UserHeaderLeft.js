import React, { Component } from 'react';

//import css
import './../css/UserHeaderLeft.css'
import './../css/mediaUserHeaderLeft.css'


//import image
import logo5 from "./../images/logo5.png";

//import components
import SearchBox from './SearchBox';

//import boostrap
import { Navbar } from 'react-bootstrap';


class UserHeaderLeft extends Component {
    state = {
        searchQuery: '',
    }

    handleSearch = (query) => {
        this.setState({ searchQuery: query })
    }

    render() {
        return (
            <Navbar className="user-header-left">
                <div className="navbar-left">
                    <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
                    <div className="empty-content"></div>
                    <h4 className="UFOGame">UFO<span>Game</span></h4>
                    <img className="logo" src={logo5} alt="" />

                </div>
            </Navbar>
        );
    }
}

export default UserHeaderLeft;