import React from "react";
import ProcessStepsBg from "../../images/processStepsBg.png";
import ProcessIcon1 from "../../images/processIcon1.png";
import ProcessIcon2 from "../../images/processIcon2.png";
import ProcessIcon3 from "../../images/processIcon3.png";
import ProcessIcon4 from "../../images/processIcon4.png";
import ProcessIcon5 from "../../images/processIcon5.png";
import ProcessIcon6 from "../../images/processIcon6.png";
import Number1 from "../../images/01Primary.svg";
import Number2 from "../../images/02Primary.svg";
import Number3 from "../../images/03Primary.svg";
import Number4 from "../../images/04Primary.svg";
import Number5 from "../../images/05Primary.svg";
import Number6 from "../../images/06Primary.svg";
import Number7 from "../../images/07Primary.svg";

const ProcessSteps = () => {
  const steps = [
    {
      icon: ProcessIcon1,
      number: Number1,
      title: "Idea",
      desc: "Everything starts with an idea. We know your ideas are great and bring our expertise and experience to explore and validate your ideas.",
      list: [
        "Requirement Analysis",
        "Competitor Analysis",
        "Product Roadmap",
        "Features Enhancement",
        "Tech Stack",
        "Approx Product Estimation",
      ],
    },
    {
      icon: ProcessIcon1,
      number: Number2,
      title: "Analysis and strategy",
      desc: "Our dedicated analysts and designers work together to conceive, refine, refine and document your concept. They formulate a project strategy based on your requirements. A project breakdown, resource allocation, project schedule, and budget are defined, and a communication plan with stakeholders is established. Whether developing from scratch or coming to us with a half-coded product, our managers evaluate everything and create a roadmap that leads to maximum efficiency.",
      list: [
        "Requirement Analysis",
        "Competitor Analysis",
        "Product Roadmap",
        "Features Enhancement",
        "Tech Stack",
        "Approx Product Estimation",
      ],
    },
    {
      icon: ProcessIcon2,
      number: Number3,
      title: "Wireframes and prototypes",
      desc: "It is time to create a product outline. Get a clear picture of your game's functionality, look and feel. In layman's language, it can be called a prototype. A wireframe is a visual manual of how the game works and how transactions occur from one part of the game to another. Wireframes serve as a cheap alternative to see the user journey of your game. We cover product flow, interactive clickable prototypes, unlimited changes, and final prototypes.",
      list: [
        "Product Flow",
        "Interactive Clickable Prototype",
        "Unlimited Changes",
        "Final Prototype",
      ],
    },
    {
      icon: ProcessIcon3,
      number: Number4,
      title: "Product design",
      desc: "At this stage, we work on designing the most appealing products for our customers to be the most attractive, convenient, and user-friendly designs. Design backgrounds, in-app transitions, all app/game assets, and the entire app/game UI/UX. Based on these designs, we start the development process. We cover various colors and logos, user-friendly UI design, art & character design, asset design, and unlimited changes. ",
      list: [
        "Colors & Logo Selection",
        "Easy-to-use UI Design",
        "Art & Character Design",
        "Assets Design",
        "Unlimited Changes",
      ],
    },
    {
      icon: ProcessIcon4,
      number: Number5,
      title: "Product development",
      desc: "Now is the time to code. Our professional developers will code the most effective and efficient games based on your requirements. Our project managers make sure that everything is on schedule and there are no delays. They keep you informed throughout the development process. Follow an agile approach to ensure your mobile game is delivered on promised time. We cover structured lightweight coding, the development of features and functions, and code optimization.",
      list: [
        "Structured Light Weight Coding",
        "Features & Functionality Development",
        "Code Optimization",
      ],
    },
    {
      icon: ProcessIcon5,
      number: Number6,
      title: "Quality assurance",
      desc: "In this step, we test the product and go through various rigorous tests to ensure that the product is free of errors and delays. Run your app on different devices and go through different scenarios to see if your game has any bugs. This process ensures the optimal version of the product. After receiving the green light from the test team, the game is ready to launch. We cover documentation and design, functional and non-functional, ad hoc, smoke, compatibility, and security tests.",
      list: [
        "Document & Design Testing",
        "Functional testing",
        "Non-functional testing",
        "Functional testing",
        "Ad- hoc testing",
        "Smoke testing",
        "Compatibility Testing",
        "Security testing",
      ],
    },
    {
      icon: ProcessIcon6,
      number: Number7,
      title: "Release",
      desc: "Now that the game has passed all quality tests, it is time to launch it and make it available to users. We fully support on all platforms, marketing assistance, and subsequent growth hacking. Publish your game to the internet and app stores. In this step, clients usually hire us for all future updates and maintenance of their products. ",
      list: [
        "Product Launch at Multiple AppStores",
        "Future Product Enhancement",
        "On-going Bug Fixes",
        "Post-Support  ",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="text-center">
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
        className="row justify-content-between shift-down"
        style={{
          backgroundImage: `url(${ProcessStepsBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={`col-12 col-lg-6 p-0 ${
              index % 2 ? "shift-down pad-left" : "shift-up pad-right"
            }`}
          >
            <div className="border border-dark border-2 rounded-4">
              <div className="d-flex align-items-center pe-3">
                <img src={step.icon} />
                <div>
                  <h1 className="text-primary">
                    Step <img src={step.number} style={{ height: "3.5rem" }} />
                  </h1>
                  <h5>{step.title}</h5>
                </div>
              </div>
              <div className="px-3">
                <p className="">{step.desc}</p>
                <h6 className="text-primary">What We Cover</h6>
                <ul className="d-flex flex-wrap">
                  {step.list.map((item) => (
                    <li key={item} className="col-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
