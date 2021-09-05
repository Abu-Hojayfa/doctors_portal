import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='mt-5 contact-container'>
      <div className="contact-head text-center mt-5">
        <h4>CONTACT US</h4>
        <h2>Always Connect With US</h2>
      </div>
      <div className='row m-0 mb-5 pb-5'>
        <form className='col-sm-10 col-md-6 m-auto contactForm' action="" method="post">

          <div className="form-group mt-5">
            <input type="text" className="form-control p-2" name="name" required="" placeholder="Name*" data-form-field="Name" />
          </div>

          <div className="form-group mt-3">
            <input type="email" className="form-control p-2" name="email" required="" placeholder="Email*" data-form-field="Email" />
          </div>

          <div className="form-group mt-3">
            <input type="tel" className="form-control p-2" name="tel" required="" placeholder="Phone*" data-form-field="Phone" />
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
          </div>
          <button className="btn contact-submit  align-content-center mb-2">
            SUBMIT
          </button>
        </form>
      </div>
    </section> 
  );
};

export default Contact;