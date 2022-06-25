import React from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
