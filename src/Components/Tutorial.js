import React, { Component } from 'react';

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";

//import css
import './../css/Tutorial.css'


//import bootstrap
import { Card } from "react-bootstrap";

//import packages
import RefreshIcon from "@material-ui/icons/Refresh";


class Tutorial extends Component {
    state = {}
    render() {
        return (
          <React.Fragment>
            <UserHeader />
            <div className="display" style={{ display: "flex" }}>
              <Sidebar />
              <div className="container-fluid Tutorial">
                <Card id="content">
                  <div className="all-view-component">
                    <div className="title">
                      <h2 className="h1">Tutorial</h2>
                    </div>

                    <div className="all-box">
                      <div className="box-card">
                        <div className="box">
                          <div className="refresh-box">
                            <RefreshIcon className="refresh-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="box-card">
                        <div className="box">
                          <div className="refresh-box">
                            <RefreshIcon className="refresh-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="box-card">
                        <div className="box">
                          <div className="refresh-box">
                            <RefreshIcon className="refresh-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="box-card">
                        <div className="box">
                          <div className="refresh-box">
                            <RefreshIcon className="refresh-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="box-card">
                        <div className="box">
                          <div className="refresh-box">
                            <RefreshIcon className="refresh-icon" />
                          </div>
                        </div>
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

export default Tutorial;