import React from "react";
import Header from "./Header";
import logo from "./logo.svg";
import "./app.css"; // eslint-disable-line import/no-unassigned-import

const App = () => {
  return (
    <div className="app">
      <Header />
      <img alt="React Logo" className="appLogo" src={logo} />
      <p>Hello</p>
    </div>
  );
};

export default App;
