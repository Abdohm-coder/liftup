import React from "react";
import InfrastructureSectionImage from "../../images/InfrastructureSection.png";

const InfrastructureSection = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="order-2 order-lg-1 col-12 col-lg-7 text-center text-lg-start">
          <div className="container">
            <h1 className="display-5">Liftup Studio Amazing Architecture</h1>
            <p className="fs-5">
              The workplace should be such that motivates a person to push
              themselves and to achieve more and more.
              <span className="text-primary">Liftup</span> architecture is built
              with the same vision.
              <span className="text-primary">Liftup</span> motive is to go to
              the next level, and well-planned architecture is one small step
              towards this goal, as it creates such a climate that boosts the
              dedication of the whole Bleeding Edge family towards this goal.
            </p>
          </div>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-5">
          <img src={InfrastructureSectionImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
