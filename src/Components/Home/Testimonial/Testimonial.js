import React from 'react';
import './Testimonial.css';
import herry from '../../../images/herry.png';
import olivia from '../../../images/olivia.png';
import watson from '../../../images/watson.png';

const Testimonial = () => {
  return (
    <section id="reviews" className="testimonial-container mb-5">
      <div className="testimonialInfo">
        <h5>TESTIMONIAL</h5>
        <h2>What's Our Patients <br /> Says</h2>
      </div>

      <div className="row justify-content-between m-0">
        <div className="col-md-4 review">
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laborum ipsam id fugiat officiis dicta maiores. Magni expedita laudantium ullam, praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, saepe!</p>
            <div className="reviewer d-flex justify-content-center align-items-center">
              <img src={olivia} alt="" />
              <div>
                <h5>Olivia Diknson</h5>
                <p>NY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 review">
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laborum ipsam id fugiat officiis dicta maiores. Magni expedita laudantium ullam, praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, saepe!</p>
            <div className="reviewer d-flex justify-content-center align-items-center">
              <img src={watson} alt="" />
              <div>
                <h5>Emma Watson</h5>
                <p>Virginia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 review">
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laborum ipsam id fugiat officiis dicta maiores. Magni expedita laudantium ullam, praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, saepe!</p>
            <div className="reviewer d-flex justify-content-center align-items-center">
              <img src={herry} alt="" />
              <div>
                <h5>Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;