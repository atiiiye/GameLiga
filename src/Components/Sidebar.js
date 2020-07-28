import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/Sidebar.css";
import "./../css/mediaSidebar.css"

//import routes
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar-menu">
          <ul className="list-menu">
            <li className="list-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/account">My account</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/console">Console</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/games">Games</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/liga">Liga</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/tourney">Tourny</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/tvlive">TvLive</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/Leader-boards">Leader boards</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/studi">Studi</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/news">News</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/help">Help center</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/chat">Chat</NavLink></li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
