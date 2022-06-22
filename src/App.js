import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import Navigation from "./components/Navigation";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
