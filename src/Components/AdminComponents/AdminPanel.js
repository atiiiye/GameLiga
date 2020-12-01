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
        {/* <div className="container-scroller">
          <AdminSidebar /> */}
        <div className="container-fluid page-body-wrapper">
          <AdminHeader />
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default AdminPanel;
