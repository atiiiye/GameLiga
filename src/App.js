import React, { Component } from "react";

//import components
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";
import Account from "./Components/Account";
import Tvlive from "./Components/Tvlive";
import Games from "./Components/Games";
import Tourny from "./Components/Tourny";
import Liga from "./Components/Liga";
import Console from "./Components/Console";
import LeaderBoards from "./Components/LeaderBoards";
import Chat from "./Components/Chat";
import Tutorial from "./Components/Tutorial";
import Shop from "./Components/Shop";
import News from "./Components/News";
import Logout from "./Components/Logout";

import LayoutAdmin from "./AdminComponents/LayoutAdmin";

//import Routes
import PrivateRoute from "./Routes/PrivateRoute ";
import PublicRoute from "./Routes/PublicRoute";
import { Redirect, Route, Switch } from "react-router-dom";

// import packages
import "@fortawesome/fontawesome-free/css/all.min.css";
import { connect } from "react-redux";

//import contexts
import UserContextes from "./Contexts/UserContextes";

//import actions
import { currentUser } from './Actions'

class App extends Component {

  // componentDidMount() {
  //   document.title = "Game Liga";
  // }

  render() {

    const { currentUserDispatch, currentUser } = this.props
    return (
      <React.Fragment>

        {/* <UserContextes> */}
        <Switch>

          <PrivateRoute exact path="/account" component={Account} />

          <PrivateRoute exact path="/tvlive" component={Tvlive} />

          <PrivateRoute exact path="/games" component={Games} />

          <PrivateRoute exact path="/tourny" component={Tourny} />

          <PrivateRoute exact path="/tutorial" component={Tutorial} />

          <PrivateRoute exact path="/leader-boards" component={LeaderBoards} />

          <PrivateRoute exact path="/console" component={Console} />

          <PrivateRoute exact path="/liga" component={Liga} />

          <PrivateRoute exact path="/chat" component={Chat} />

          <PrivateRoute exact path="/shop" component={Shop} />

          <PrivateRoute exact path="/news" component={News} />

          {/* {
            currentUserDispatch(currentUser.role === 'admin')
              ? */}
              <PrivateRoute path="/admin" component={LayoutAdmin} />
          //     :
          //     <Redirect to="/" />
          {/* // } */}

          <PublicRoute exact restricted={false} path="/" component={Home} />

          <PublicRoute exact restricted={true} path="/signup" component={SignUp} />

          <PublicRoute exact restricted={false} path="/logout" component={Logout} />

          <PublicRoute exact restricted={false} path="/404" component={NotFound} />

          <PublicRoute exact restricted={false} path="" component={NotFound} />

          {/* <Route exact path="" render={() => <Redirect to="/404" />} /> */}

          <Route component={NotFound} />

        </Switch>
        {/* </UserContextes> */}
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => {
  console.log("state :", state)
  return {
    currentUser: state.adminReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUserDispatch: role => dispatch(currentUser(role))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
