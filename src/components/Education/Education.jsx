import React from "react";
import "./Education.css";

export default function Education({ degree, university, location, progress, date }) {
    return (
        <div className="subtitle component-spacing">
            <div className="subtitle-group">
                <p className="symbol">&lt;&gt;</p>
                <p className="section-subtitle">{degree}</p>
            </div>
            <p className="subtitle-descriptor">{university} - {location}</p>
            <p className="subtitle-descriptor"><strong>{progress}</strong>: {date}</p>
        </div>
    )
}