import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/telegram.css"

//import bootstrap
import { Button, NavItem, NavLink, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Input, FormGroup } from 'reactstrap';

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';
import TelegramIcon from '@material-ui/icons/Telegram';

//import contexts
import { TelegramContext } from './Contexts'

class Telegram extends Component {

    state = {
        dropdown: false,
    }

    toggle = () => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    render() {
        return (
            <React.Fragment>
                <NavItem className="nav-item-icon" id="telegram" >
                    <NavLink to="/telegram" onClick={this.toggle.bind(this)} id="telegram">
                        <Dropdown
                            className="dropdown-messages"
                            isOpen={this.state.dropdown}
                            toggle={this.toggle.bind(this)}
                        >
                            <DropdownToggle className="dropdown-button">
                                <TelegramIcon className="image-icon" id="telegram" />
                            </DropdownToggle>

                            <DropdownMenu
                                className="all-massage"
                            // onClick={!this.toggle.bind(this)}
                            >
                                <DropdownItem className="massage my-1">
                                    <i className="image-icon fas fa-user-circle" id="user"></i>
                                    <p className="user-name">user name</p>
                                </DropdownItem>
                                <DropdownItem className="massage my-1">
                                    <i className="image-icon fas fa-user-circle" id="user"></i>
                                    <p className="user-name">user name</p>
                                </DropdownItem>
                                <DropdownItem className="massage my-1">
                                    <i className="image-icon fas fa-user-circle" id="user"></i>
                                    <p className="user-name">user name</p>
                                </DropdownItem>

                                <DropdownItem className="massage-send-box mb-1 mt-2">
                                    <FormGroup className="telegram-icon">
                                        <Button className="send" type="submit">
                                            <TelegramIcon />
                                        </Button>
                                        <Input
                                            className="massage-input mt-2 mb-1"
                                            type="text"
                                            name="massage"
                                            autoFocus />
                                    </FormGroup>
                                </DropdownItem>

                            </DropdownMenu>

                        </Dropdown>
                    </NavLink>
                </NavItem>


            </React.Fragment>
        )
    }
}

export default Telegram;
