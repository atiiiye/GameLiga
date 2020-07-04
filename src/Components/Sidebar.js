import React, { Component }from 'react';

//import css
import './../css/reset.css';
import './../css/sidebar.css'


//import routes
import { NavLink } from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
            <>
            <div className="sidebar-menu">
                <ul className="list-menu">
                    <li className="list-item">Home</li>
                    <li className="list-item">My account</li>
                    <li className="list-item">Console</li>
                    <li className="list-item">Games</li>
                    <li className="list-item">Liga</li>
                    <li className="list-item">Tourney</li>
                    <li className="list-item">TvLive</li>
                    <li className="list-item">Leader boards</li>
                    <li className="list-item">Studi</li>
                    <li className="list-item">News</li>
                    <li className="list-item">Help center</li>
                    <li className="list-item">Chat</li>
                </ul>
            </div>
            </>
        )
    }
}

export default Sidebar