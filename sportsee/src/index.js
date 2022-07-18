import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./components/pages/App";
import Navigation from "./components/Navigation";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to='/user/12' />}></Route>
        <Route path="/user/:id" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
