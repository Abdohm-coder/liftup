import React from "react";
import { Link } from "react-router-dom";
import CareerImage from "../../images/CareerHero.png";

const CareerHero = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="order-2 order-lg-1 col-12 col-lg-6 text-center text-lg-start">
          <h4 className="text-primary mb-0">Come to join Us!</h4>
          <h1 className="display-4">We are Hiring</h1>
          <p className="fs-5">
            Join our talented family, gain valuable skills and grow your career alongside other ambitious people. Gain
            knowledge from experienced professionals in your field, achieve your career goals and be part of an
            environment where fun and work are equal measures. Here are some of our core values you should know about.
          </p>
          <a className="btn btn-primary text-white px-4" href="#find-opening-section">
            See Current Openings
          </a>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-6">
          <img src={CareerImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
