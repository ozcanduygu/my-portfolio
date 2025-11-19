import { profileData, profileDataEN} from "../data/data";
import { LanguageContext } from '../context/LanguageContext';
import React, { useContext } from 'react';


function Profile() {
  return (
    <section className="w-full mt-24">
      <div className="max-w-[1140px] mx-auto">

        {/* ÜST–ALT çizgili kutu */}
        <div className="border-t border-b border-[#BAB2E7] py-10">

          {/* BAŞLIK – sola yaslı */}
          <h2 className="text-[48px] leading-[48px] font-semibold text-[#111827] text-left mb-8">
            Profile
          </h2>

          {/* 2 sütun içerik */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">

            {/* SOL SÜTUN */}
            <div>
              <h3 className="text-[#3730A3] text-2xl font-semibold mb-6">
                Profile
              </h3>

              <div className="space-y-3 text-[16px] leading-relaxed text-[#6B7280]">
                <p><span className="font-semibold text-[#111827]">Doğum Tarihi:</span> 24.03.1996</p>
                <p><span className="font-semibold text-[#111827]">İkamet Şehri:</span> Ankara</p>
                <p><span className="font-semibold text-[#111827]">Eğitim Durumu:</span> Hacettepe Üniv. Biyoloji (Lisans, 2016)</p>
                <p><span className="font-semibold text-[#111827]">Tercih Ettiği Rol:</span> Frontend, UI</p>
              </div>
            </div>

            {/* SAĞ SÜTUN */}
            <div>
              <h3 className="text-[#3730A3] text-2xl font-semibold mb-6">
                About Me
              </h3>

              <p className="leading-relaxed mb-3 text-[#6B7280]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
              </p>

              <p className="leading-relaxed text-[#6B7280]">
                Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
