import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import WorkExperience from "../../components/WorkExperience/WorkExperience.jsx";
import jobs from "../../components/WorkExperience/WorkExperience.json";
import Education from "../../components/Education/Education.jsx";
import education from "../../components/Education/Education.json";
import headshot from "../../../assets/headshot.jpg";
import resume from "../../../assets/resume.pdf";

export default function Home() {
    return (
        <div>
            <div className="container-home">
                <img src={headshot} alt="Headshot" className="headshot"></img>

                <div className="home-container-laptop">
                    <p className="name">BEN LELAND</p>
                    <p className="title">FULL-STACK SOFTWARE ENGINEER</p>
                    <div className="home-link-container">
                        <Link to="/contact" className="link-button get-in-touch"> GET IN TOUCH &nbsp;&nbsp; 🡥</Link>
                        <a href={resume} download="Ben Leland - Resume.pdf" className="link-button"> DOWNLOAD RESUME &nbsp;&nbsp; {"\u2B73"}</a>
                    </div>
                </div>
            </div>

            <div className="container-home">
                <div className="section-1">
                    <p className="section-title"> ABOUT </p>
                </div>

                <div className="section-2">
                    <div className="subtitle subtitle-group">
                        <p className="symbol">&lt;&gt;</p>
                        <p className="section-subtitle">Full-Stack Software Engineer</p>
                    </div>
                    <p className="section-body">I am a recent Informatics graduate from the University of Washington with a focus in Data Science and Software Engineering, passionate about building reliable, thoughtful, and impactful technology. I enjoy solving complex technical problems and continuously improving my skills through hands-on development and collaboration.<br></br><br></br> Through coursework, technical projects, and internship experience, I have built a strong foundation in full-stack development and data science while gaining experience solving technical problems in collaborative environments. These experiences strengthened my analytical thinking, adaptability, and interest in building practical, scalable solutions.<br></br><br></br> I am particularly interested in software engineering opportunities where I can contribute to meaningful products, collaborate with experienced teams, and deepen my experience building production ready systems. Going forward, I am excited to continue to grow as an engineer and contribute to products that make a meaningful impact.</p>
                    <a href="https://www.linkedin.com/in/ben-leland/" target="_blank" rel="noreferrer" className="link-button"> LINKEDIN &nbsp;&nbsp; 🡥</a>
                </div>

            </div>

            <div className="container-home">
                <div className="section-1">
                    <p className="section-title"> SKILLS </p>
                </div>

                <div className="section-2">
                    <div className="subtitle subtitle-group">
                        <p className="symbol">&lt;&gt;</p>
                        <p className="section-subtitle">Areas of Expertise</p>
                    </div>

                    <ul className="section-body">
                        <li><strong>Full-Stack Development</strong> — Experience in client-side tech (JavaScript, React, HTML, CSS) and backend/systems work (Java, Python, C), plus API integration in production environments</li>
                        <li><strong>Data Engineering & Analysis</strong> — Built ETL pipelines, created databases and complex queries (SQL), and generated data visualizations (R); coursework in data structures and data modeling</li>
                        <li><strong>Software Development in Professional Settings</strong> — Shipped code to production systems, worked with internal APIs, and used Git/GitHub for version control and team collaboration</li>
                    </ul>

                    <div>

                    </div>
                </div>
            </div>

            <div className="container-home">
                <div className="section-1">
                    <p className="section-title"> WORK EXPERIENCE </p>
                    
                </div>
                <div className="section-2">
                    {jobs.map((job) => (
                        <WorkExperience
                            start={job.start}
                            end={job.end}
                            title={job.title}
                            company={job.company}
                            bullets={job.bullets}
                        ></WorkExperience>
                    ))}
                </div>
                
            </div>

            <div className="container-home">
                <div className="section-1">
                    <p className="section-title">EDUCATION</p>

                </div>
                
                <div className="section-2">
                    {education.map((education) => (
                        <Education
                            degree={education.degree}
                            university={education.university}
                            location={education.location}
                            progress={education.progress}
                            date={education.date}
                        ></Education>
                    ))}
                </div>
                

            </div>
        </div>
    )
}