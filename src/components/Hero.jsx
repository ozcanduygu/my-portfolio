import React, {useContext} from 'react';
import { heroData, heroDataEN } from '../data/data';
import { LanguageContext } from '../context/LanguageContext';

function Hero(){
    const { language } = useContext(LanguageContext);
    const hero = language === "en" ? heroDataEN[0] : heroData[0];
    return (
        <section className="p-8 bg-gray-100 dark:bg-gray-900 dark:text-white">
            <p>{hero.name}</p>
            <h1>{hero.title}</h1>
            <p>{hero.content}</p>
            <button>{language==="en" ?"Hire me" : "Benimle çalışın"}</button>
            <button>Github</button>
            <button>Linkedin</button>
        </section>
    )
}
export default Hero;