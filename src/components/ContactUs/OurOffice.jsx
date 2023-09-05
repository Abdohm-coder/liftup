import React from "react";
import LocationImage from "../../images/location.png";
import CallIcon from "../../images/call-icon.svg";
import EmailIcon from "../../images/email-icon.svg";
import LocationIcon from "../../images/location-icon.svg";

const OurOffice = () => {
  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        Our{" "}
        <span className="border border-primary shadow-primary rounded px-3">
          Office
        </span>
      </h2>
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <img src={LocationImage} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <h1 className="display-3 mb-4">Lahore, Pakistan</h1>
          <div className="d-flex align-items-start gap-2">
            <img src={LocationIcon} className="mt-1" />
            <p className="fs-5">
              Office # 611, 6th Floor - High-Q Tower, Jail Road, Gulberg 5,
              Lahore , Pakistan
            </p>
          </div>
          <div className="d-flex flex-wrap gap-3 gap-lg-5">
            <p className="fs-5 mx-auto mx-lg-0">
              <img src={CallIcon} /> +92-3224347724
            </p>
            <p className="fs-5 mx-auto mx-lg-0">
              <img src={EmailIcon} /> contact@liftup.studio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
