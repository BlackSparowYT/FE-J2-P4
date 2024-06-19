import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./css/core.css";
import "./css/jordi.css";
import './css/finn.css'

import PostModel from "./models/post.js";

const test_func = async () => {
  const data = await PostModel.getById("1RgHXHLG2uemHsd0yFep");
  console.log(data);
}

test_func();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
