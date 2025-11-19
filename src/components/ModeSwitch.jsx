import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

function ModeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language,setLanguage } = useContext(LanguageContext);

    return(
        <div>
            <button onClick={toggleTheme}>dark mode</button>
            <button onClick={()=>setLanguage(language==="en" ? "tr" :"en")}>
                {language==="en" ? "TR" : "İNG"}
            </button>
        </div>
    )
}
export default ModeSwitch;