import React from "react";
import ProcessImage from "../../images/process.png";

const OurProcess = () => {
  return (
    <section>
      <div className="container">
        <h2 className="mb-4">
          Our <span className="border border-primary rounded shadow-primary px-3">Development Process</span>
        </h2>
      </div>
      <img src={ProcessImage} className="img-fluid" />
    </section>
  );
};

export default OurProcess;
