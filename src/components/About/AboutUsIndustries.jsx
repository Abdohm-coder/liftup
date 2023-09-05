import React from "react";
import AboutUsIndustriesBg from "../../images/AboutUsIndustriesBg.png";
import Icon1 from "../../images/01Primary.svg";
import Icon2 from "../../images/02Primary.svg";
import Icon3 from "../../images/03Primary.svg";
import Icon4 from "../../images/04Primary.svg";
import Icon5 from "../../images/05Primary.svg";
import Icon6 from "../../images/06Primary.svg";
import Icon7 from "../../images/07Primary.svg";
import Icon8 from "../../images/08Primary.svg";
import Icon9 from "../../images/09Primary.svg";
import Icon10 from "../../images/10Primary.svg";

const AboutUsIndustries = () => {
  const industries = [
    { icon: Icon1, title: "Gaming and entertainment" },
    { icon: Icon2, title: "Banking" },
    { icon: Icon3, title: "Education" },
    { icon: Icon4, title: "Media Industry" },
    { icon: Icon5, title: "Healthcare" },
    { icon: Icon6, title: "Heavy industries" },
    { icon: Icon7, title: "Pharmaceutical" },
    { icon: Icon8, title: "Real estate" },
    { icon: Icon9, title: "Automotive" },
    { icon: Icon10, title: "Electronics" },
  ];

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        <span className="border border-primary rounded shadow-primary px-3">Industries</span> we work with
      </h2>
      <p className="fs-5 mb-5">
        We create games for various companies and industries. Other than that, we publish our own Android and IOS games.
        We have a tremendous experience with the latest and most relevant cases, from automotive to aircraft projects.
        Take a look at our core industry outlook here.
      </p>

      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${AboutUsIndustriesBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row justify-content-center pt-3 m-0">
          {industries.map((i) => (
            <div key={i} className="col-6 col-lg-3 col-20 mb-3">
              <img src={i.icon} className="" />
              <h5>{i.title}</h5>
            </div>
          ))}
          {/* {industries1.map((i) => (
            <div className="col-6 col-md-3">
              <img src={i.icon} className="mb-2" />
              <h5>{i.title}</h5>
            </div>
          ))}
        </div>
        <div className="row m-0">
          {industries2.map((i) => (
            <div className="col-6 col-md-3">
              <img src={i.icon} className="mb-2" />
              <h5>{i.title}</h5>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default AboutUsIndustries;
