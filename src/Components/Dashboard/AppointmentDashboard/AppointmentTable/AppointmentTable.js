import React, { useEffect, useState } from "react";
import "./AppointmentTable.css";

const AppointmentTable = ({ value }) => {
  const selectedDate = value.toDateString();

  const [dateValue, setDateValue] = useState({});
  const [patientInfo, setPatientInfo] = useState([]);

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
      .then((data) => setPatientInfo(data));
  }, [dateValue]);

  return (
    <div className="pt-5 mt-5">
      <div className="table-info d-flex justify-content-around">
        <h5>Appointments</h5>
        <h5>{selectedDate}</h5>
      </div>
      {patientInfo.length > 0 ? (
        <table class="table borderless text-center">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Doctor</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {patientInfo.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>Dr. {data.doctor}</td>
                <td>{data.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center pt-5 mt-5 text-danger">No Bookings Today</h1>
      )}
    </div>
  );
};

export default AppointmentTable;
