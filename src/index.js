import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./index.scss";
import "semantic-ui-css/semantic.min.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
