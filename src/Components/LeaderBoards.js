import React, { Component } from 'react';


//import css
import "./../css/LeaderBoards.css"

//import bootstrap
import { Card } from "react-bootstrap";
import { Table } from 'reactstrap';

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import packages
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollArea from 'react-scrollbar';
// import ReactScrollbar from 'react-scrollbar-js';

//import utils
import { isLogin } from '../utils';

class LeaderBoards extends Component {
  state = {};


  render() {;

    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }}>
          <Sidebar />
          <div className="container-fluid leader-boards">
            <Card id="content">
              <div className="all-view-component">
                <div className="title">
                  <h2 className="h1">Leader boards</h2>
                  <p className="text-muted">
                    View the weekly, monthly and all-time ranking for XP,
                    earning and trophies
                  </p>
                </div>
                <div className="buttons-top">
                  <div className="all-button xp">XP</div>
                  <div className="all-button console">CONSOLE</div>
                  <div className="all-button fifa20">FIFA20</div>
                </div>
                <ScrollArea
                  speed={0.9}
                  className="area"
                  contentClassName="content"
                  // horizontal={false}
                  vertical={true}
                >
                  <div className="all-view-table">
                    <div className="title-table">
                      <div className="section-1 user-info col-md-5">
                        <i
                          className="image-icon fas fa-user-circle"
                          id="user"
                        ></i>
                        <p className="user-name">{isLogin().Username}</p>
                      </div>
                      <div className="section-2 col-md-5">
                        <span className="section-2-1">0</span>
                        <span className="section-2-2">0</span>
                        <span className="section-2-3">0</span>
                      </div>
                      <div className="section-3 col-md-2">
                        <span className="section-3-1">0</span>
                      </div>
                    </div>
                    <div className="scroll-table">
                      {/* <div className="scroll-bar"></div> */}
                      <div className="table-content">
                        <Table
                          className="all-table"
                          responsive
                          hover
                          striped
                          borderless
                        >
                          <thead className="headers-table">
                            <tr className="header-table line-1">
                              <div className="header-table-part-1">
                                <th className="header-table-title">
                                  All Times
                                </th>
                                <th className="header-table-title px-0">
                                  Last 30 Days
                                </th>
                                <th className="header-table-title px-0">
                                  Last 7 Days
                                </th>
                              </div>
                              <div className="header-table-part-2">
                                <th className="header-table-title">
                                  Showing Top100
                                </th>
                              </div>
                            </tr>
                            <tr className="header-table line-2">
                              <div className="header-table-part-all">
                                <th className="header-table-title ">Rank</th>
                                <th className="header-table-title px-0">XP</th>
                                <th className="header-table-title px-0">
                                  Earnings
                                </th>
                                <th className="header-table-title px-0">
                                  Earnings
                                </th>
                                <th className="header-table-title px-0">
                                  Gold Trophies
                                </th>
                              </div>
                            </tr>
                          </thead>
                          <tbody className="bodys-table">
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">1</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">{isLogin().Username}</div>
                                </div>
                              </td>
                              <td className="body-table-content">600</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">2</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">600</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">555</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">3</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">600</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">100</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">4</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">600</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">5</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">700</td>
                              <td className="body-table-content">870p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">6</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">Martin 777</div>
                                </div>
                              </td>
                              <td className="body-table-content">700</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">7</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">600</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">8</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">600</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">200</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">600</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                            <tr className="body-table">
                              <td className="body-table-content" colspan="4">
                                <div className="table-data">
                                  <i class="fas fa-medal" />
                                  <div className="number">200</div>
                                  <i
                                    className="image-icon fas fa-user-circle"
                                    id="user"
                                  />
                                  <div className="user-name">user name</div>
                                </div>
                              </td>
                              <td className="body-table-content">6570</td>
                              <td className="body-table-content">100p</td>
                              <td className="body-table-content">0</td>
                              <td className="body-table-content">0</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LeaderBoards;