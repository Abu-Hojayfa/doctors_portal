import React, { useEffect, useState } from "react";
import "./AppointmentTable.css";
import moment from "moment";
import Loader from "../../../../images/loader.gif";
import swal from "sweetalert";

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

  const alertToChange = (data) => {
    swal({
      title: 'Are you Sure?',
      text: `Changing Action for ${data.name} !`,
      content: "input",
      button: {
        text: "Change!",
        closeModal: false,
      },
    })
      .then((name) => {
        if (!name) throw null;

        return fetch(
          `https://itunes.apple.com/search?term=${name}&entity=movie`
        );
      })
      .then((results) => {
        return results.json();
      })
      .then((json) => {
        const movie = json.results[0];

        if (!movie) {
          return swal("No movie was found!");
        }

        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;

        swal({
          title: "Top result:",
          text: name,
          icon: imageURL,
        });
      })
      .catch((err) => {
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
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
                    <td onClick={(e)=>alertToChange(data)}>{data.action}</td>
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
