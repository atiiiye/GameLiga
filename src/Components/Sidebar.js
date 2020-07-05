import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/Sidebar.css";

//import routes
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar-menu">
          <ul className="list-menu">
            <li className="list-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">My account</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Console</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Games</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Liga</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Tourney</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">TvLive</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Leader boards</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Studi</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">News</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Help center</NavLink></li>
            <li className="list-item"><NavLink className="nav-link" to="/">Chat</NavLink></li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
