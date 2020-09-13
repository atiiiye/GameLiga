import React, { Component } from "react";

//import components
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";
import Account from "./Components/Account";
import FinalResult from "./Components/FinalResult";
import Games from "./Components/Games";
import Tourny from "./Components/Tourny";
import Liga from "./Components/Liga";
import Console from "./Components/Console";
import LeaderBoards from "./Components/LeaderBoards";
import Chat from "./Components/Chat";
import Tutorial from "./Components/Tutorial";
import Shop from "./Components/Shop";

//import Routes
import PrivateRoute from "./Components/Routes/PrivateRoute ";
import PublicRoute from "./Components/Routes/PublicRoute";
import { Route, Switch } from "react-router-dom";

// import packages
import "@fortawesome/fontawesome-free/css/all.min.css";
import { connect } from "react-redux";

import UserContextes from "./Components/Contexts/UserContextes";
//import utils

class App extends Component {
  state = {
    errors: {
      firstName: "",
      lastName: "",
      nickName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      promotional: "",
      generate: "",
      referred: "",
    },
    firstName: "",
    lastName: "",
    nickName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    promotional: "",
    referred: "",
    generate: "",
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Game Liga";
  }

  render() {
    return (
      <UserContextes
        // username={this.state.username}
        // password={this.state.password}
        // firstName={this.state.firstName}
        // lastName={this.state.lastName}
        // nickName={this.state.nickName}
        // email={this.state.email}
        // confirmPassword={this.state.confirmPassword}
        // phone={this.state.phone}
        // promotional={this.state.promotional}
        // referred={this.state.referred}
        // generate={this.state.generate}
        // errors={this.state.errors}
      >
        <Switch>
          <PublicRoute exact restricted={false} path="/" component={Home} />

          <PublicRoute
            exact
            restricted={false}
            path="/signup"
            component={SignUp}
          />

          <PrivateRoute exact path="/account" component={Account} />

          <PrivateRoute exact path="/tvlive" component={FinalResult} />

          <PrivateRoute exact path="/games" component={Games} />

          <PrivateRoute exact path="/tourny" component={Tourny} />

          <PrivateRoute exact path="/tutorial" component={Tutorial} />

          <PrivateRoute exact path="/leader-boards" component={LeaderBoards} />

          <PrivateRoute exact path="/console" component={Console} />

          <PrivateRoute exact path="/liga" component={Liga} />

          <PrivateRoute exact path="/chat" component={Chat} />

          <PrivateRoute exact path="/shop" component={Shop} />

          <PrivateRoute exact path="/404" component={NotFound} />

          <PrivateRoute exact path="" component={NotFound} />
        </Switch>
      </UserContextes>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     username: state.username,
//   };
// };

export default App;
