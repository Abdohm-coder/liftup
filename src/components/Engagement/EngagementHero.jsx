import React from "react";
import { Link } from "react-router-dom";
import EngagementImage from "../../images/EngagementHero.png";

const EngagementHero = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="order-2 order-lg-1 col-12 col-lg-7 text-center text-lg-start">
          <h4 className="text-primary mb-0">Engagement Model</h4>
          <h1 className="display-4">Provide Business Solutions</h1>
          <p className="fs-5">
            Our aim is to provide you a complete enterprise business solutions that are unique for your plans.
          </p>
          <Link className="btn btn-primary text-white px-4" to="/contact">
            Contact Us
          </Link>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-5">
          <img src={EngagementImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default EngagementHero;
