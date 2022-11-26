import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import reducers from "./reducers";
const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
