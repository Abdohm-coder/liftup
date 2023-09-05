import React, { useEffect } from "react";
import flickityInit from "../../flickityInit";
import game1 from "../../images/Game1.png";
import game2 from "../../images/Game2.png";
import game3 from "../../images/Game3.png";
import game4 from "../../images/Game4.png";

const BestWork = () => {
  useEffect(() => {
    flickityInit("work-carousel");
  });

  const works = [
    {
      image: game1,
      title: "Drug Dealer",
    },
    {
      image: game2,
      title: "Anime High School",
    },
    {
      image: game3,
      title: "Gas Station Simulator",
    },
    {
      image: game4,
      title: "The Window - Scary Horror ",
    },
  ];

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        Some of Our <span className="border border-primary rounded shadow-primary px-3">Best Piece</span> Work
      </h2>
      <div id="work-carousel">
        {works.map((work, index) => (
          <div key={index} className="carousel-cell col-7 col-md-5 col-lg-4 col-xl-3 px-2 px-md-3" key={index}>
            <div className="rounded-4 position-relative">
              <img src={work.image} className="rounded-3 w-100" />
              <p className="fs-5 text-start p-3 position-absolute bottom-0 mb-0 w-100  rounded-top rounded-4  glass">
                {work.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestWork;
