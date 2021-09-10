import moment from "moment";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar";
import "./PatientDashBoardStyle.css";

const PatientDashBoard = () => {
  const [myAppoints, setMyAppoints] = useState([]);
  const [deleteAppt, setdeleteAppt] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/myappoints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: sessionStorage.getItem("email") }),
    })
      .then((res) => res.json())
      .then((data) => setMyAppoints(data));
  }, [deleteAppt]);

  const handleDelete = (e) => {
    fetch("http://localhost:5000/deleteappointsbyuserreq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e }),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          title: "Your Pending Appointment is Deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setdeleteAppt(!deleteAppt);
      } else {
        Swal.fire({
          position: "center",
          title: "Something Error Happen :(",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

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
                  <div
                    className={`patientAppointCard ${
                      myAppoint.action === "visited" && "bg-success"
                    } ${myAppoint.action === "cancelled" && "bg-danger"}`}
                  >
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
                      Date: {moment(myAppoint.value).format(" DD, MMMM YYYY")}
                    </p>
                    <p>
                      Visiting Time: {myAppoint.openTime} -{" "}
                      {myAppoint.closeTime}
                    </p>
                    {myAppoint.action === "pending" ? (
                      <button
                        onClick={(e) => handleDelete(myAppoint._id)}
                        className=" btn handleDelete   bg-danger"
                      >
                        Delete Appointment
                      </button>
                    ) : (
                      <button className=" btn cantHandle  ">
                        Action is completed
                      </button>
                    )}
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
