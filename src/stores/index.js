import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./../Reducers";
import thunk from "redux-thunk";
import { userSignup, userLogin } from "./../Actions";

export const store = createStore(
  reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.dispatch(userSignup);
store.dispatch(userLogin);


store.subscribe(() => console.log(store.getState()));
