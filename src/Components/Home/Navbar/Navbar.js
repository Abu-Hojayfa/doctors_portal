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
              <Link to='/dashboard' Class="nav-link ms-5 ">Dashboard</Link >
            </li>
            <li Class="nav-item">
              <a href='/home#servicesPart' Class="nav-link ms-5 ">Services</a>
            </li>
            <li Class="nav-item">
              <a href='/home#reviews' Class="nav-link ms-5 text-white">Reviews</a>
            </li>
            <li Class="nav-item">
              <a href='/home#blog' Class="nav-link ms-5 text-white">Blog</a>
            </li>
            <li Class="nav-item">
              <a href='/home#contactForm' Class="nav-link ms-5 text-white">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;