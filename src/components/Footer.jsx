import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import Fb from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";
import Linkedin from "../images/linkedin.svg";
import footerImage from "../images/footer.png";

const Footer = () => {
  return (
    <footer
      className="pt-5 border-3 border-dark border-top"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${footerImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom right",
      }}
    >
      <div className="px-3 px-lg-5">
        <div className="row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <img src={Logo} alt="Liftup Studio" height={50} />
            <p className="my-4">
              Liftup, founded in 2022, is a game development company that a
              dynamic group of technical experts established. Our team develops
              our own Android and IOS games and creates world-class content,
              excellent services, high-quality graphics, and result-oriented
              solutions on time and within your budget.
            </p>
            <div className="d-flex align-items-center gap-3 gap-lg-4">
              <a target={"_blank"} href="https://www.facebook.com/liftupstudio">
                <img src={Fb} />
              </a>
              <a target={"_blank"} href="https://twitter.com/liftupstudio">
                <img src={Twitter} />
              </a>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/company/cross-jump/"
              >
                <img src={Linkedin} />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-5 mb-lg-0">
            <h6 className="text-primary ps-3">Company</h6>
            <ul className="nav flex-column ">
              <li className="nav-item">
                <Link className="nav-link link-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" to="process">
                  Our Process
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" to="infrastructure">
                  Key Infrastructure
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" to="engagement">
                  Engagement Model
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" to="career">
                  We are Hiring
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" to="about">
                  About Liftup Studio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" to="contact">
                  Lets Talk
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 mb-5 mb-lg-0">
            <h6 className="text-primary ps-3">Our Location</h6>
            <ul className="nav flex-column ">
              <li className="nav-item">
                <a className="nav-link link-light">
                  Office # 611, 6th Floor - High-Q Tower, Jail Road, Gulberg 5,
                  Lahore , Pakistan
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="text-primary ps-3">Contact Us</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link link-light">contact@liftup.studio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  link-light">+92-3224347724</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center border-3 border-dark border-top mt-5 p-3 mb-0">
        © All rights reserved.{" "}
        <span className="text-primary">Liftup Studio</span>
      </p>
    </footer>
  );
};

export default Footer;
