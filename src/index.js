import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./Components/stores";

// var cors = require("cors");

// App.use(cors());

ReactDOM.render(
  // <React.StrictMode>

  // <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
  // {/* </Provider>, */}

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
