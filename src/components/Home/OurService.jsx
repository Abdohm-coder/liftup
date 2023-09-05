import React, { useEffect } from "react";
import flickityInit from "../../flickityInit";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import service4 from "../../images/service4.png";

import serviceIcon1 from "../../images/android.png";
import serviceIcon2 from "../../images/apple.png";
import serviceIcon3 from "../../images/virtual-reality.png";
import serviceIcon4 from "../../images/augmented-reality.png";

const OurService = () => {
  useEffect(() => {
    flickityInit("service-carousel");
  });

  const services = [
    {
      image: service1,
      icon: serviceIcon1,
      title: "Android Game Development",
      desc: "Liftup contains some of the industry's top Android game developers, constantly learning and adapting to the latest trends in Android development and providing the best design and development services for you.",
    },
    {
      image: service2,
      icon: serviceIcon2,
      title: "IOS Game Development",
      desc: "As an experienced iOS game development company, Liftup creates different art assets based on your requirements with our seasoned iOS game developers and designers.",
    },
    {
      image: service3,
      icon: serviceIcon3,
      title: "Virtual Reality",
      desc: "Our core team comprises passionate tech enthusiasts who deeply understand the industry, choose the right target audience and platform for VR products, and build practical and profitable VR experiences.",
    },
    {
      image: service4,
      icon: serviceIcon4,
      title: "Augmented Reality",
      desc: "Liftup is an AR game developer with extensive experience in reality technology, designing and developing fun and exciting augmented reality games for mobiles, smart glasses, and headsets.",
    },
    {
      image: service2,
      icon: serviceIcon4,
      title: "Robox Games Development",
      desc: "Liftup is a one-stop game studio developing Roblox games, including programming, character modeling, level design, skin texturing, and more.",
    },
    {
      image: service1,
      icon: serviceIcon4,
      title: "Facebook Instant Games",
      desc: "Liftups' Facebook game development process includes games featuring social interaction and strategic gameplay experiences. Our game developers are artists in disguise and always aim to create something original, apart from our technical expertise and wealth of knowledge.",
    },
    {
      image: service4,
      icon: serviceIcon4,
      title: "Snapchat Games Development",
      desc: "Liftups' Snapchat game development includes games featuring social interaction and strategic gameplay experiences. Our team includes top game developers who combine creativity, skill, imagination, technology, and a clear focus on the best user experience.",
    },
  ];
  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        Our{" "}
        <span className="border border-primary rounded shadow-primary px-3">
          Services
        </span>
      </h2>

      <div id="service-carousel">
        {services.map((service, index) => (
          <div
            key={index}
            className="carousel-cell col-7 col-md-5 col-lg-4 col-xl-3 px-2 px-md-3 text-start"
            key={index}
          >
            <div className="rounded-3 border-primary-light">
              <img src={service.image} className="rounded-3 w-100" />
              <div className="d-flex align-items-center gap-3 p-3">
                <img src={service.icon} height="30" />
                <h5 className="mb-0">{service.title}</h5>
              </div>
              <p className="p-3 pt-0">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
