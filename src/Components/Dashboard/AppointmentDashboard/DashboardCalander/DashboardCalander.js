import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const DashboardCalander = ({onChange, value}) => {
  return (
    <div className='pt-5'>
      <h2 className='pt-2 ps-1 pb-5'>Appointments</h2>
      <Calendar
        onChange={onChange}
        value={value}
      />
      
    </div>
  );
};

export default DashboardCalander;