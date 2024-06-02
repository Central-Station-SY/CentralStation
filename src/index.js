import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap"; // Import Bootstrap JS
import "jquery";
import "./index.css";
import 'leaflet/dist/leaflet.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Function to add the viewport meta tag dynamically
function setViewportMetaTag() {
  let metaTag = document.querySelector('meta[name="viewport"]');
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    document.head.appendChild(metaTag);
  }
  metaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
}

document.addEventListener('DOMContentLoaded', setViewportMetaTag);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
