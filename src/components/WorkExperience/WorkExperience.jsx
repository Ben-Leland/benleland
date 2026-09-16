import React from "react";
import "./WorkExperience.css";

export default function WorkExperience({ start, end, title, company, bullets }) {
    return (
        <div className="section-2 component-spacing">
            <div className="subtitle">
                <div className="subtitle-group">
                    <p className="symbol">&lt;&gt;</p>
                    <p className="section-subtitle">{title}</p>
                </div>
                <p className="subtitle-descriptor">{company}</p>
                <p className="subtitle-descriptor work-experience-date">{start} &nbsp;-&nbsp; {end}</p>
            </div>
            
            <ul className="section-body">
                {bullets.map((bullet) => (
                    <li>{bullet}</li>
                ))}
            </ul>
        </div>
    )
}