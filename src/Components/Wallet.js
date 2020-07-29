import React, { Component } from 'react'


//import css
import './../css/reset.css';
import './../css/wallet.css'


//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

class Wallet extends Component {

    render() {
        let { show } = this.props;
        return (
            <>
                <Modal
                    className="modal-wallet"
                    show={show}
                    onHide={() => this.props.setShow({ show: false })}
                >
                    {console.log(this.props)}

                    <Modal.Body>
                        <Modal.Title className="text-center">
                            <h2>Wallet</h2>
                        </Modal.Title>
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
                                id="submit"
                                value="Submit"
                                onClick={() => this.props.setShow({ show: false })}
                                type="submit"
                            >
                                DEPOSIT
                            </Button>
                            <Button
                                className="btn-block withDraw"
                                variant="none"
                                id="submit"
                                value="Submit"
                                onClick={() => this.props.setShow({ show: false })}
                                type="submit"
                            >
                                WITHDRAW
                            </Button>
                        </div>
                        <div className="modal-wallet-footer">
                            <span className="modal-wallet-footer-text">VIEW YOUR TRANSACTION</span>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )


    }
}


export default Wallet