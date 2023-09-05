import React from "react";
import { Link } from "react-router-dom";
import AboutUsSquadImage from "../../images/AboutUsSquad.png";

const AboutUsOurSquad = () => {
  return (
    <section className="py-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="order-2 order-lg-1 col-12 col-lg-7 text-center text-lg-start">
          <div className="container">
            <h1 className="display-4">Our Squad</h1>
            <p className="fs-5">
              With 50+ Years of Combined Game Development experience under our
              Belt , Our Game Production Squad is the best you will find in the
              Business . We have developed Hundreds of games from Scratch and
              have Game Production Managers , Game Designers , Game Modelers ,
              ASO Experts , Game Developers , Multi Player Engineers , DevOPS in
              our Squad . We have developed games from small scale Facebook
              instant games to Large Multi Player Game Titles . Trust Liftup
              Once and you will be trusting Liftup for life for your Game
              Development Needs.
            </p>
            <Link className="btn btn-primary text-white px-4" to="/contact">
              Request Demo
            </Link>
          </div>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-5">
          <img src={AboutUsSquadImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsOurSquad;
