import React from "react";

import faqImage from "../images/faq.png";

const FAQ = () => {
  const faqs = [
    {
      qus: "Other than developing games, do you have your own games?",
      ans: "Yes, we work as a Mobile games publisher and launch our own Android and IOS games too.",
    },
    {
      qus: "What is the difference between native and hybrid applications?",
      ans: "Native apps are written specifically for one operating system, such as Android or iOS. Hybrid apps have some native code but rely on programming languages that all operating systems understand. Liftup offers development services for both hybrid and native apps. Because there are advantages to both approaches, hybrid apps can be faster and more cost-effective to deploy across multiple mobile operating systems. In contrast, native apps typically run smoother and faster.",
    },
    {
      qus: "How to start a game development project?",
      ans: "To start your game development project, you need an initial spark or core idea that our team will work on to become an addictive gaming experience. Once you put your game development project in the creative hands of our game engineers, Liftup will help you through the final stages of publishing your game and going live online.",
    },
    {
      qus: "What information do I need to get a quote?",
      ans: "If you have one, you will need to provide a GDD (Game Design Document). Then you need to write an email explaining your idea or concept or call and discuss it directly with our team. For more information, contact contact@liftup.studio or call on +971-543256936.",
    },
    {
      qus: "What process does game development involve?",
      ans: "Our mobile game development studio categorizes the entire process of mobile game evolution into pre-production, production, and post-production. Pre-production includes game concepts and themes, a storyline, creating a project plan, and architectural design. Manufacturing includes designing, development, testing, and QA. Post-production includes deployment and maintenance of your game. ",
    },
    {
      qus: "What makes your game development company different?",
      ans: "Our team comprises great video game designers and developers who are experts in their respective fields. They create top-notch epic games that are as visually stunning as they are engaging. Emerging as a new video game company, Liftup is proud to have customers worldwide with 100% customer satisfaction. ",
    },
    {
      qus: "What does it cost to create a video game?",
      ans: "Creating a video game typically takes anywhere from a month to several years. Hire a video game developer to start your project. So, in a nutshell, a game can cost anywhere from $500 for a simple version with limited features to $50,000 for a massive action-packed game. We launch our Games for Android and iOS and develop games for our clients with certified developers and video game graphic designers who can help you develop your game.",
    },
    {
      qus: "Will my video game app idea be kept confidential?",
      ans: "Yes, it is. We take great caution when dealing with your project and follow a strict confidentiality policy. Under no circumstances will we share your credentials or any information related to your idea with any third party.",
    },
  ];
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <img src={faqImage} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="mb-4">
            Some of our <span className="text-primary">Frequently</span> asked
            questions
          </h1>

          <div className="accordion accordion-flush" id="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item bg-black border-dark">
                <h2 className="accordion-header" id={`flush-heading${index}`}>
                  <button
                    className="accordion-button collapsed bg-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                  >
                    {faq.qus}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq-accordion"
                >
                  <div className="accordion-body bg-black text-white">
                    <p className="fs-5">{faq.ans}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
