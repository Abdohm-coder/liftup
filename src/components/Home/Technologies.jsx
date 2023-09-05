import React, { useEffect } from "react";
import flickityInit from "../../flickityInit";

import tech1 from "../../images/react-logo.svg";
import tech2 from "../../images/vive-logo.svg";
import tech3 from "../../images/ue-logo.svg";
import tech4 from "../../images/unity-logo.svg";
import tech5 from "../../images/oculus-logo.svg";
import tech6 from "../../images/photon-logo.svg";
import tech7 from "../../images/scala-logo.svg";

const Technologies = () => {
  const techs = [tech1, tech2, tech3, tech4, tech5, tech6, tech7];
  useEffect(() => {
    flickityInit("tech-carousel");
  });

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        <span className="border border-primary rounded shadow-primary px-3">Technologies</span> We Use
      </h2>
      <div id="tech-carousel">
        {techs.map((tech, index) => (
          <div key={index} className="carousel-cell  p-2" key={index}>
            <img src={tech} className="p-3" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
