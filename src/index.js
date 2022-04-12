import React from "react";
import ReactDOM from "react-dom/client";
import MainView from "./components/MainView";
import "./assets/style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
);
