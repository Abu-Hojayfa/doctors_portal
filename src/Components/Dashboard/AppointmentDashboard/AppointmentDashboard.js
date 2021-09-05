import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentTable from './AppointmentTable/AppointmentTable';
import DashboardCalander from './DashboardCalander/DashboardCalander';


const AppointmentDashboard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{backgroundColor:'#e5fcff'}}>
      <div className="container-fluid row m-0 ps-0">
        <div className="col-md-2 ps-0">
          <Sidebar />
        </div>
        <div className="col-md-4 ps-3">
          <DashboardCalander value={value} onChange={onChange} />
        </div>
        <div className="col-md-5 ps-5">
          <AppointmentTable value={value}/>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDashboard;