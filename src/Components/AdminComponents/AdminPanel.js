import React, { Component } from "react";

//import css
import "./../../css/AdminPanel.css";

//import components
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export class AdminPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-scroller">
          <AdminSidebar />
          <div className="container-fluid page-body-wrapper">
            <AdminHeader />
          </div>
          {/* <div
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "blue",
          }}
        ></div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPanel;
