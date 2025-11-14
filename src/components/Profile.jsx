import { profileData, profileDataEN} from "../data/data";
import { LanguageContext } from '../context/LanguageContext';
import React, { useContext } from 'react';
function Profile(){
        const { language } = useContext(LanguageContext);
        const profile = language === "en" ? profileData : profileDataEN;
    return(
        <section>
            <h1>Profile</h1>
            <div>
                <p>Doğum Tarihi:</p> {profile[0].birthDate}
                <p>İkamet Şehri:</p> {profile[0].city}
                <p>Eğitim Durumu:</p> {profile[0].educationStatus}
                <p>Tercih Edilen Rol:</p> {profile[0].prefferedRole}
            </div>
        </section>
    )
}
export default Profile;