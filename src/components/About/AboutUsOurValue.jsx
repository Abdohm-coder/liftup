import React from "react";
import ValueBgImage from "../../images/AboutUsOurValueBg.png";
import Icon1 from "../../images/AboutUsValueIcon1.png";
import Icon2 from "../../images/AboutUsValueIcon2.png";
import Icon3 from "../../images/AboutUsValueIcon3.png";
import Icon4 from "../../images/AboutUsValueIcon4.png";
import Icon5 from "../../images/AboutUsValueIcon5.png";
import Icon6 from "../../images/AboutUsValueIcon6.png";

const AboutUsOurValue = () => {
  const values = [
    {
      icon: Icon1,
      title: "Professionalism",
      desc: "Game development is a bona fide profession that relies on the skill of talented individuals. As development professionals, we support honorable, ethical, and beneficial behavior for our profession, industry, and society.",
    },
    {
      icon: Icon2,
      title: "Expression",
      desc: "Gaming is a medium of expression that deserves the same respect and protection as cinema, literature, and other forms of art and entertainment. We oppose attempts to treat games differently from other art or creative expression forms.",
    },
    {
      icon: Icon3,
      title: "Community",
      desc: "We develop opportunities for our members and advance their professions by communicating with our peers. We value inclusion and diversity. We empower ourselves by sharing information and opinions, gathering resources, and advocating for issues that concern us.",
    },
    {
      icon: Icon4,
      title: "Transparency",
      desc: "Our 100% work transparency ensures a positive company culture and enhances employee loyalty and engagement.",
    },
    {
      icon: Icon5,
      title: "Impact",
      desc: "Games and play are vital elements of cultures worldwide, with profound artistic, social, spiritual, and technological impacts. They are changing the world in many ways, including entertaining, enhancing learning, stimulating creativity and innovation, and building new social connections.",
    },
    {
      icon: Icon6,
      title: "Fun",
      desc: "We are a community with a lively and fun culture in an industry based on providing inspiring experiences for others. The game is addicting and entertaining; fun is in our DNA, and we embrace it.",
    },
  ];

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        Our{" "}
        <span className="border border-primary rounded shadow-primary px-3">
          Ongoing
        </span>{" "}
        Values
      </h2>
      <p className="fs-5 mb-5">
        These core values are the essential and enduring tenets of Liftup. These
        are timeless guidelines and require no external justification. They are
        of intrinsic value and importance to Liftup and its members.
      </p>
      <div
        className="row pt-5"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("${ValueBgImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {values.map((v) => (
          <div key={v} className="col-12 col-lg-4 p-4">
            <img src={v.icon} className="mb-2" />
            <h4>{v.title}</h4>
            <p className="fs-5">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsOurValue;
