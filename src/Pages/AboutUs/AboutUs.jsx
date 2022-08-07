import React from "react";
import "./AboutUs.css";
import person from "../../assets/Images/aboutperson.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="aboutus">
        <div className="mx-auto absolute w-full">
          <div className="about-header">
            <div className="city-bc">
              <div className="cites-content">
                <div className="mt-24">
                  <h1 className="city-head-title">Biz haqimizda</h1>
                  <p className="city-head-text">
                    With travala you can experience new travel and the best
                    tourist destinations that we have to offer tourist
                    destinations that we have to offer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="about-content-main">
              <ul>
                <li>
                  ✔️ Decent Honest Travel kompaniyasi O‘zbekiston sayyohlik
                  xizmatlari bozorida yangi hisoblanadi.
                </li>
                <li>
                  ✔️ Decent Honest Travel kompaniyasining asosiy yo‘nalishlari
                  mamlakatimizning tarixiy joylari, eng maftunkor go‘shalariga
                  va bir qancha chet el davlatlariga maroqli sayohat
                  uyushtirishingiz mumkin..
                </li>
                <li>
                  ✔️ Kompaniyaning rivojlanishi bilan sayyohlik yo'nalishlari
                  geografiyasi kengayadi. Bizning arsenalimiz ham guruh, ham
                  individual ekskursiyalar o'z ichiga oladi.
                </li>
                <li>
                  ✔️ Har bir mehmon bizning do'stimiz va hamkorimiz! Biz
                  mehmonlarimizga ularning talablari va ehtiyojlariga to'liq
                  javob beradigan yuqori sifatli turistik mahsulotni taklif
                  etamiz.
                </li>
              </ul>
              <img src={person} alt="person" className="" />
              <ul className="mt-5">
                <li>
                  Sayohat - bu hayotingizning eng yaxshi vaqti! Shuning uchun
                  biz hayotni sevadigan odamlar tomonidan ataylab tanlanganmiz.
                  Ular uchun sayohat - bu yangi bilimlarni izlash, yangi hayot
                  tajribasi, yangi his-tuyg'ularni o'zlashtirish.
                </li>
                <li className="mt-10">
                  Sizning sayohatingizni muhokama qilishdan xursandmiz. Istalgan
                  vaqtda biz bilan bog'laning. Bizni tanlaganingiz uchun
                  tashakkur. Biz har doim sizga qulay narxlardagi qulay
                  mehmonxonalarni topishda yordam berishdan mamnunmiz.
                </li>
              </ul>
              <h2 className="location">Location:</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.25541040002!2d71.78278911491667!3d40.38103156573462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83b8ca19ff63%3A0x8280fefda94b4cea!2sWorld%20Glamour%20Tour!5e0!3m2!1suz!2s!4v1659723521972!5m2!1suz!2s"
                width="1130"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameBorder="0"
                title="location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
