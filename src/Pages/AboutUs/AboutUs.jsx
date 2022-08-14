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
                  Bizning kompaniyamiz orqali siz o'zingizga qulay bo'lgan Makka hamda Madina Shaxarlariga mexmonxona aviachiptalar hamda chiptalarini xarid qilishingiz mumkin.
                  Har bir mehmon bizning do'stimiz va hamkorimiz!
Biz mehmonlarimizga ularning talablari va ehtiyojlariga to'liq javob beradigan yuqori sifatli turistik mahsulotni taklif etamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="about-content-main">
            <h1 className="info_text">"Decent Honest Travel” sayyohlik kompaniyasining axborot saytiga xush kelibsiz!</h1>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.3286842601674!2d71.72562331539748!3d40.46799297935917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x17743998326cd56a!2zNDDCsDI4JzA0LjgiTiA3McKwNDMnNDAuMSJF!5e0!3m2!1suz!2s!4v1660035881497!5m2!1suz!2s "
                width="1130"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameBorder="0"
                title="location"
              ></iframe>
              {/* hshdc */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
