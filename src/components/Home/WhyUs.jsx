import React from "react";

import reasonIcon1 from "../../images/ReasonIcon1.png";
import reasonIcon2 from "../../images/ReasonIcon2.png";
import reasonIcon3 from "../../images/ReasonIcon3.png";
import reasonBg1 from "../../images/ReasonBg1.png";
import reasonBg2 from "../../images/ReasonBg2.png";
import reasonBg3 from "../../images/ReasonBg3.png";

const WhyUs = () => {
  const reasons = [
    {
      icon: reasonIcon1,
      bg: reasonBg1,
      title: "Fast time to market",
      desc: "Analyze your idea, research, prepare your game design flow, create a simple game concept and start development. Our gaming app developers ensure all teams and stakeholders are on the same page for faster product delivery.",
    },
    {
      icon: reasonIcon2,
      bg: reasonBg2,
      title: "Skilled resource",
      desc: "Our game developers have experience with technologies such as Unity game development, C#, virtual and augmented reality SDKs, cross-platform builds, and testing. Our diverse portfolio and talented team allow us to build anything you want.",
    },
    {
      icon: reasonIcon3,
      bg: reasonBg3,
      title: "Cost reduction",
      desc: "We understand that you may be a small business or someone looking to carve a niche for themselves in the market. For this reason, we have solutions and packages that fit your budget. Liftup maintains high standards of game development quality and standards.",
    },
    {
      icon: reasonIcon1,
      bg: reasonBg1,
      title: "Team scalability",
      desc: "Work with our game developers to take your game to the next level. Our hands-on experience in the industry allows us to scale up production at any time. A strong support and maintenance team ensures a seamless experience at every level.",
    },
  ];
  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        Why{" "}
        <span className="border border-primary rounded shadow-primary px-3">
          Choose
        </span>{" "}
        to work with us
      </h2>
      <p className="fs-5 mb-5">
        At <span className="text-primary">Liftup Studio</span>, we believe in
        teamwork and a level of experience that sets us apart from the rest.
        Each of us can bring our creative element to the development process.
        However, many other innovative tools allow us to handle projects created
        for clients worldwide. Our mobile game developer team offers a wide
        range of game development services, from initial concept enhancements to
        game art, design, animation, game mechanics, development, and testing.
        We provide end-to-end game development solutions.
      </p>

      <div className="text-start">
        {reasons.map((reason) => (
          <div
            key={reason}
            className="d-flex flex-column flex-lg-row align-items-center p-2 rounded-3 mt-5 position-relative"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${reason.bg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={reason.icon} />
            <div className="px-3">
              <h3>{reason.title}</h3>
              <p className="fs-5">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
