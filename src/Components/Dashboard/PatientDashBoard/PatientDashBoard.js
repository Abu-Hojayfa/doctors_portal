import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./PatientDashBoardStyle.css";

const PatientDashBoard = () => {
  const [myAppoints, setMyAppoints] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myappoints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: sessionStorage.getItem("email") }),
    })
      .then((res) => res.json())
      .then((data) => setMyAppoints(data));
  }, []);

  return (
    <div style={{ backgroundColor: "#e5fcff" }}>
      <div className="container-fluid row m-0 ps-0">
        <div className="col-md-2 ps-0">
          <Sidebar showAll={false} />
        </div>
        <div className="col-md-9 ps-4 pt-5">
          <h3 className="patientDashBoard">My Dashboard</h3>
          <div className="row">
            {myAppoints &&
              myAppoints.map((myAppoint) => (
                <div key={myAppoint._id} className="col-md-3">
                  <div className={`patientAppointCard ${myAppoint.action === "visited" && "bg-success"} ${myAppoint.action === "cancelled" && "bg-danger"}`}>
                    <p
                      style={{ textTransform: "capitalize" }}
                      className={`text-center`}
                    >
                      Appointment is {myAppoint.action}
                    </p>
                    <p>Name: {myAppoint.name}</p>
                    <p>Email: {myAppoint.email}</p>
                    <p>Contact No: +{myAppoint.number}</p>
                    <p style={{ textTransform: "capitalize" }}>
                      Doctor: Dr. {myAppoint.doctor}
                    </p>
                    <p>
                      Visiting Time: {myAppoint.openTime} -{" "}
                      {myAppoint.closeTime}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashBoard;
