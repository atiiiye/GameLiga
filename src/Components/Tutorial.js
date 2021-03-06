import React, { Component } from "react";

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";
import PageTitle from "./PageTitle";

//import css
import "./../css/Tutorial.css";
import "./../css/mediaTutorial.css";

//import bootstrap
import { Card } from "react-bootstrap";

//import packages
import RefreshIcon from "@material-ui/icons/Refresh";

class Tutorial extends Component {
  state = {};

  componentDidMount() {
    this.handleBorderCards();
  }

  handleBorderCards = () => {
    let boxCards = document.querySelectorAll('div.box-card')
    if (boxCards.length % 2 == 0) {
      boxCards[boxCards.length - 2].style.borderBottom = 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }}>
          <Sidebar />
          <div className="container-fluid Tutorial">
            <Card id="content">
              <div className="all-view-component">
                <PageTitle title={"Tutorial"} />
                <div className="all-box">
                  <div className="group-box">
                    <div className="box-card">
                      <div className="box">
                        <div className="refresh-box">
                          <RefreshIcon className="refresh-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-box">
                    <div className="box-card">
                      <div className="box">
                        <div className="refresh-box">
                          <RefreshIcon className="refresh-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-box">
                    <div className="box-card">
                      <div className="box">
                        <div className="refresh-box">
                          <RefreshIcon className="refresh-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-box">
                    <div className="box-card">
                      <div className="box">
                        <div className="refresh-box">
                          <RefreshIcon className="refresh-icon" />
                        </div>
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
