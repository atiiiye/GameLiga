import React, { Component } from 'react'


//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import css
import './../css/Shop.css';

//import bootstrap
import { Card } from "react-bootstrap";

class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div className="display" style={{ display: "flex" }} >
                    <Sidebar />
                    <div className="container-fluid Shop">
                        <Card id="content">

                            <div className="all-view-component">
                                <div className="title">
                                    <h2 className="h1">Shop</h2>
                                </div>

                                <div className="all-products">
                                    <div className="product"></div>
                                    <div className="product"></div>
                                    <div className="product"></div>
                                    <div className="product"></div>
                                    <div className="product"></div>
                                    <div className="product"></div>

                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Shop
