import React from 'react';
import './Services.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import cleanTeeth from '../../../images/tooth.png';
import Exceptional from './Exceptional';

const Services = () => {
  return (
    <section id='servicesPart' className="mt-5 pt-5 serviceClass">
      <div className="text-center pt-5 mt-5 serviceIntro">
        <h5>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="row m-0 ">

        <div className="col-md-3 serviceInfo">
          <img src={fluoride} alt=""/>
          <h3>Fluoride Treatment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque dolore pariatur facilis dolores aspernatur quos quaerat perspiciatis voluptatibus.</p>
        </div>

        <div className="col-md-3 serviceInfo">
          <img src={cavity} alt=""/>
          <h3>Cavity Filling</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque dolore pariatur facilis dolores aspernatur quos quaerat perspiciatis voluptatibus.</p>
        </div>

        <div className="col-md-3 serviceInfo">
          <img src={cleanTeeth} alt=""/>
          <h3>Teeth Whitening</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque dolore pariatur facilis dolores aspernatur quos quaerat perspiciatis voluptatibus.</p>
        </div>

      </div>
      <Exceptional />
    </section>
  );
};

export default Services;