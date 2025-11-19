import React, {useContext} from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Header({ scrollToSection, refs }){
    const { language } = useContext(LanguageContext);

    return(
        <header>
            <button onClick={()=>scrollToSection(refs.skillsRef)}>
                {language==="en" ?"Skills" : "Yetenekler"}
            </button>
            <button onClick={()=>scrollToSection(refs.projectsRef)}>
                {language==="en" ?"Projects" : "Projeler"}
            </button>
            <button onClick={()=>scrollToSection(refs.footerRef)}>
                {language==="en" ?"Hire me" : "Benimle Çalışın"}
            </button>
        </header>
    )
}
export default Header;