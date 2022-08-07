import React from "react";
import "./Attractions.css";
import attractionimg1 from "../../assets/image 37.png";
import Footer from "../../Components/footer/Footer";
import Search from "../../Components/search/search";
import { useTranslation } from "react-i18next";

const Attractions = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto absolute w-full">
      <div className="acc-header">
        <div className="city-bc">
          <div className="cites-content">
            <div className="mt-24">
              <h1 className="city-head-title">Diqqatga sazovor joylar</h1>
              <p className="city-head-text">
                With travala you can experience new travel and the best tourist
                destinations that we have to offer tourist destinations that we
                have to offer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="attraction-content flex">
        <div className="flex-auto w-96">
          <div className="mt-[20px]">
            <h1 className="text-center font-bold text-[48px]">
              Islom Karimov muzeyi
            </h1>
            <p className="text-justify text-[22px] mt-[10px]">
              O‘zbekiston Respublikasi Birinchi Prezidentining hayoti va
              faoliyati haqida ko‘proq bilishni istaysizmi? Endi siz Islom
              Karimov nomidagi ilmiy-ma’rifiy yodgorlik majmuasi muzeyiga
              tashrif buyurishingiz mumkin. Muzeyning eski nomi - "Oqsaroy
              Rezidensiyasi" ("Oq saroy"), bu yerda Islom Karimov bir paytlar
              siyosiy faoliyatini olib borgan va ishlagan. Hashamatli saroyda,
              muzeydan tashqari, kutubxona va o‘quv zali, ilmiy markaz va
              anjumanlar zaliga tashrif buyurishingiz mumkin.
            </p>
          </div>
          <div className="h-[550px] mt-[30px]">
            <img src={attractionimg1} alt="" />
          </div>
          <div className="mt-[20px]">
            <p className="text-justify text-[22px] mt-[10px]">
              Muzey eksponatlari rezidentsiya zallarida joylashgan. Birinchi
              zalda siz fotosuratlar, hujjatlar va hatto prezidentning shaxsiy
              buyumlarini ko‘rishingiz mumkin. Ikkinchi xonada siz Islom Karimov
              asarlari to‘plamlari bilan tanishasiz. Qizig‘i shundaki,
              prezidentning o‘zi hech qachon rassomlar va fotosuratchilar uchun
              suratga tushmagan.
            </p>
            <p className="text-justify text-[22px] mt-[15px]">
              Ba’zi rasmlar juda qiziq, siz Islom Karimovni g‘ayrioddiy holda
              ko‘rishingiz mumkin, ularning syujetlari afsonaviy ertaklarga
              o‘xshaydi. Muzeyda shuningdek, smart ekranlar o‘rnatilgan,
              ularning yordami bilan siz Islom Karimov hayotidan qiziqarli
              ma’lumotlar bilan tanishishingiz mumkin.
            </p>
            <p className="text-justify text-[22px] mt-[15px]">
              Majmua markazida piyodalar yo‘laklari va gul bilan o‘ralgan
              chiroyli bog‘ga ega. Saroy yonidagi balandlikda Islom Karimovning
              bronza haykali joylashgan.
            </p>
          </div>
          <div className="mt-[20px]">
            <span className="text-[#F3692E]">Location:</span>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8540.297151184914!2d69.22255379018169!3d41.32406551445359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b19339515f9%3A0xf2d5a0bc680d9bdf!2sWhite%20House%20(Islam%20Karimov)%20Museum!5e0!3m2!1suz!2s!4v1659725453781!5m2!1suz!2s"
                width="816"
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
        <div>
          <div className="mt-[40px]">
            <div className="col-span-4">
              <div className="flex flex-col">
                <Search />
                <div className="bg-white transition duration-150 ease-out shadow-lg shadow-neutral-400/50 py-[24px] pl-9 rounded mt-[32px] max-w-[270px]">
                  <ul className="not-italic  font-bold text-lg leading-6 flex flex-col gap-[18px]">
                    <li className="text-[#F3692E] cursor-pointer">
                      Asosiy savollar
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Passport
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Viza
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Registratsiya
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Sug'urta
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Turar joy
                    </li>
                  </ul>
                </div>
                <button className="py-[18px] w-[270px] mt-[32px] px-[32px] bg-[#F36326] rounded-lg not-italic font-semibold text-base text-center text-white">
                  Buyurtma qilish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Attractions;
