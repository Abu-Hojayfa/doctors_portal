import React, { useEffect, useState } from 'react';
import AppointmentQuary from '../AppointmentQuary/AppointmentQuary';
import './AppointmentShedule.css';

const AppointmentShedule = ({value}) => {
  
  const [availableAppointment, setAvailableApp] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/appointment-schedule')
    .then((res) => res.json())
    .then(data => setAvailableApp(data));
  },[]);

  
  return (
    <section className='schedul-container mb-5'>
      <h2 className='text-center'>Available Appointments on {value.toDateString()}</h2>
      <div className="row m-0">
        {
          availableAppointment.map(data => 
            <div key={data._id} className='col-md-4 '>
              <div className="appSchedule text-center">
                <h3>{data.sub}</h3>
                <h4>{data.openingTime} - {data.closingTime}</h4>
                <p>{data.space} SPACES AVAILABLE</p>  
                <AppointmentQuary openTime={data.openingTime} closeTime={data.closingTime} time={value} trtment ={data.sub} />
              </div>
            </div>
            )
        }
      </div>
    </section>
  );
};

export default AppointmentShedule;