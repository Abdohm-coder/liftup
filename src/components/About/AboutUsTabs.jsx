import React from "react";
import Bg1 from "../../images/AboutUsTab1.png";
import Bg2 from "../../images/AboutUsTab2.png";
import Bg3 from "../../images/AboutUsTab3.png";

const AboutUsTabs = () => {
  const tabs = [
    {
      bg: Bg1,
      title: "Our Vision",
      desc: "Our vision is to earn the emblem of being a good and innovative mobile game development company and developing our own Android and IOS games by using cutting-edge technology to provide first-class products and solutions to satisfy our customers.",
    },
    {
      bg: Bg2,
      title: "Our Philosophy",
      desc: "Our mission is for everyone to work together daily to achieve our goals, stay one step ahead and deliver the best.",
    },
    {
      bg: Bg3,
      title: "Multiple Platforms",
      desc: "Inclusive games and content are a must. From developing our own unique game diversity to focusing on making the game more accessible to gamers with different abilities, our goal is to make it accessible to all players. We create games that welcome all players. Our ability to make a positive impact extends beyond the global gaming community.",
    },
  ];
  return (
    <section className="py-5 my-5 container text-center">
      <div className="row justify-content-around">
        {tabs.map((tab) => (
          <div key={tab} className="col-9 col-md-7 col-lg-4 px-3 mb-3">
            <div
              className="d-flex flex-column justify-content-center rounded px-3 py-5 mb-3 shadow-primary h-100"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${tab.bg}")`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h4>{tab.title}</h4>
              <p className="fs-5">{tab.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsTabs;
