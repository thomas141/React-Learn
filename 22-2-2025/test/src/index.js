import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Page1 from "./pages/Page1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Page1 />
  </React.StrictMode>
);
