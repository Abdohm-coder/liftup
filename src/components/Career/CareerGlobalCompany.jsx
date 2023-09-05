import React from "react";
import CareerGlobalIcon1 from "../../images/CareerGlobalIcon1.png";
import CareerGlobalIcon2 from "../../images/CareerGlobalIcon2.png";
import CareerGlobalIcon3 from "../../images/CareerGlobalIcon3.png";
import CareerGlobalIcon4 from "../../images/CareerGlobalIcon4.png";

const CareerGlobalCompany = () => {
  return (
    <section className="my-5 container">
      <h2 className="display-6">A Global Company</h2>
      <p className="fs-5 mb-5">
        <span className="text-primary">Liftup Studio</span> is a leading mobile
        game development company with a global reach
      </p>
      <div className="d-flex flex-wrap text-center gap-4">
        <div className="flex-fill rounded border-primary-light shadow-primary p-3">
          <img src={CareerGlobalIcon1} className="mb-3" />
          <h4>
            30 <small className="fs-6 pb-1">Mentors</small>
          </h4>
        </div>
        <div className="flex-fill rounded border-primary-light shadow-primary p-3">
          <img src={CareerGlobalIcon2} className="mb-3" />
          <h4>
            3500 <small className="fs-6 pb-1">Visitor</small>
          </h4>
        </div>
        <div className="flex-fill rounded border-primary-light shadow-primary p-3">
          <img src={CareerGlobalIcon3} className="mb-3" />
          <h4>
            8 <small className="fs-6 pb-1">Mentors</small>
          </h4>
        </div>
        <div className="flex-fill rounded border-primary-light shadow-primary p-3">
          <img src={CareerGlobalIcon4} className="mb-3" />
          <h4>
            36 <small className="fs-6 pb-1">Startups</small>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default CareerGlobalCompany;
