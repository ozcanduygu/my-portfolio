import { projectsData, projectsDataEN } from '../data/data';
import { LanguageContext } from '../context/LanguageContext';
import React, { useContext } from 'react';
function Projects(){
        const { language } = useContext(LanguageContext);
        const projects = language === "en" ? projectsDataEN : projectsData;
    return(
        <section>
            <h1>Projects</h1>
            {projects.map((project)=>(
                <div key={project.title}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    )
}
export default Projects;