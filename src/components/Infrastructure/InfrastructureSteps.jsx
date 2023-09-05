import React from "react";
import InfrastructureStepsBg from "../../images/InfrastructureStepsBg.png";
import InfrastructureIcon1 from "../../images/InfrastructureIcon1.png";
import InfrastructureIcon2 from "../../images/InfrastructureIcon2.png";
import InfrastructureIcon3 from "../../images/InfrastructureIcon3.png";
import InfrastructureIcon4 from "../../images/InfrastructureIcon4.png";
import InfrastructureIcon5 from "../../images/InfrastructureIcon5.png";
import InfrastructureIcon6 from "../../images/InfrastructureIcon6.png";

const InfrastructureSteps = () => {
  const steps = [
    {
      icon: InfrastructureIcon1,
      title: "Customized demand solution",
      desc: [
        "Custom game development is designing, developing, scaling, integrating, and upgrading solutions to meet the demands and needs of your business. Liftup has all the tools you need to develop the most valuable games with very advanced features. We can meet the requirements of companies of all sizes like small startups, midsize, or enterprise-level companies. Whether your game is for managing B2B, B2C interactions, on-demand solutions, internal operations, gaming apps, etc., we can tailor an app solution to your needs.",
      ],
    },
    {
      icon: InfrastructureIcon2,
      title: "Server management",
      desc: [
        "Servers are used for performance and data storage. However, managing and maintaining your server is very important if it is critical to your game's performance. We will take care of the technical aspects of your app. Liftup is good at maintaining your business processes and everything related to your games, and maintaining and managing your servers is one such task.",
      ],
    },
    {
      icon: InfrastructureIcon3,
      title: "Accompaniment Data Backup Facility",
      desc: [
        "The app's user experience relies on backing up data. Users spend considerable time and effort creating identities, adding data, and customizing app settings and settings. A wise person has a backup plan, and an equally wise developer can back up their data. The backup feature allows users to enjoy a personalized experience across different devices. Liftup handles data backup for all the products we develop, so all our clients can trust their games to store their data. Liftup ensures regular data backups to prevent accidental loss of information and databases.",
      ],
    },
    {
      icon: InfrastructureIcon4,
      title: "Project maintenance",
      desc: [
        "Liftup has the latest technology so that you can keep all versions of your files, existing or outdated. You can get all files from your company. If there is a problem with the new file, at least a backup of the old file is created. You can reference old files, so you do not have to start from scratch. All data is systematically stored on the company's servers, so you can get what you need in seconds.",
      ],
    },
    {
      icon: InfrastructureIcon5,
      title: "Priority check and data backup",
      desc: [
        "Liftup servers can provide offsite backup in the event of a disaster. The company maintains priority data checks and backups of game data. All data that enters the server is first checked and then saved. As a company, we understand the importance and power of data in the world of technology. So you do not need to worry about checking up and backing up your data. ",
      ],
    },
  ];
  return (
    <div className="">
      <div className="container text-center">
        <h2 className="mb-4">
          Our{" "}
          <span className="border border-primary rounded shadow-primary px-3">
            Conducive
          </span>{" "}
          process to fuel your business growth!
        </h2>
        <p className="fs-5 mb-5 pb-5">
          <span className="text-primary">Liftup</span> motive is to provide the
          most extraordinary app and game solutions to help clients achieve
          their goals easily and nurture their businesses. To ensure that we
          create the most refined and effective solution, we follow this curated
          development process:
        </p>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${InfrastructureStepsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row justify-content-between shift-down">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`col-12 col-lg-6 py-4 ${
                  index % 2 ? "shift-down pad-left" : "shift-up pad-right"
                }`}
              >
                <div className="border border-dark border-2 rounded-4 test">
                  <div className="d-flex align-items-center pe-3">
                    <img src={step.icon} />
                    <h5>{step.title}</h5>
                  </div>
                  <div className="px-3">
                    {step.desc.map((item) => (
                      <p key={item} className="">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureSteps;
