import React, { Component } from "react";

//import context
import { Context } from "./index";

class AdminContextes extends Component {
  state = {
    isOpen: true,
    status: "Closed",
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  onEntering = () => {
    let pageBodyWrapper = document.querySelector(".page-body-wrapper");
    pageBodyWrapper.style.width = "80%";

    // console.log("Opening...");
  };

  onEntered = () => {
    let pageBodyWrapper = document.querySelector(".page-body-wrapper");
    pageBodyWrapper.style.width = "80%";
    // console.log("Opened...");
  };

  onExiting = () => {
    let pageBodyWrapper = document.querySelector(".page-body-wrapper");
    pageBodyWrapper.style.width = "100%";

    // console.log("Closing...");
  };

  onExited = () => {
    let pageBodyWrapper = document.querySelector(".page-body-wrapper");
    pageBodyWrapper.style.width = "100%";

    // console.log("Closed...");
  };
  render() {
    return (
      <Context.Provider
        value={{
          isOpen: this.state.isOpen,
          status: this.state.status,
          toggle: this.toggle.bind(this),
          onEntering: this.onEntering.bind(this),
          onEntered: this.onEntered.bind(this),
          onExiting: this.onExiting.bind(this),
          onExited: this.onExited.bind(this),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AdminContextes;
