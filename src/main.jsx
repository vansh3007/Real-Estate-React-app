// main.jsx or index.jsx (entry file)
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot container instead of ReactDOM.render

root.render(
  <Router >
    <App />
  </Router>
);
