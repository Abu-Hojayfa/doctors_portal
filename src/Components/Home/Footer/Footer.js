import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className="backTop">
        <a href="#top">Go To Top</a>
      </div>
      <div style={{width:'88%'}} className="row pt-3 m-0 m-auto">
        <div className="col-md-3">
          <div className="huda mt-5 pt-5">
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
            <p>Check Up</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="huda">
            <h5>Services</h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
            <p>Check Up</p>
            <p>Check Up</p>
            <p>Check Up</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="huda">
            <h5>Oral Health</h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
            <p>Check Up</p>
            <p>Check Up</p>
            <p>Check Up</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="huda">
            <h5>Our Address</h5>
            <p>New York - 101010 Hudason <br/> Yards</p>
            <FontAwesomeIcon className='social-icons first-icon' icon={faFacebook} />
            <FontAwesomeIcon className='social-icons' icon={faGoogle} />
            <FontAwesomeIcon className='social-icons' icon={faTwitter} />
            <div className="mt-5">
              <p>Call Now</p>
              <button className='btn call-btn'>+202 555 0295</button>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center copy-right pt-5'>
        Copyright {(new Date()).getFullYear()} All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;