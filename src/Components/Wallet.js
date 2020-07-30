import React, { Component } from 'react'


//import css
import './../css/reset.css';
import './../css/wallet.css'


//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

class Wallet extends Component {

    render() {
        let { modalShow } = this.props;
        return (
            <>
                <Modal
                    className="modal-wallet"
                    show={modalShow}
                    onHide={() => this.props.setShow({ modalShow: false })}
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
                                id="deposit"
                                // value="Submit"
                                onClick={() => this.props.setShow({ modalShow: false })}
                                // type="submit"
                            >
                                DEPOSIT
                            </Button>
                            <Button
                                className="btn-block withDraw"
                                variant="none"
                                id="withDraw"
                                // value="Submit"
                                onClick={() => this.props.setShow({ modalShow: false })}
                                // type="submit"
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