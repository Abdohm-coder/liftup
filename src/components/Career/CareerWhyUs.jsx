import React from "react";
import CareerWhyUsImage from "../../images/CareerWhyUsBg.png";
import CareerWhyUsIcon1 from "../../images/CareerWhyUsIcon1.png";
import CareerWhyUsIcon2 from "../../images/CareerWhyUsIcon2.png";
import CareerWhyUsIcon3 from "../../images/CareerWhyUsIcon3.png";
import CareerWhyUsIcon4 from "../../images/CareerWhyUsIcon4.png";
import CareerWhyUsIcon5 from "../../images/CareerWhyUsIcon5.png";
import CareerWhyUsIcon6 from "../../images/CareerWhyUsIcon6.png";
import CareerWhyUsIcon7 from "../../images/CareerWhyUsIcon7.png";
import CareerWhyUsIcon8 from "../../images/CareerWhyUsIcon8.png";
import CareerWhyUsIcon9 from "../../images/CareerWhyUsIcon9.png";
import CareerWhyUsIcon10 from "../../images/CareerWhyUsIcon10.png";
import CareerWhyUsIcon11 from "../../images/CareerWhyUsIcon11.png";
import CareerWhyUsIcon12 from "../../images/CareerWhyUsIcon12.png";

const CareerWhyUs = () => {
  const reasons = [
    CareerWhyUsIcon1,
    CareerWhyUsIcon2,
    CareerWhyUsIcon3,
    CareerWhyUsIcon4,
    CareerWhyUsIcon5,
    CareerWhyUsIcon6,
    CareerWhyUsIcon7,
    CareerWhyUsIcon8,
    CareerWhyUsIcon9,
    CareerWhyUsIcon10,
    CareerWhyUsIcon11,
    CareerWhyUsIcon12,
  ];
  return (
    <section className="py-5 my-5 container">
      <h2 className="mb-4">
        Why You’d Love to{" "}
        <span className="border border-primary rounded shadow-primary px-3">
          Work
        </span>{" "}
        with us
      </h2>
      <p className="fs-5 mb-5">
        We do our best to offer a healthy working environment to all our
        invaluable employees so that you can render the best results. Liftup
        also offers attractive benefits that make us one of the best companies
        to work with.
      </p>

      <div
        className="container p-5"
        style={{
          backgroundImage: `url(${CareerWhyUsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {reasons.map((i) => (
            <div key={i} className="col-6 col-md-4 col-lg-3">
              <img src={i} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerWhyUs;
