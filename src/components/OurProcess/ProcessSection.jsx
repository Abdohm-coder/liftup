import React from "react";
import { Link } from "react-router-dom";
import ProcessSectionImage from "../../images/processSection.png";

const ProcessSection = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5">
          <img src={ProcessSectionImage} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-7 text-center text-lg-start">
          <h1 className="display-6">
            The further you go into Technology, the further you advance towards a better, more productive, and
            opportunistic future.
          </h1>
          <Link className="btn btn-primary text-white px-4" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
