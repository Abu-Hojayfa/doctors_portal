import React from "react";
import "./MainDashStyle.css";

const MainDashTop = () => {
  return (
    <div className="mainDashTopContainer">
      <h3 className="pt-4 pb-2">Dashboard</h3>
      <div className="d-flex justify-content-between">
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>09</h5>
            <div>
              <p className="pb-1">Pending</p>
              <p>Appointments</p>
            </div>
          </div>
        </div>
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>09</h5>
            <div>
              <p className="pb-1">Today's</p>
              <p>Appointments</p>
            </div>
          </div>
        </div>
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>09</h5>
            <div>
              <p className="pb-1">Total</p>
              <p>Appointments</p>
            </div>
          </div>
        </div>
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>09</h5>
            <div>
              <p className="pb-1">Total</p>
              <p>Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashTop;
