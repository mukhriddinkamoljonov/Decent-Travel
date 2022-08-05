import React from "react";
import "./City.css";

const City = () => {
  return (
    <div className="city-container">
      <div className="mx-auto absolute w-full city-header">
        <div className="city-bc">
          <div className="cites-content">
            <div className="mt-12">
              <h1 className="city-head-title">Barcha Turistik shaharlar</h1>
              <p className="city-head-text">
                With travala you can experience new travel and the best tourist
                destinations that we have to offer tourist destinations that we
                have to offer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cites-content">
        <div className="mt-96">
          <h1>O'zbekistonning turistik shaharlari</h1>
        </div>
      </div>
    </div>
  );
};

export default City;
