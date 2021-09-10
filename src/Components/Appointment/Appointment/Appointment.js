import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import AppointmentMain from '../AppointmentMain/AppointmentMain';
import AppointmentShedule from '../AppointmentShedule/AppointmentShedule';

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{scrollBehavior: "smooth"}}>
      <Navbar />
      <AppointmentMain onChange={onChange} value={value} />
      <AppointmentShedule value={value} />
      <Footer />
    </div>
  );
};

export default Appointment;