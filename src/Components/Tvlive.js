import React, { Component } from "react";

//import css
import "./../css/Tvlive.css";
import "./../css/mediaTvlive.css";

//import bootstrap
import { Button, Card } from "react-bootstrap";

//import images
import Football from "./../images/football.png";

//import components
import Sidebar from "./Sidebar";
import UserHeader from "./UserHeader";
import { NavLink } from "react-router-dom";

class Tvlive extends Component {
  state = {
    stateDisplay: true,
  };

  displayHandler = () => {
    this.setState({ stateDisplay: true });
  };
  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div className="container-fluid FinalResult">
            <Card id="content">
              <div className="parent-content">
                <h2 className="h2 result section-1">1 : 2</h2>
                <div className="section-2">
                  <div className="own-logo">
                    <i className="user-team-logo fas fa-user-circle" />
                    <div className="result-win">
                      <span className="">Win</span>
                      <div className="color-box"></div>
                    </div>
                  </div>
                  <div className="football">
                    <img alt="" src={Football} className="football-field" />
                  </div>
                  <div className="other-logo">
                    <i className="user-team-logo fas fa-user-circle" />
                    <div className="result-lose">
                      <div className="color-box"></div>
                      <span className="">Lose</span>
                    </div>
                  </div>
                </div>
                <div className="section-3">
                  <NavLink className="refree-link" to="/help">
                    <Button className="refree-btn" type="btn">
                      Refree
                    </Button>
                  </NavLink>
                  <div className="box"></div>
                </div>
                <div className="live-content section-4">
                  <p className="text-live">Live :</p>
                  <div className="live"></div>
                </div>
              </div>
              <div className="empty-square"></div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tvlive;
