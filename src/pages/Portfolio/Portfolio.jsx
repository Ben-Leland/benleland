import React, { useState } from "react";
import "./Portfolio.css";
import Project from "../../components/Project/Project.jsx";
import { projects } from "../../components/Project/Projects.jsx";

export default function Portfolio() {
    const allLanguages = [...new Set(projects.flatMap((project) => project.languages))];
    const [activeFilter, setActiveFilter] = useState("All");
    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter((project) => project.languages.includes(activeFilter));

    return (
        <div className="portfolio">
            <div className="portfolio-top">
                <p className="portfolio-title">PORTFOLIO</p>
                <p className="portfolio-subtitle">{filteredProjects.length} project{filteredProjects.length > 1 ? "s" : ""}</p>
                {/* TODO: Filter bar */}
                <p className="portfolio-filter">FILTER</p>
                <div className="portfolio-filter-bar">
                    <button
                        className={`portfolio-filter-button ${activeFilter === "All" ? "portfolio-filter-active" : "portfolio-filter-inactive"}`}
                        onClick={() => setActiveFilter("All")}
                    >All</button>
                    {allLanguages.map((language) => (
                        <button
                            key={language}
                            className={`portfolio-filter-button ${activeFilter === language ? "portfolio-filter-active" : "portfolio-filter-inactive"}`}
                            onClick={() => setActiveFilter(language)}
                        >{language}</button>
                    ))}
                </div>
                
            </div>

            <div className="portfolio-bottom">
                {filteredProjects.map((project) => (
                    <Project
                        images={project.images}
                        title={project.title}
                        description={project.description}
                        languages={project.languages}
                        links={project.links}
                    ></Project>
                ))}
            </div>
        </div>
    )
}