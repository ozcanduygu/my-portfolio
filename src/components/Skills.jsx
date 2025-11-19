import { skillsData, skillsDataEN } from "../data/data";
import { LanguageContext } from '../context/LanguageContext';
import React, { useContext } from 'react';

function Skills() {
    const { language } = useContext(LanguageContext);
    const skills = language === "en" ? skillsDataEN : skillsData;

    return (
<section className="w-[1140px] mx-auto mt-20 text-left">
    <h1 className="text-[#1F2937] text-[48px] font-semibold leading-[48px] mb-10">
        Skills
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {skills.map((skill) => (
            <div key={skill.name}>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
            </div>
        ))}
    </div>
</section>

    );
}

export default Skills;
