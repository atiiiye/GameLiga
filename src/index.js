import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reducers } from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore , applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'

const middleware = [];
if (process.env.NODE_ENV !== 'production') middleware.push(createLogger())

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)) )

ReactDOM.render(
  // <React.StrictMode>

  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
