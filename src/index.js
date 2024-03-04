import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Topics from "./Topics";
import Topic from "./Topic";
import Contact from "./Contact";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <header>React</header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={<Topic />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={"Not Found"} />
      </Routes>
    </BrowserRouter>
  </>
);
