import React from "react";
import { Loc } from "../../assets/icon";
import { PhoneIcon } from "../../assets/icon";
import { MessengeIcon } from "../../assets/icon";
import "./Contacts.css";
import Footer from "../../Components/footer/Footer";

const Contacts = () => {
  return (
    <div className="mx-auto absolute w-full">
      <div className="contact-header">
        <div className="contact-bc">
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
      <div className="flex mt-[40px] text-[20px] cites-content">
        <div className="flex-initial w-[450px]">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum eget
            libero elementum amet ultricies ut hac ultrices ullamcorper. Enim
            nullam eu libero accumsan, nisl amet. Enim nullam eu libero
            accumsan, nisl amet. Enim nullam eu libero accumsan, nisl amet.
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
              <p className="w-[500px] ml-[10px]">+998 940468016, 71.728035</p>
            </div>
            <div className="flex mt-[10px]">
              <MessengeIcon />
              <p className="w-[500px] ml-[13  px]">@decent_honest_travel. </p>
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
