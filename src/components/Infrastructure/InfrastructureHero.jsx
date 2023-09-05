import React from "react";
import { Link } from "react-router-dom";
import InfrastructureHeroImage from "../../images/InfrastructureHero.png";

const InfrastructureHero = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="order-2 order-lg-1 col-12 col-lg-6 text-center text-lg-start">
          <h4 className="text-primary mb-0">Key Infrastructure</h4>
          <h1 className="display-4">Liftup Studio Key Infrastructure</h1>
          <p className="fs-5">
            Delivering a perfect solution is a process that is possible only if
            certain factors are aligned together and a perfect infrastructure is
            one of the factors. Liftup has created such an ambience that can
            boost the efficiency of everyone.
          </p>
          <Link className="btn btn-primary text-white px-4" to="/contact">
            Contact Us
          </Link>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-6">
          <img src={InfrastructureHeroImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureHero;
