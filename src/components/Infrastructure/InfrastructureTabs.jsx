import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import Icon1 from "../../images/InfrastructureTabIcon1.png";
import Icon2 from "../../images/InfrastructureTabIcon2.png";
import Icon3 from "../../images/InfrastructureTabIcon3.png";
import Bg1 from "../../images/InfrastructureTab1.png";
import Bg2 from "../../images/InfrastructureTab2.png";
import Bg3 from "../../images/InfrastructureTab3.png";

const InfrastructureTabs = () => {
  const tabs = [
    {
      icon: Icon1,
      bg: Bg1,
      title: "Experienced Team",
      desc: "Reimagine your business with our Mobile App Development Services.",
    },
    {
      icon: Icon2,
      bg: Bg2,
      title: "Best Tools",
      desc: "Looking to bring your high-quality Scalable apps in real life.",
    },
    {
      icon: Icon3,
      bg: Bg3,
      title: "Multiple Platforms",
      desc: "Building custom solutions across Android, iOS, and Native platforms.",
    },
  ];
  return (
    <section className="py-5 my-5 container">
      <div className="row">
        {tabs.map((tab) => (
          <div key={tab} className="col-12 col-lg-4 px-3">
            <div
              className="d-flex align-items-center rounded p-3 mb-3 shadow-primary"
              style={{
                backgroundImage: `url("${tab.bg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={tab.icon} />
              <div>
                <h5>{tab.title}</h5>
                <p className="mb-0">{tab.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureTabs;
