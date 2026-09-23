import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

export default function LinkButton({ type, theme, address, text, downloadTitle }) {
    if (type == "link") {
        return (
            <Link to={address} className={`link-button ${theme}`}>{text} &nbsp;&nbsp; {<ArrowUpRight size={14}/>}</Link>
        );
    } else if (type == "a") {
        return (
            <a href={address} className={`link-button ${theme}`} target="_blank" rel="noreferrer">{text} &nbsp;&nbsp; {<ArrowUpRight size={14}/>}</a>
        );
    } else if (type == "download") {
        return (
            <a href={address} className={`link-button ${theme}`} target="_blank" rel="noreferrer">{text} &nbsp;&nbsp; {<ArrowDownToLine size={14} />}</a>
        );
    }
}