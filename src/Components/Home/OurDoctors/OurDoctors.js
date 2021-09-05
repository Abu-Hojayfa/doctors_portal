import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import doctor from '../../../images/doctor.png';
import './OurDoctor.css';

const OurDoctors = () => {
  return (
    <section className="row m-0 text-center doctors-container">
      <h5>Our Doctors</h5>

      <div className="col-md-3 container">
        <img className='img-fluid' src={doctor} alt=""/>
        <h3>Dr. Caudi</h3>
        <p>
          <FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} /> +61 452 200 126
        </p>
      </div>

      <div className="col-md-3 container">
        <img className='img-fluid' src={doctor} alt=""/>
        <h3>Dr. Caudi</h3>
        <p>
          <FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} /> +61 452 200 126
        </p>
      </div>

      <div className="col-md-3 container">
        <img className='img-fluid' src={doctor} alt=""/>
        <h3>Dr. Caudi</h3>
        <p>
          <FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhoneAlt} /> +61 452 200 126
        </p>
      </div>
    </section>
  );
};

export default OurDoctors;