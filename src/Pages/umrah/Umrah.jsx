import React from "react";
import "./umrah.css";
import umrah from "../../assets/image 1.png";
import rasm1 from "../../assets/Rectangle 2815.png";
import rasm2 from "../../assets/Rectangle 9552.png";
import rasm3 from "../../assets/Rectangle 9553.png";
import rasm4 from "../../assets/Rectangle 22434.png";
import rasm5 from "../../assets/Rectangle 22435.png";
import rasm6 from "../../assets/Rectangle 22436.png";
import rasm7 from "../../assets/rasm7.png";
import rasm8 from "../../assets/rasm8.png";
import rasm9 from "../../assets/rasm9.png";
import Footer from "../../Components/footer/Footer";
import { useTranslation } from "react-i18next";

const Umrah = () => {
    const { t } = useTranslation();

  return (
    <div className="w-full h-screen mx-auto  absolute">
      <div className="w-full h-[100vh] bg-zinc-900 flex justify-center items-center ">
        <div className="w-3/6 leading-[96px] text-white text-[70px] font-bold pl-[120px] ">
          <h1>{t("umrah_name")} </h1>
        </div>
        <div className="w-3/6 pl-[10px]">
          <img src={umrah} alt="" />
        </div>
      </div>
      <div className="text-cente textsp">
        <h1 className="w-[569px] h-[58px]  text-[48px] font-bold leading-[120%]  ml-[486px] text-[#0E0E2C] mt-[30px]">
          {t("umra_2022")}
        </h1>
        <p className="font-medium ml-[560px] w-[320px] h-[32px] text-[20px] not-italic] text-[#0E0E2C] mt-[25px]">
          {t("departureDdate")}
        </p>
        <p className="font-medium ml-[610px] w-[320px] h-[32px] text-[18px] not-italic text-[#0E0E2C] mt-[15px]">
          
        </p>
        <div className="w-[1110px] h-[96px] mt-[20px]  ml-[120px] font-normal text-[20px] leading-[30px] font-bold tracking-normal ">
          {t("umrahPackage")}
        </div>
        <div className="w-[1110px] h-[96px] mt-[20px]  ml-[120px] font-normal text-[20px] leading-[30px] font-bold tracking-normal  ">
          {t("wePackages")}
        </div>
        <div className="w-[1030px] h-[96px] mt-[60px]  ml-[120px] font-normal text-[20px] leading-[30px] font-bold tracking-normal">
          <span className="text-[#F3692E]">{t("choosePackage")} </span>
          <ul className="umrah_ul ml-[30px] leading-[40px] mt-[10px]">
            {t("servicePackage")}
          </ul>
        </div>
        <div className="w-[1030px] h-[96px] mt-[200px]  ml-[120px] font-normal text-[20px] leading-[30px] font-bold tracking-normal">
          <span className="text-[#F3692E]">{t("itinerary")} </span>
          <br />
          <span>{t("infoPackage")}</span>
          <div className="w-[1030px]">
            <span className="text-[#F3692E]">{t("whatnCluded")} </span>
            <ul className="umrah_ul ml-[30px] leading-[40px] mt-[10px]">
              <li>{t("touristVisas")}</li>
              <li>{t("returnFlights")}</li>
              <li>
               {t("hotelStar")}
              </li>
              <li>
                {t("hotelConrad")}
              </li>
              <li>
                {t("speedRailway")}
              </li>
              <li>{t("graupLeader")} </li>
              <li>
                {t("breakfast")}
              </li>
              <li>{t("ziyarahTrips")}</li>  
            </ul>
          </div>
          <div className="">
            <span className="text-[#F3692E]">{t("hotels")} </span>
            <ul className="mt-[15px]">
              <li>{t("al-MadinahHotel")}</li>
            </ul>
            <p className="w-[1030px] mt-[20px]">
              {t("largesHhotel")}
            </p>

          </div>
        </div>
      </div>
      <div className="w-[1030px] flex mt-[800px] ml-[120px]">
        <div className="">
          <img src={rasm1} className="w-[320px] h-[260px]" alt="" />
        </div>
        <div className="ml-[40px]">
          <img src={rasm2} className="w-[320px] h-[260px]" alt="" />
        </div>
        <div className="ml-[40px]">
          <img src={rasm3} className="w-[320px] h-[260px]" alt="" />
        </div>
      </div>
      <div className="w-[1030px] mt-[20px] ml-[120px] font-normal text-[20px]">
        <p>{t("al-MadinahHotel")}</p>
        <p className="mt-[20px]">
        {t("largesHhotel")}
        </p>
      </div>
      <div className="w-[1030px] flex mt-[30px] ml-[120px]">
        <div className="">
          <img src={rasm4} className="w-[320px] h-[260px]" alt="" />
        </div>
        <div className="ml-[40px]">
          <img src={rasm5} className="w-[320px] h-[260px]" alt="" />
        </div>
        <div className="ml-[40px]">
          <img src={rasm6} className="w-[320px] h-[260px]" alt="" />
        </div>
      </div>
      <div className="w-[1030px] mt-[30px] ml-[120px]">
        <span className="text-[#F3692E]">Price (per person):</span>
        <div className="w-[1030px] mt-[40px] border-black border-[1px] rounded-[10px]">
          <div className="flex items-center ml-[50px]">
            <img src={rasm7} className="hotel_img" alt="" />
            <span className="text-[25px] ml-[50px]">
              <h3>Double Occupancy</h3>
              <p>£1595</p>
            </span>
          </div>
          <hr className="w-[970px] ml-[25px] border-black border-[0.5px] " />
          <div className="flex items-center ml-[50px]">
            <img src={rasm8} className="hotel_img" alt="" />
            <span className="text-[25px] ml-[50px]">
              <h3>Double Occupancy</h3>
              <p>£1595</p>
            </span>
          </div>
          <hr className="w-[970px] ml-[25px] border-black border-[0.5px] " />
          <div className="flex items-center ml-[50px]">
            <img src={rasm9} className="hotel_img" alt="" />
            <span className="text-[25px] ml-[50px]">
              <h3>Double Occupancy</h3>
              <p>£1595</p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-[1030px] mt-[30px] ml-[120px] font-normal text-[20px]">
        <span className="text-[#F3692E] mt-[10px]">{t("howbBook")}</span>
        <p className="mt-[10px]">{t("weRequire")} </p>
        <ul className="umrah_ul  ml-[20px] mt-[20px]">
          <li>
          {t("paymentService")}
          </li>
        </ul>
        <ul className="umrah_ul  ml-[20px] mt-[30px]">
          <li>Account Name: ACCOUNT UMRAH</li>
          <li>Account Number: 930006644</li>
          <li>Reference: Please insert your postcode</li>
        </ul>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Umrah;
