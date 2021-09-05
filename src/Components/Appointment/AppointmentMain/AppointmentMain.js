import React from 'react';
import './AppointmentMain.css';
import chair from '../../../images/Mask Group 1.png';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


const AppointmentMain = ({onChange, value}) => {

  return (
    <main style={{height:'700px', marginRight:'0px'}} className="row appointmentContainer  d-flex align-items-center">
    <div className="col-md-5 offset-md-1 infoClass">
      <h1  style={{color:'#3A4256',paddingLeft:'100px',paddingBottom:'50px'}}>
        Appointment
      </h1>

      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>

    <div className="col-md-6">
      <img src={chair} alt="" className="img-fluid"/>
    </div>
</main>
  );
};

export default AppointmentMain;