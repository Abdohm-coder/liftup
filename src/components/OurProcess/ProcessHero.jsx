import React from "react";
import { Link } from "react-router-dom";
import ProcessHeroImage from "../../images/processHero.png";

const ProcessHero = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="order-2 order-lg-1 col-12 col-lg-7 text-center text-lg-start">
          <div className="container">
            <h4 className="text-primary mb-0">Our Process</h4>
            <h1 className="display-4">We help you to grow your business!</h1>
            <p className="fs-5">
              Liftup's motivation is to provide the best game solutions to help
              our clients easily reach their goals and grow their businesses. To
              ensure we create the most sophisticated and practical solutions,
              we follow a carefully selected development process:
            </p>
            <Link className="btn btn-primary text-white px-4" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-5">
          <img src={ProcessHeroImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;
