import React from "react";
import { Link } from "react-router-dom";
import HomeHeroImage from "../../images/HomeHero.png";

const HomeHero = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HomeHeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        marginTop: "-100px",
      }}
    >
      <div className="col-12 col-lg-7 ps-3 ps-lg-5">
        <h1 className="display-3 fw-normal">
          Captivate the world through spectacular game design and development
        </h1>
        <p className="fs-5">
          <span className="text-primary">Liftup Studio</span> Studio is a
          startup with a mind for innovative and futuristic gaming that engages
          the player on multiple levels that allow them to explore new and
          exciting places.
        </p>
        <Link className="btn btn-primary text-white px-4" to="/contact">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
