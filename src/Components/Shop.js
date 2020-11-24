import React, { Component } from 'react'


//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import css
import './../css/Shop.css';
import './../css/mediaShop.css';

//import bootstrap
import { Card } from "react-bootstrap";
import PageTitle from './PageTitle';

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
                                <PageTitle title={"Shop"} />

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
