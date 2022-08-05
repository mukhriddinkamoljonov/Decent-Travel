import React, { useState } from "react";
import { AddIcon, Close } from "../../assets/icon";
import "./Questions.css";

const Questions = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  return (
    <div className="questions">
      <div className="mx-auto absolute w-full">
        <div className="question-header">
          <div className="question-bc">
            <div className="cites-content">
              <div className="mt-[28px]">
                <h1 className="city-head-title">Ko'p so'raladigan savollar</h1>
                <p className="city-head-text">
                  Turistlarning O‘zbekiston bo‘ylab sayohatga oid tez-tez
                  so‘raladigan savollari
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cites-content">
          <div className="question-content-main flex">
            <div className="flex-auto w-96">
              <h1>Asosiy savollar</h1>
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded(!expanded)}
                    className="question-title"
                  >
                    O'zbekiston qayerda joylashgan?
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded && (
                  <>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.25541040002!2d71.78278911491667!3d40.38103156573462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83b8ca19ff63%3A0x8280fefda94b4cea!2sWorld%20Glamour%20Tour!5e0!3m2!1suz!2s!4v1659723521972!5m2!1suz!2s"
                      width="580"
                      height="300"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      frameBorder="0"
                      title="location"
                    ></iframe>
                  </>
                )}
              </article>
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded1(!expanded1)}
                    className="question-title"
                  >
                    Sizning milliy oshxonangiz qanday?{" "}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded1(!expanded1)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded1 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>
              <h2 className="location">Passport </h2>
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded2(!expanded2)}
                    className="question-title"
                  >
                    O‘zbekistonga sayohat uchun pasport/xalqaro pasportning amal
                    qilish muddati qancha?{" "}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded2(!expanded2)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded2 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>
            </div>
            <div className=" bg-gradient-to-r from-purple-500 to-pink-500 flex-auto w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
