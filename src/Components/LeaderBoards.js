import React, { Component } from 'react';


//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css"

//import bootstrap
import { Card } from "react-bootstrap";
import { Table } from 'reactstrap';

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';

class LeaderBoards extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <UserHeader />
                <div className="display" style={{ display: "flex" }} >
                    <Sidebar />
                    <div className="container-fluid leader-boards">
                        <Card id="content">
                            <div className="all-view-component">
                                <div className="title">
                                    <h1 className="h1">Leader boards</h1>
                                    <p className="text-muted">
                                        View the weekly, monthly and all-time ranking for XP, earning and trophies
                                    </p>
                                </div>
                                <div className="buttons-top">
                                    <div className="all-button xp">XP</div>
                                    <div className="all-button console">CONSOLE</div>
                                    <div className="all-button fifa20">FIFA20</div>
                                </div>

                                <div className="all-view-table">
                                    <div className="title-table">
                                        <div className="section-1 user-info col-md-5">
                                            <i className="image-icon fas fa-user-circle" id="user"></i>
                                            <p className="user-name">User name</p>
                                        </div>
                                        <div className="section-2 col-md-5">
                                            <span className="section-2-1" >0</span>
                                            <span className="section-2-2" >0</span>
                                            <span className="section-2-3" >0</span>

                                        </div>
                                        <div className="section-3 col-md-2">
                                            <span className="section-3-1">0</span>

                                        </div>

                                    </div>
                                    <div className="table-content">
                                        <div className="scroll-bar"></div>
                                        <Table className="all-table" responsive hover striped >
                                            <thead className="headers-table">
                                                <tr className="header-table line-1">
                                                    <div className="header-table-part-1">
                                                        <th className="header-table-title px-0">All Times</th>
                                                        <th className="header-table-title px-0">Last 30 Days</th>
                                                        <th className="header-table-title px-0">Last 7 Days</th>
                                                    </div>
                                                    <div className="header-table-part-2">
                                                        <th className="header-table-title">Showing Top100</th>
                                                    </div>

                                                </tr>
                                                <tr className="header-table line-2">
                                                    <div className="header-table-part-all">
                                                        <th className="header-table-title">Rank</th>
                                                        <th className="header-table-title">XP</th>
                                                        <th className="header-table-title">Earnings</th>
                                                        <th className="header-table-title">Earnings</th>
                                                        <th className="header-table-title">Gold Trophies</th>
                                                    </div>

                                                </tr>
                                            </thead>
                                            <tbody className="bodys-table">
                                                <tr className="body-table">
                                                    <td className="body-table-content"><i class='fas fa-medal'></i></td>
                                                    <td className="body-table-content">#</td>
                                                    <td className="body-table-content"><i className="image-icon fas fa-user-circle" id="user"></i></td>
                                                    <td className="body-table-content">user name</td>
                                                    <td className="body-table-content">600</td>
                                                    <td className="body-table-content">100p</td>
                                                    <td className="body-table-content">0</td>
                                                    <td className="body-table-content">0</td>
                                                </tr>
                                                <tr className="body-table">
                                                    <td className="body-table-content"><i class='fas fa-medal'></i></td>
                                                    <td className="body-table-content">#</td>
                                                    <td className="body-table-content"><i className="image-icon fas fa-user-circle" id="user"></i></td>
                                                    <td className="body-table-content">user name</td>
                                                    <td className="body-table-content">600</td>
                                                    <td className="body-table-content">100p</td>
                                                    <td className="body-table-content">0</td>
                                                    <td className="body-table-content">0</td>
                                                </tr>
                                                <tr className="body-table">
                                                    <td className="body-table-content"><i class='fas fa-medal'></i></td>
                                                    <td className="body-table-content">#</td>
                                                    <td className="body-table-content"><i className="image-icon fas fa-user-circle" id="user"></i></td>
                                                    <td className="body-table-content">user name</td>
                                                    <td className="body-table-content">600</td>
                                                    <td className="body-table-content">100p</td>
                                                    <td className="body-table-content">0</td>
                                                    <td className="body-table-content">0</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>


                        </Card>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default LeaderBoards;