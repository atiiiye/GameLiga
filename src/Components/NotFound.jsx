
import React, { Component } from "react";

//import css
import './../css/NotFound.css';
import './../css/mediaNotFound.css';


//import bootstrap
import { Button } from "react-bootstrap";

//import routes
import { NavLink } from "react-router-dom";


class NotFound extends Component {
    render() {
        return (
            <div className="container not-found">
                <span className="oops">404</span>
                <h1 className="h1">
                    Page Not Found
                </h1>
                <Button variant="none"><NavLink className="nav-link" to="/">Back to Home Page</NavLink></Button>
            </div>
        )


    }
}

export default NotFound;