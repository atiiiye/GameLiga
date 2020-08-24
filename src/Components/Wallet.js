import React, { Component } from 'react'


//import css
import './../css/reset.css';
import './../css/wallet.css'


//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, NavItem, NavLink, } from 'reactstrap';

//import contexts
import { modalContext } from './Contexts'

//import packages
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';

class Wallet extends Component {

    static contextType = modalContext;

    state = {
        modal: false,
        show: false,
    }

    constructor(props) {
        super(props);


        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            modal: this.state.modal
        })
    }

    render() {

        // let { modalShow ,setModalShow } = this.props;
        // console.log(this.context);

        return (
            <React.Fragment>
                <NavLink className="nav-link-modal">

                    <Modal
                        className="modal-wallet"

                        show={this.state.modal}
                        onHide={() => this.setState(false)}
                    // onHide={this.toggle}
                    // isOpen={this.state.modal}
                    // toggle={() => this.toggleModal("exampleModal")}
                    >
                        {/* {console.log(this.props)} */}

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
                                    // value="Submit"
                                    // onClick={() => this.context.setModalShow(false)}
                                    onClick={() => this.setState(false)}
                                    type="button"
                                    data-dismiss="modal"
                                >
                                    DEPOSIT
                            </Button>
                                <Button
                                    className="btn-block withDraw"
                                    variant="none"
                                    id="withDraw"
                                    // value="Submit"
                                    // onClick={() => this.context.setModalShow(false)}
                                    onClick={() => this.setState(false)}
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
                </NavLink>

            </React.Fragment>
        )


    }
}


export default Wallet