import React, { useEffect, useState } from "react";
import "./AppointmentTable.css";
import moment from "moment";
import Loader  from '../../../../images/loader.gif';

const AppointmentTable = ({ value }) => {
  const selectedDate = value.toDateString();

  const [dateValue, setDateValue] = useState({});
  const [patientInfo, setPatientInfo] = useState([]);
  const [loader, setLoader] = useState(true);

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
  }, [dateValue]);

  return (
    <div className="containerOfAllAppoint">
      <div className="table-info d-flex justify-content-between">
        <h5>Appointments</h5>
        <h5 className="text-secondary">
          {moment(selectedDate).format("DD, MMMM YYYY")}
        </h5>
      </div>
      {loader ? (
        <img className="img-fluid" style={{ marginLeft: "20vh" }} src={Loader} alt=""  />
      ) : (
        <>
          {patientInfo.length > 0 ? (
            <table className="table borderless">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Schedule Time</th>
                </tr>
              </thead>
              <tbody>
                {patientInfo.map((data) => (
                  <tr key={data._id}>
                    <td>{data.name}</td>
                    <td>Dr. {data.doctor}</td>
                    <td>{data.number}</td>
                    <td>{data.openTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3 className="text-center pt-5 pb-5 text-danger">
              No Appointments on {moment(selectedDate).format("DD, MMMM YYYY")}{" "}
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default AppointmentTable;
