import React, { Component } from "react";

//import css
import "./../css/reset.css";

//import bootstrap
import { Dropdown, Modal } from "react-bootstrap";

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';
import TelegramIcon from '@material-ui/icons/Telegram';

//import contexts
import { TelegramContext } from './Contexts'

class Telegram extends Component {
    static contextType = TelegramContext;

    render() {
        return (
            <React.Fragment>
                <Modal
                    className="main-content-box"
                    show={this.context.dropDownShow}
                    onHide={() => this.context.setDropDownShow(false)}
                >
                    <Dropdown className="dropDown-messages">
                        <Dropdown.Menu>
                            <Dropdown.Item href="">
                                <i className="image-icon fas fa-user-circle" id="user"></i>
                                <TelegramIcon />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Modal>

            </React.Fragment>
        )
    }
}

export default Telegram;
