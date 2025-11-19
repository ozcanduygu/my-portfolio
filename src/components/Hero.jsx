/*import React, {useContext} from 'react';
import { heroData, heroDataEN } from '../data/data';
import { LanguageContext } from '../context/LanguageContext';

function Hero(){
    const { language } = useContext(LanguageContext);
    const hero = language === "en" ? heroDataEN[0] : heroData[0];
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6 py-24">
            <p className="text-sm text-indigo-600 font-medium mb-2">{hero.name}</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">{hero.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">{hero.content}</p>
            <div className="flex items-center gap-4">
                <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                    {language==="en" ?"Hire me" : "Benimle çalışın"}</button>
                <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Github</button>
                <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Linkedin</button>
            </div>

        </section>
    )
}
export default Hero;*/
import React, {useContext} from 'react';
import { heroData, heroDataEN } from '../data/data';
import { LanguageContext } from '../context/LanguageContext';
function Hero() {
  const { language } = useContext(LanguageContext);
  const hero = language === "en" ? heroDataEN[0] : heroData[0];

  return (
    <section className="mx-auto max-w-[1140px] mt-[237px] p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-start text-left w-full md:w-[596px]">
        {/* dekoratif çizgi */}
        <div className="w-16 h-[2px] bg-[#3730A3] rounded mb-4" />

        <p className="text-sm text-[#3730A3] font-medium mb-2">{hero.name}</p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
          {hero.title}
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
          {hero.content}
        </p>

        <div className="flex gap-3">
          <button className="px-5 py-2 bg-[#3730A3] text-white rounded-lg shadow hover:bg-indigo-700 transition">
            {language === "en" ? "Hire me" : "Benimle çalışın"}
          </button>
          <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Github</button>
          <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Linkedin</button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex items-center justify-center md:justify-end">
        <img
          src="/path/image.jpg"
          alt="hero"
          className="w-[476px] h-[375px] object-cover rounded-[18px]"
        />
      </div>
    </section>
  );
}

export default Hero;