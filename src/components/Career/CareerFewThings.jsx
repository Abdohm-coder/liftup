import React from "react";
import Bg1 from "../../images/CareerFewThings1.png";
import Bg2 from "../../images/CareerFewThings2.png";
import Bg3 from "../../images/CareerFewThings3.png";
import Bg4 from "../../images/CareerFewThings4.png";

const CareerFewThings = () => {
  const tabs = [
    {
      bg: Bg1,
      title: "Professionalism",
      desc: "Game development is a bona fide profession that relies on the skill of talented individuals. As development professionals, we support honorable, ethical, and beneficial behavior for our profession, industry, and society.",
    },
    {
      bg: Bg2,
      title: "Expression",
      desc: "Gaming is a medium of expression that deserves the same respect and protection as cinema, literature, and other forms of art and entertainment. We oppose attempts to treat games differently from other art or creative expression forms.",
    },
    {
      bg: Bg3,
      title: "Transparency",
      desc: "Our 100% work transparency ensures a positive company culture and enhances employee loyalty and engagement.",
    },
    {
      bg: Bg4,
      title: "Impact",
      desc: "Games and play are vital elements of cultures worldwide, with profound artistic, social, spiritual, and technological impacts. They are changing the world in many ways, including entertaining, enhancing learning, stimulating creativity and innovation, and building new social connections.",
    },
  ];

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        A Few <span className="border border-primary rounded shadow-primary px-3">Things</span> you should know about us
      </h2>
      <p className="fs-5 mb-5">
        <span className="text-primary ">Our Values.</span> We strive to redefine the standard of excellence
      </p>

      <div className="row justify-content-around">
        {tabs.map((tab) => (
          <div key={tab} className="col-9 col-md-6 col-lg-3 px-4 mb-3">
            <div
              className="rounded px-3 py-5 mb-3 shadow-primary h-100 d-flex flex-column justify-content-center"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${tab.bg}")`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h4>{tab.title}</h4>
              <p>{tab.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFewThings;
