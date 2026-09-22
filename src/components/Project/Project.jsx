import React from "react";
import "./Project.css";
import Symbol from "../Symbol/Symbol.jsx";
import LinkButton from "../LinkButton/LinkButton.jsx";
import Language from "../Language/Language.jsx";

export default function Project({ images, title, description, languages, links }) {
    return (
        <div className="project">
            <div className="project-img">
                <img src={images[0]}></img>
            </div>

            <div className="project-body">
                <div className="project-title-container">
                    <div className="project-title-flex">
                        <Symbol size="1.5rem"></Symbol>
                        <p className="project-title">{title}</p>
                    </div>
                    <div className="project-title-links">
                        <LinkButton type="a" theme="normal-button" address={links[0]} text="GITHUB"></LinkButton>
                        {links.length == 2 && (
                            <LinkButton type="a" theme="accent-button" address={links[1]} text="LIVE DEMO"></LinkButton>
                        )}
                    </div>
                </div>

                <p className="project-description">{description}</p>

                <div className="project-languages">
                    {languages.map((language) => (
                        <Language
                            text={language}
                        ></Language>
                    ))}
                </div>

                <div className="project-links">
                    <LinkButton type="a" theme="normal-button" address={links[0]} text="GITHUB"></LinkButton>
                    {links.length == 2 && (
                        <LinkButton type="a" theme="accent-button" address={links[1]} text="LIVE DEMO"></LinkButton>
                    )}
                    
                </div>
            </div>
        </div>
    );
}