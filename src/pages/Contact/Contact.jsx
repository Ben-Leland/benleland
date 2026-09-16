import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <p className="contact-title">LET'S WORK TOGETHER</p>
            <div className="contact-info-container">
                <p className="contact-info">Ben_Leland@comcast.net</p>
                <p className="contact-info">(206) 960-6226</p>
                <p className="contact-info"> Seattle, WA</p>
            </div>
            <a href="https://www.linkedin.com/in/ben-leland/" target="_blank" rel="noreferrer" className="link-button contact-link-button">LINKEDIN &nbsp;&nbsp; 🡥</a>
            <a href="https://github.com/Ben-Leland" target="_blank" rel="noreferrer" className="link-button contact-link-button">GITHUB &nbsp;&nbsp; 🡥</a>
        </div>
    )
}