import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./shared/App";

// router
import { BrowserRouter } from "react-router-dom";

// store
import { Provider } from "react-redux";
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
