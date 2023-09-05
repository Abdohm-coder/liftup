import React from "react";
import CareerWhoWeAreImage from "../../images/CareerWhoWeAre.png";

const CareerWhoWeAre = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center justify-content-between">
        <div className="order-2 order-lg-1 col-12 col-lg-5 text-center text-lg-start">
          <h1 className="display-4">Who we are</h1>
          <p className="fs-5">
            We are a people-based company who relies on its talented staff to develop the most innovative and
            revolutionary mobile game and app solutions.
          </p>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-6">
          <img src={CareerWhoWeAreImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default CareerWhoWeAre;
