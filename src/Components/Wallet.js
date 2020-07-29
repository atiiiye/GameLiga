import React, { Component } from 'react'


//import css
import './../css/reset.css';
import './../css/wallet.css'


//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

class Wallet extends Component {

    render() {
        let { show, setShow } = this.props;
        return (
            <>
                <Modal
                    className="modal-wallet"
                    show={show}
                    onHide={() => setShow({ show: false })}
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

                        <div className="wallet-buttons w-75">
                            <Button
                                className="btn-block deposit"
                                variant="none"
                                id="submit"
                                value="Submit"
                                onClick={() => setShow({ show: false })}
                                type="submit"
                            >
                                DEPOSIT
                            </Button>
                            <Button
                                className="btn-block withDraw"
                                variant="none"
                                id="submit"
                                value="Submit"
                                onClick={() => setShow({ show: false })}
                                type="submit"
                            >
                                WITHDRAW
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )


    }
}


export default Wallet