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

import AdminPanel from "./Components/AdminComponents/AdminPanel";
import AddNews from "./Components/AdminComponents/AddNews";

//import Routes
import PrivateRoute from "./Components/Routes/PrivateRoute ";
import PublicRoute from "./Components/Routes/PublicRoute";
import { Route, Switch } from "react-router-dom";

// import packages
import "@fortawesome/fontawesome-free/css/all.min.css";
import { connect } from "react-redux";
import { Admin } from "react-admin";

//import contexts
import UserContextes from "./Components/Contexts/UserContextes";
import AdminContextes from "./Components/Contexts/AdminContextes";

class App extends Component {
  // componentDidMount() {
  //   document.title = "Game Liga";
  // }

  render() {
    return (
      <UserContextes>
        <AdminContextes>
          <Switch>
            <PublicRoute exact restricted={false} path="/" component={Home} />

            <PublicRoute
              exact
              restricted={true}
              path="/signup"
              component={SignUp}
            />

            <PrivateRoute exact path="/account" component={Account} />

            <PrivateRoute exact path="/tvlive" component={Tvlive} />

            <PrivateRoute exact path="/games" component={Games} />

            <PrivateRoute exact path="/tourny" component={Tourny} />

            <PrivateRoute exact path="/tutorial" component={Tutorial} />

            <PrivateRoute
              exact
              path="/leader-boards"
              component={LeaderBoards}
            />

            <PrivateRoute exact path="/console" component={Console} />

            <PrivateRoute exact path="/liga" component={Liga} />

            <PrivateRoute exact path="/chat" component={Chat} />

            <PrivateRoute exact path="/shop" component={Shop} />

            <PrivateRoute exact path="/news" component={News} />

            <PublicRoute
              exact
              restricted={false}
              path="/logout"
              component={Logout}
            />

            {/* <Admin dataProvider={dataProvider} authProvider={authProvider}> */}

            <PrivateRoute exact path="/admin" component={AdminPanel} />

            <PrivateRoute exact path="/add-news" component={AddNews} />

            {/* </Admin> */}

            <PrivateRoute exact path="/404" component={NotFound} />

            <PrivateRoute exact path="" component={NotFound} />

            <PublicRoute
              exact
              restricted={false}
              path="/404"
              component={NotFound}
            />

            <PublicRoute
              exact
              restricted={false}
              path=""
              component={NotFound}
            />
          </Switch>
        </AdminContextes>
      </UserContextes>
    );
  }
}

export default App;
