import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css"; // eslint-disable-line import/no-unassigned-import

ReactDOM.render(<App />, document.getElementById("app"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
