import React from "react";
import "./MainDashStyle.css";

const MainDashTop = ({ allAppoints }) => {
  const todays = new Date().toString();
  const newDate =
    todays.split(" ")[0] +
    " " +
    todays.split(" ")[1] +
    " " +
    todays.split(" ")[2] +
    " " +
    todays.split(" ")[3];

  let pendingAppoints = [];
  let todaysPending = [];
  for (let i = 0; i < allAppoints.length; i++) {
    if (allAppoints[i].action === "pending") {
      pendingAppoints = [...pendingAppoints, allAppoints[i]];
    }
    if (allAppoints[i].time === newDate) {
      todaysPending = [...todaysPending, allAppoints[i]];
    }
  }

  return (
    <div className="mainDashTopContainer mb-5">
      <h3 className="pt-4 pb-3">Dashboard</h3>
      <div className="d-flex justify-content-between">
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>
              {pendingAppoints.length >= 0 && pendingAppoints.length < 10
                ? 0
                : ""}
              {pendingAppoints.length}
            </h5>
            <div>
              <p className="pb-1">Pending</p>
              <p>Appointments</p>
            </div>
          </div>
        </div>
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>
              {todaysPending.length >= 0 && todaysPending.length < 10 ? 0 : ""}
              {todaysPending.length}
            </h5>
            <div>
              <p className="pb-1">Today's</p>
              <p>Appointments</p>
            </div>
          </div>
        </div>
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>
              {allAppoints.length >= 0 && allAppoints.length < 10 ? 0 : ""}
              {allAppoints.length}
            </h5>
            <div>
              <p className="pb-1">Total</p>
              <p>Appointments</p>
            </div>
          </div>
        </div>
        <div className="maindashNumTop">
          <div className="d-flex align-items-center">
            <h5>
              {(allAppoints.length + 2) >= 0 && (allAppoints.length + 2) < 10
                ? 0
                : ""}
              {allAppoints.length + 2}
            </h5>
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
