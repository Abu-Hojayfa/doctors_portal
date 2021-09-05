import React from 'react';
import './Appointment.css';
import doctor from '../../../images/appDoc.png';
import { useHistory } from 'react-router';

const Appointment = () => {
  let history = useHistory();
  const makeAppointment=()=> {
    history.push('/appointment');
  };
  return (
    <section className=' appointment-container mt-5 mb-5'>
      <div className="row m-0 appoint-info">
        <div className='col-md-5 appointment-img'>
          <img className='img-fluid' src={doctor} alt=""/>
        </div>

        <div className="col-md-6 appointment-info">
          <h5>APPOINTMENT</h5>
          <h2>Make an appointment <br/> Today</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non illum natus tenetur ratione possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor labore exercitationem in voluptatem earum.</p>
          <button onClick={makeAppointment} className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;