import React from 'react';
import './BusinessInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneVolume, faUserClock } from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
  return (
    <section className='row mx-0 businessInfoMain '>
      <div className="col-md-4  businessClass d-flex align-items-center justify-content-center">
        <div className='icon'>
          <FontAwesomeIcon icon={faUserClock} />
        </div>
        <div>
          <h6>Opening Hours</h6>
          <p>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. </p>
        </div>
      </div>

      <div className="col-md-4  businessClass d-flex align-items-center justify-content-center">
        <div className='icon'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div>
          <h6>Visit Our Location</h6>
          <p>Brooklyn, NY 10036, US</p>
        </div>
      </div>

      <div className="col-md-4  businessClass d-flex align-items-center justify-content-center">
        <div className='icon'>
          <FontAwesomeIcon icon={faPhoneVolume} />
        </div>
        <div>
          <h6>Contact Us</h6>
          <p>
            +1 9012 78632
          </p>
        </div>
      </div>

    </section>
  );
};

export default BusinessInfo;