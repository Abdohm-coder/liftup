import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="container text-center d-flex flex-column justify-content-center" style={{ height: "50vh" }}>
      <h1 className="display-1 text-primary">404</h1>
      <p className="fs-5">Page Not Found</p>
      <Link to="/">Go Back to Home</Link>
    </section>
  );
};

export default NotFoundPage;
