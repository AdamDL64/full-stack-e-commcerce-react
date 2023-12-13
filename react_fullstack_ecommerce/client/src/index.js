import React from "react";
import ReactDOM from "react-dom/client";

//reduc tookik
import { Provider } from "react-redux";
import {legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./components/reducers/index";

// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import 'antd/dist/antd.min.css'     
// eslint-disable-next-line

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";

//router-dom
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
