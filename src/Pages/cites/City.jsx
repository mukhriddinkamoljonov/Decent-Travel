import React from "react";
import "./City.css";
import termiz from "../../assets/Images/termiz.png";
import samarqand from "../../assets/Images/samarqand.png";
import xiva from "../../assets/Images/xiva.png";
import namangan from "../../assets/Images/namangan.png";
import fargona from "../../assets/Images/fargona.png";
import Footer from "../../Components/footer/Footer";
import { useTranslation } from "react-i18next";

const City = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="city-container">
        <div className="mx-auto absolute w-full">
          <div className="city-header">
            <div className="city-bc">
              <div className="cites-content">
                <div className="mt-12">
                  <h1 className="city-head-title">Barcha Turistik shaharlar</h1>
                  <p className="city-head-text">
                    With travala you can experience new travel and the best
                    tourist destinations that we have to offer tourist
                    destinations that we have to offer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cites-content">
            <div className="city-content-main">
              <h1 className="">O'zbekistonning turistik shaharlari</h1>
              <p>
                O'zbekistonning tarixiy shaharlari Ushbu bo'limda biz sizni
                O'zbekistonning Toshkent, Samarqand, Buxoro, Xiva, Shahrisabz
                kabi qadimiy shaharlari bilan yaqinroq tanishtiramiz. Bir
                paytlar Buyuk Ipak yo‘lining bir qismi bo‘lgan mamlakatimizning
                yorqin shaharlari bir ming yildan ortiq tarixga ega.
              </p>
              <div className="mt-14 grid grid-cols-4 gap-2">
                <div className="card-item">
                  <div className="card-image">
                    <img src={samarqand} alt="" />
                  </div>
                  <h1 className="card-title">Samarqand</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={xiva} alt="" />
                  </div>
                  <h1 className="card-title">Xiva</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={namangan} alt="" />
                  </div>
                  <h1 className="card-title">Namangan</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={fargona} alt="" />
                  </div>
                  <h1 className="card-title">Farg‘ona</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={namangan} alt="" />
                  </div>
                  <h1 className="card-title">Namangan</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={termiz} alt="" />
                  </div>
                  <h1 className="card-title">Termiz</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={fargona} alt="" />
                  </div>
                  <h1 className="card-title">Farg‘ona</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={samarqand} alt="" />
                  </div>
                  <h1 className="card-title">Samarqand</h1>
                </div>
                <div className="card-item">
                  <div className="card-image">
                    <img src={samarqand} alt="" />
                  </div>
                  <h1 className="card-title">Samarqand</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={xiva} alt="" />
                  </div>
                  <h1 className="card-title">Xiva</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={namangan} alt="" />
                  </div>
                  <h1 className="card-title">Namangan</h1>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={fargona} alt="" />
                  </div>
                  <h1 className="card-title">Farg‘ona</h1>
                </div>{" "}
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default City;
