import React, { useState, useEffect } from "react"
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Contact from "./Contact/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}