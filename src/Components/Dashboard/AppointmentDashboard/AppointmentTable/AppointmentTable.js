import React, { useEffect, useState } from "react";
import "./AppointmentTable.css";
import moment from "moment";
import Loader from "../../../../images/loader.gif";
import Swal from "sweetalert2";

const AppointmentTable = ({ value }) => {
  const selectedDate = value.toDateString();

  const [dateValue, setDateValue] = useState({});
  const [patientInfo, setPatientInfo] = useState([]);
  const [loader, setLoader] = useState(true);
  const [updated, setUpdated] = useState(false);

  if (selectedDate !== dateValue.date) {
    setDateValue({ date: selectedDate });
  }

  useEffect(() => {
    fetch("http://localhost:5000/appointmentbydate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dateValue),
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientInfo(data);
        setLoader(false);
      });
  }, [dateValue, updated]);

  const alertToChange = (data) => {
    Swal.fire({
      title: "Select field validation",
      text: "Modal with a custom image.",
      icon: "warning",
      input: "select",
      inputOptions: {
        pending: "pending",
        visited: "visited",
        cancelled: "cancelled",
      },
      inputPlaceholder: "Select Actions",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (
            value === "pending" ||
            value === "cancelled" ||
            value === "visited"
          ) {
            resolve(
              fetch("http://localhost:5000/changeaction", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ id: data._id, action: value }),
              }).then((response) => {
                setUpdated(!updated);
                if (response.status === 200) {
                  Swal.fire({
                    position: "center",
                    title: "Action has been changed!",
                    text: `Action is changed to ${value} for ${data.name}`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                } else {
                  Swal.fire({
                    position: "center",
                    title: "Action cannot be changed right now!",
                    text: `Action isn't changed to ${value} for ${data.name}`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                }
              })
            );
          } else {
            resolve("You need to select an Action :)");
          }
        });
      },
    });
  };

  return (
    <div className="containerOfAllAppoint">
      <div className="table-info d-flex justify-content-between">
        <h5>Appointments</h5>
        <h5 className="text-secondary">
          {moment(selectedDate).format("DD, MMMM YYYY")}
        </h5>
      </div>
      <div className="mainDashBodyContentArea" style={{ maxHeight: "74vh" }}>
        {loader ? (
          <img
            className="img-fluid"
            style={{ marginLeft: "20vh" }}
            src={Loader}
            alt=""
          />
        ) : (
          <>
            {patientInfo.length > 0 ? (
              <table className="table borderless">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patientInfo.map((data) => (
                    <tr key={data._id}>
                      <td>{data.name}</td>
                      <td>Dr. {data.doctor}</td>
                      <td>+{data.number}</td>
                      <td onClick={(e) => alertToChange(data)}>
                        <p
                          className={`actionButnOfAppt ${
                            data.action === "visited" && "bg-success"
                          } ${data.action === "cancelled" && "bg-danger"}`}
                        >
                          {data.action}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h3 className="text-center pt-5 pb-5 text-danger">
                No Appointments on{" "}
                {moment(selectedDate).format("DD, MMMM YYYY")}{" "}
              </h3>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentTable;
