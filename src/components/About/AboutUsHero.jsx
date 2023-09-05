import React from "react";
import { Link } from "react-router-dom";
import AboutUsHeroImage from "../../images/AboutUsHero.png";

const AboutUsHero = () => {
  return (
    <section className="pb-5 my-5 px-3 px-lg-5 text-center">
      <div className="row align-items-center">
        <div className="order-2 order-lg-1 col-12 col-lg-6 text-center text-lg-start">
          <div className="container">
            <h1 className="display-4">About Us</h1>
            <p className="fs-5">
              <span className="text-primary">Liftup</span>, founded in 2022, is
              a game development company that a dynamic group of technical
              experts established. Our team develops our own Android and IOS
              games and includes industry-leading game developers, AR/VR
              specialists, designers, artists, animators, and technology
              experts. We believe that continuous innovation is the key to
              creating successful games. As an industry-leading software
              development company, we are passionate about experimenting with
              the latest technologies and combining creative vision, technical
              expertise, and project management capabilities to ensure customer
              satisfaction.
            </p>
            <Link className="btn btn-primary text-white px-4" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="order-1 order-lg-2 col-12 col-lg-6">
          <img src={AboutUsHeroImage} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
