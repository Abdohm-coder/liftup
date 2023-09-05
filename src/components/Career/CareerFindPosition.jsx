import React from "react";
import { Link } from "react-router-dom";

const CareerFindPosition = () => {
  const positions = [
    { title: "Business Analyst", experience: "3-6 Years", openings: 3 },
    { title: "Content Writer", experience: "3-6 Years", openings: 3 },
    { title: "IOT Engineer", experience: "3-6 Years", openings: 3 },
    { title: "Talent Acquisition", experience: "3-6 Years", openings: 3 },
    { title: "3D Designer", experience: "3-6 Years", openings: 3 },
    { title: "UI / UX Designer", experience: "3-6 Years", openings: 3 },
    { title: "Unreal Developer", experience: "3-6 Years", openings: 3 },
    { title: "Unity 3D Developer", experience: "3-6 Years", openings: 3 },
    { title: "Laravel Developer", experience: "3-6 Years", openings: 3 },
    { title: "Project Manager", experience: "3-6 Years", openings: 3 },
    { title: "IOS Developer", experience: "3-6 Years", openings: 3 },
    { title: "Android Developer", experience: "3-6 Years", openings: 3 },
  ];
  return (
    <section className="py-5 my-5 px-3 px-lg-5" id="find-opening-section">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
        <div>
          <h2 className="mb-2">
            Let’s Find you an <span className="border border-primary rounded shadow-primary px-3">Open</span> Position
          </h2>
          <p className="fs-5">Find the right job for you. Based on your skill sets</p>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {positions.map((p) => (
          <div key={p} className="rounded border-primary-light shadow-primary p-3 flex-fill">
            <div className="d-flex justify-content-between gap-3">
              <h5>{p.title}</h5>
            </div>
            <div className="d-flex justify-content-between gap-3">
              <p className="">Experience: {p.experience}</p>
              <p className="">Opening: {p.openings}</p>
            </div>
            <Link className="btn btn-sm btn-primary text-white" to="/contact">
              APPLY NOW
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFindPosition;
