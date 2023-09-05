import React from "react";
import EngagementImage from "../../images/EngagementModel.png";
import Image1 from "../../images/01.svg";
import Image2 from "../../images/02.svg";
import Image3 from "../../images/03.svg";

const EngagementModel = () => {
  return (
    <section className="py-5 my-5 container">
      <div className="container text-center pb-5">
        <h2 className="mb-4">
          Liftup Studio{" "}
          <span className="border border-primary rounded shadow-primary px-3 text-nowrap mt-2 d-inline-block">
            Engagement Models
          </span>
        </h2>
        <p className="fs-5 mb-5">
          None of the businesses are alike. At{" "}
          <span className="text-primary">Liftup</span>, we make sure that all
          projects should be unique in their way. So, we develop an incomparable
          project model that is in accordance with your dynamic enterprise
          needs.
        </p>
      </div>

      <div
        className="container p-5"
        style={{
          backgroundImage: `url(${EngagementImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex flex-column flex-lg-row gap-4 align-items-center p-3 mb-4">
          <img src={Image1} alt="1" />
          <div>
            <h4 className="text-primary">Hire a Developer Model</h4>
            <p className="fs-5 mb-1">
              This model allows you to hire dedicated web developers and
              designers for our services. We categorized this model into three
              options according to the needs and requirements of the project.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row gap-4 align-items-center p-3 mb-4">
          <img src={Image2} alt="1" />
          <div>
            <h4 className="text-primary">
              Development model of time and matter
            </h4>
            <p className="fs-5">
              This development model works best when the client has only one
              idea and no fixed timeline. The time and materials development
              model is best used for continuous engagement and changing
              requirements. Together with our team of experts, we work on such
              projects daily, weekly and monthly and bill clients on the basis
              of the number of hours spent by team members.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row gap-4 align-items-center p-3 mb-4">
          <img src={Image3} alt="1" />
          <div>
            <h4 className="text-primary">Fixed price development model</h4>
            <p className="fs-5">
              If you want a complete enterprise solution, the full-time
              employment model is the most preferred development model. In this
              model, the client gets one specific person for the project and can
              communicate directly and clearly. Hire SEO, mobile app
              development, and web development experts for the entire project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
