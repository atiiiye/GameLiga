import React, { Component } from "react";

//import components
import UserHeader from "./UserHeader";
import Sidebar from "./Sidebar";

export class News extends Component {
  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }}>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default News;
