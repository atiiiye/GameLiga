import React, { Component } from "react";

//import css
import "./../css/Sidebar.css";
import "./../css/mediaSidebar.css"

//import routes
import { NavLink } from "react-router-dom";

class Sidebar extends Component {


  render() {
    return (
        <div className="sidebar-menu">
          <ul className="list-menu">
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/account">Home</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/myaccount">My account</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/console">Console</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/games">Games</NavLink></li>
            {/* <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/tourny">Tourny</NavLink></li> */}
            {/* <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/liga">Liga</NavLink></li> */}
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/Leader-boards">Leader boards</NavLink></li>
            {/* <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/studi">Studi</NavLink></li> */}
            {/* <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/news">News</NavLink></li> */}
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/tutorial">Tutorial</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/help">Help center</NavLink></li>
            {/* <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/shop">Shop</NavLink></li> */}
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/chat">Chat</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/tvlive">TvLive</NavLink></li>
          {/* {
            isAdmin
              ? */}
              <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/admin" >Admin panel</NavLink></li>
              {/* :
              ''
          } */}
          
            <li className="list-item"><NavLink className="nav-link" activeClassName="selected" to="/logout" exact>Logout</NavLink></li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;
