import React from "react";
import "./Contact.css";
import LinkButton from "../../components/LinkButton/LinkButton";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="contact">
            <p className="contact-title">LET'S WORK TOGETHER</p>
            <div className="contact-info-container">
                <p className="contact-info">Ben_Leland@comcast.net</p>
                <p className="contact-info">(206) 960-6226</p>
                <p className="contact-info"> Seattle, WA</p>
            </div>
            <LinkButton type="a" theme="accent-button" address="https://www.linkedin.com/in/ben-leland/" text="LINKEDIN"></LinkButton>
            <LinkButton type="a" theme="accent-button" address="https://github.com/Ben-Leland" text="GITHUB"></LinkButton>
        </div>
    )
}