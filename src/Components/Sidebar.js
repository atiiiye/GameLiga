import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/sidebar.css";

//import routes
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar-menu">
          <ul className="list-menu">
            <li className="list-item"><NavLink>Home</NavLink></li>
            <li className="list-item"><NavLink>My account</NavLink></li>
            <li className="list-item"><NavLink>Console</NavLink></li>
            <li className="list-item"><NavLink>Games</NavLink></li>
            <li className="list-item"><NavLink>Liga</NavLink></li>
            <li className="list-item"><NavLink>Tourney</NavLink></li>
            <li className="list-item"><NavLink>TvLive</NavLink></li>
            <li className="list-item"><NavLink>Leader boards</NavLink></li>
            <li className="list-item"><NavLink>Studi</NavLink></li>
            <li className="list-item"><NavLink>News</NavLink></li>
            <li className="list-item"><NavLink>Help center</NavLink></li>
            <li className="list-item"><NavLink>Chat</NavLink></li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
