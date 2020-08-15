import React, { Component } from "react";

//import css
import "./../css/reset.css";

//import bootstrap
import { Dropdown } from "react-bootstrap";

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';
import TelegramIcon from '@material-ui/icons/Telegram';

class Telegram extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-content-box">
                    <Dropdown>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">
                                <i className="image-icon fas fa-user-circle" id="user"></i>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </React.Fragment>
        )
    }
}

export default Telegram;
