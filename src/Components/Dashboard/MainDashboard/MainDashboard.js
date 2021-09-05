import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MainDashboard = () => {
  return (
    <div style={{backgroundColor:'#e5fcff'}}>
      <div className="container-fluid row m-0 ps-0">
        <div className="col-md-2 ps-0">
          <Sidebar />
        </div>
        <div className="col-md-9 ps-3">
          
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;