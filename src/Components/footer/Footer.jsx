import React from "react";
import { Logo } from "../../assets/icon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* // You need to write the footer part of the website */}
        <div className="footer-content">
          <div className="">
            <div className="footer-content-log">
              <Logo />
            </div>
            <p>
              With travala you can experience new travel and the best tourist
              destinations that we have to offer
            </p>
          </div>
          <div className="">
            <h3 className="footer-content-head-text">Services</h3>
            <div>
              <ul className="footer-content-list">
                <li>Home</li>
                <li>Shaharlar</li>
                <li>Diqqatga sazovor joylar</li>
                <li>Galereya</li>
              </ul>
            </div>
          </div>{" "}
          <div className="">
            <h3 className="footer-content-head-text">Services</h3>
            <div>
              <ul className="footer-content-list">
                <li>About</li>
                <li>Biz haqimizda</li>
                <li>Kontaktlariimiz</li>
                <li>F.A.Q</li>
              </ul>
            </div>
          </div>{" "}
          <div className="">
            <h3 className="footer-content-head-text">Follow Us</h3>
            <div>
              <ul className="footer-content-list">
                <li>Home</li>
                <li>Shaharlar</li>
                <li>Diqqatga sazovor joylar</li>
                <li>Galereya</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
