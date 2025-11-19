
import { projectsData, projectsDataEN } from '../data/data';
import { LanguageContext } from '../context/LanguageContext';
import React, { useContext } from 'react';

function Projects() {
  const { language } = useContext(LanguageContext);
  const projects = language === "en" ? projectsDataEN : projectsData;

  return (
    <section className="w-full mt-24">
      
      {/* İç kutu */}
      <div className="max-w-[1140px] mx-auto">

        {/* Başlık */}
        <h1 className="text-[48px] font-semibold text-[#111827] mb-12 text-left">
          Projects
        </h1>

        {/* Proje listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project) => (
            <div 
              key={project.title} 
              className="border border-[#BAB2E7] p-6 rounded-2xl shadow-sm bg-white"
            >
              <h2 className="text-2xl font-semibold text-[#3730A3] mb-3">
                {project.title}
              </h2>

              <p className="text-[#6B7280] leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
