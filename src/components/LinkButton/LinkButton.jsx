import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";

export default function LinkButton({ type, theme, address, text, downloadTitle }) {
    if (type == "link") {
        return (
            <Link to={address} className={`link-button ${theme}`}>{text}</Link>
        );
    } else if (type == "a") {
        return (
            <a href={address} className={`link-button ${theme}`} target="_blank" rel="noreferrer">{text}</a>
        );
    } else if (type == "download") {
        return (
            <a href={address} download={downloadTitle} className={`link-button ${theme}`}>{text}</a>
        );
    }
}