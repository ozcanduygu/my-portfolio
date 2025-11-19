import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

function ModeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language,setLanguage } = useContext(LanguageContext);

    return(
        <div className="flex justify-end items-center gap-6 py-4 px-6 text-sm text-gray-600">
            <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
                    onClick={toggleTheme}>dark mode</button>
            <button className="text-indigo-600 font-medium hover:underline"
                    onClick={()=>setLanguage(language==="en" ? "tr" :"en")}>
                {language==="en" ? "TR" : "İNG"}
            </button>
        </div>
    )
}
export default ModeSwitch;