import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const textColor = path === "/appointment" ? "text-secondary" : "text-white";

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid mx-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-text ">
            <li className="nav-item ">
              <Link
                to="/home"
                className="nav-link ms-5 active text-black"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link ms-5 text-secondary">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/appointment" className="nav-link ms-5 text-secondary">
                Appointments
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/home#servicesPart"
                className={`nav-link ms-5 ${textColor}`}
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a href="/home#blog" className={`nav-link ms-5 ${textColor}`}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/home#contactForm"
                className={`nav-link ms-5 ${textColor}`}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
