import React, { Component } from 'react'

//import css
import './../css/reset.css';
import './../css/UserHeader.css';
import './../css/mediaUserHeader.css';



//import boostrap
import { Navbar } from 'react-bootstrap';


//import components
import UserHeaderLeft from './UserHeaderLeft'
import UserHeaderRight from './UserHeaderRight';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';

class UserHeader extends Component {

    state = {}


    render() {
        // console.log(this.props.history.location.state.username)
        return (
            <div>
                <Navbar className="user-header" expand="md" >
                    <UserHeaderRight />
                    <UserHeaderLeft />
                </Navbar>
            </div >
        )
    }

}

export default UserHeader;