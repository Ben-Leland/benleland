import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LinkButton from "../LinkButton/LinkButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="container">
            <div className="brand">
                <NavLink to="/" className="nav-link-home">
                    <p className="symbol">&lt;&gt;</p>
                    <p className="navName"><strong>BEN LELAND</strong></p>
                </NavLink>

                <LinkButton type="link" theme="normal-button" address="/contact" text="GET IN TOUCH &nbsp;&nbsp; 🡥"></LinkButton>
            </div>

            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Me</NavLink>
            </div>
            <div className={`overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}></div>

            <div className="navbar-container-right">
                <ThemeSwitch></ThemeSwitch>

                <button
                    type="button"
                    className={`hamburger ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="desktop-menu">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
                </div>
            </div>

        </nav>
    )
}