import React, { Component } from 'react'


//import css
import './../css/reset.css';
import './../css/wallet.css'


//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, NavItem, NavLink, } from 'reactstrap';

//import contexts
import { modalContext } from './Contexts'

//import packages
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';

class Wallet extends Component {

    static contextType = modalContext;

    state = {
        modal: false,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {

        return (
            <React.Fragment>
                <NavItem className="nav-item-icon" id="wallet">
                    <NavLink to="/wallet" id="wallet" onClick={this.toggle.bind(this)}>
                        <WalletIcon className="image-icon" id="wallet" />
                    </NavLink>
                </NavItem>

                <Modal
                    className="modal-wallet"
                    isOpen={this.state.modal}
                    toggle={this.toggle.bind(this)}
                >
                    <ModalBody>
                        <ModalHeader className="text-center">
                            <h2>Wallet</h2>
                        </ModalHeader>
                        <div className="content-wallet">
                            <div className="content-right">
                                <span className="content-right-span">Available</span>
                            </div>
                            <div className="content-left">
                                <span className="content-left-span">Balance</span>
                            </div>
                        </div>
                        <div className="wallet-buttons">
                            <Button
                                className="btn-block deposit"
                                variant="none"
                                id="deposit"
                                onClick={this.toggle.bind(this)}
                                type="button"
                                data-dismiss="modal"
                            >
                                DEPOSIT
                            </Button>
                            <Button
                                className="btn-block withDraw"
                                variant="none"
                                id="withDraw"
                                onClick={this.toggle.bind(this)}
                                data-dismiss="modal"
                                type="button"
                            >
                                WITHDRAW
                            </Button>
                        </div>
                        <div className="modal-wallet-footer">
                            <span className="modal-wallet-footer-text">VIEW YOUR TRANSACTION</span>
                        </div>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        )


    }
}


export default Wallet