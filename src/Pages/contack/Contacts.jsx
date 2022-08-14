import React from "react";
import { Loc } from "../../assets/icon";
import { PhoneIcon } from "../../assets/icon";
import { MessengeIcon } from "../../assets/icon";
import "./Contacts.css";
import Footer from "../../Components/footer/Footer";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto absolute w-full">
      <div className="contact-header">
        <div className="contact-bc">
          <div className="cites-content">
            <div className="mt-24">
              <h1 className="city-head-title">Biz bilan bo'glanish</h1>
              <p className="city-head-text">
              Biz bilan bog'lansangiz, o'zingizni kuttirib qo'ymaysiz. Bizning turoperatorlarimiz har qanday so'rovingizga tez va samarali javob beradi.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[40px] text-[20px] cites-content">
        <div className="flex-initial w-[450px]">
          <p className="text-justify">
          Decent Honest Travel kompaniyasi O'zbekiston Turizm xizmatlari bozorida yangi hisoblanadi. Hozirgi kunda o'z ishiga ma'suliyat bilan yondoshadigan professional xodimlar sizga dunyoning istalgan mintaqasiga turistik yo'llanmalar hamda qulay yo'nalishdagi aviachiptalar taklif qilish salohiyatiga ega. Shu bilan birga O'zbekistondagi vatandoshlarimizga hamda qo'shni mamlakat Musulmon axliga 2022 yildan boshlab Umra hamda Haj safarlarini amalga oshirishda ko'makdosh bo'lib kelmoqda.Qiziqarli sayohatlar olamida bizning mehmonimiz bo'ling!
=======
          Decent Honest Travel kompaniyasi O'zbekiston Turizm xizmatlari bozorida yangi hisoblanadi. Hozirgi kunda o'z ishiga ma'suliyat bilan yondoshadigan rofessional xodimlar sizga dunyoning istalgan mintaqasiga turistik yo'llanmalar hamda qulay yo'nalishdagi aviachiptalar taklif qilish salohiyatiga ega. Shu bilan birga O'zbekistondagi vatandoshlarimizga hamda qo'shni mamlakat Musulmon axliga 2022 yildan boshlab Umra hamda Haj safarlarini amalga oshirishda ko'makdosh bo'lib kelmoqda. Bizning kompaniyamiz orqali siz o'zingizga qulay bo'lgan Makka hamda Madina Shaxarlariga mexmonxona aviachiptalar hamda chiptalarini xarid qilishingiz mumkin.
          </p>

          <div className="mt-[80px]">
            <div className="flex">
              <div className="ml-[-6px]">
                <Loc />
              </div>
              <p className="w-[500px] ml-[10px]">
                Marg'ilon shahar Ahmad Yassaviy 94 uy
              </p>
            </div>
            <div className="flex mt-[10px]">
              <PhoneIcon />
              <p className="w-[500px] ml-[10px]">+998 97 332 22 33, +998 90 580 25 05 </p>
            </div>
            <div className="flex mt-[10px]">
              <MessengeIcon />
              <p className="w-[500px] ml-[13  px]">decenttravel@mail.ru</p>
            </div>
          </div>
        </div>
        <div className="forma">
          <form>
            <div>
              <label htmlFor="">Email:</label>
              <input type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="">Name:</label>
              <input type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="">Ma'lumot:</label>
              <input type="text" />
            </div>
            <br />
            <button className="bg-orange-600 w-[154px] h-[56px] p-[10px] rounded-lg text-white text-[16px] ml-64">
              So'rov yuborish
            </button>
          </form>
        </div>
      </div>
      {/* <Footer  /> */}
    </div>
  );
};

export default Contacts;
