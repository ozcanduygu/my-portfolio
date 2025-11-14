import React from 'react';
import { footerData } from '../data/data';
function Footer(){
    return(
        <section>
            <h2>{footerData[0].title}</h2>
            <p>{footerData[0].email}</p>
        </section>
    )
}
export default Footer;