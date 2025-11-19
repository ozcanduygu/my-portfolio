import React, {useContext} from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Header({ scrollToSection, refs }){
    const { language } = useContext(LanguageContext);

    return(
        <header className="flex items-center justify-between py-8 px-6">
            <p className="text-xl font-bold text-indigo-600">Duygu Özcan</p>
            <nav className="flex items-center gap-10 text-gray-700 font-medium">
                    <button className="hover:text-indigo-600 transition"
                            onClick={()=>scrollToSection(refs.skillsRef)}>
                        {language==="en" ?"Skills" : "Yetenekler"}
                    </button>
                    <button className="hover:text-indigo-600 transition"
                            onClick={()=>scrollToSection(refs.projectsRef)}>
                        {language==="en" ?"Projects" : "Projeler"}
                    </button>
                    <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                     onClick={()=>scrollToSection(refs.footerRef)}>
                        {language==="en" ?"Hire me" : "Benimle Çalışın"}
                    </button>
            </nav>

        </header>
    )
}
export default Header;