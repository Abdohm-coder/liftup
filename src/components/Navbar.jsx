import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid px-3 px-lg-5">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Liftup Studio" height={70} />
        </Link>
        <button
          className="navbar-toggler border-primary shadow-primary rounded-circle border-2 p-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menu-sidebar"
          aria-controls="menu-sidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-end text-bg-dark bg-black"
        tabIndex="-1"
        id="menu-sidebar"
        aria-labelledby="menu-sidebarLabel"
      >
        <div className="offcanvas-header px-4">
          <h5 className="offcanvas-title" id="menu-sidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-0">
          <ul className="nav flex-column">
            <li
              className="nav-item border-bottom border-dark"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link fs-4" to="/">
                Home
              </Link>
            </li>
            <li
              className="nav-item border-bottom border-dark"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link fs-4" to="/process">
                Our Process
              </Link>
            </li>
            <li
              className="nav-item border-bottom border-dark"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link fs-4" to="/infrastructure">
                Key Infrastructure
              </Link>
            </li>
            <li
              className="nav-item border-bottom border-dark"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link fs-4" to="/engagement">
                Engagement Model
              </Link>
            </li>
            <li
              className="nav-item border-bottom border-dark"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link fs-4" to="/career">
                We are Hiring
              </Link>
            </li>
            <li
              className="nav-item border-bottom border-dark"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link fs-4" to="/about">
                About Liftup Studio
              </Link>
            </li>
            <li
              className="nav-item border-bottom border-dark"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link fs-4" to="/contact">
                Lets Talk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <li className="nav-item border-bottom border-dark">
  <a
    className="nav-link fs-4 dropdown-toggle d-flex align-items-center justify-content-between"
    data-bs-toggle="collapse"
    href="#solutionSubMenu"
    role="button"
  >
    Solution
  </a>
  <div className="collapse" id="solutionSubMenu">
    <ul className="nav flex-column">
      <li className="nav-item" data-bs-dismiss="offcanvas">
        <a className="nav-link" href="#">
          Solution 1
        </a>
      </li>
      <li className="nav-item" data-bs-dismiss="offcanvas">
        <a className="nav-link" href="#">
          Solution 2
        </a>
      </li>
      <li className="nav-item" data-bs-dismiss="offcanvas">
        <a className="nav-link" href="#">
          Solution 3
        </a>
      </li>
    </ul>
  </div>
</li>; */
}
