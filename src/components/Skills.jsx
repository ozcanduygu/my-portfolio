import { skillsData, skillsDataEN} from "../data/data";
import { LanguageContext } from '../context/LanguageContext';
import React, { useContext } from 'react';

function Skills() {
    const { language } = useContext(LanguageContext);
    const skills = language === "en" ? skillsDataEN : skillsData;

    return (
        <section>
           <h1>Skills</h1>
           {skills.map((skill)=>(
            <div key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
            </div>
           ))}
        </section>
    )
}
export default Skills;