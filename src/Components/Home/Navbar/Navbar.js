import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav Class="navbar navbar-expand-lg navbar-light">
      <div Class="container-fluid mx-5">
        <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span Class="navbar-toggler-icon"></span>
        </button>
        <div Class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul Class="navbar-nav ms-auto mb-2 mb-lg-0 navbar-text ">
            <li Class="nav-item ">
              <Link to='/home' Class="nav-link ms-5 active" aria-current="page">Home</Link>
            </li>
            <li Class="nav-item">
              <Link to='/about' Class="nav-link ms-5 ">About</Link >
            </li>
            <li Class="nav-item">
              <Link to='/services' Class="nav-link ms-5 ">Dental Services</Link>
            </li>
            <li Class="nav-item">
              <Link to='/reviews' Class="nav-link ms-5 text-white">Reviews</Link>
            </li>
            <li Class="nav-item">
              <Link to='/blog' Class="nav-link ms-5 text-white">Blog</Link>
            </li>
            <li Class="nav-item">
              <Link to='/contact' Class="nav-link ms-5 text-white">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;