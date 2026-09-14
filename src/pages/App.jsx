import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Contact from "./Contact/Contact.jsx";
import "./App.css";

const basename = process.env.NODE_ENV == "production" ? "/benleland" : "/";

// TODO: find overall theme of website
export default function App() {
    return (
        <div>
            <BrowserRouter basename={basename}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}