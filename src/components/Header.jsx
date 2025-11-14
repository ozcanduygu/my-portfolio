import React, {useContext} from 'react';

import { LanguageContext } from '../context/LanguageContext';
function Header(){
    const { language } = useContext(LanguageContext);
    return(
        <header>
            <button>{language==="en" ?"Skills" : "Yetenekler"}</button>
            <button>{language==="en" ?"Projects" : "Projeler"}</button>
            <button>{language==="en" ?"Hire me" : "Benimle Çalışın"}</button>
        </header>
    )
}
export default Header;