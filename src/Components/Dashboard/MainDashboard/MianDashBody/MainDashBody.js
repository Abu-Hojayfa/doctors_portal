import moment from "moment";
import React from "react";
import "./MianDashBodyStyle.css";
import Loader from "../../../../images/loader.gif";

const MainDashBody = ({ allAppoints, loader }) => {
  return (
    <div className="MainAppDashBody">
      <div className="containerOfAllAppoint">
        <h5>Recent Appointments</h5>
        {loader ? (
          <img
            className="img-fluid"
            style={{ marginLeft: "50vh" }}
            src={Loader}
            alt=""
          />
        ) : (
          <>
            {allAppoints.length && (
              <table className="table borderless">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Schedule Time</th>
                    <th scope="col">Name</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allAppoints.map((data, index) => (
                    <tr key={data._id}>
                      <td>{index + 1}</td>
                      <td>{moment(data.time).format("MMM, DD YYYY")}</td>
                      <td>{data.openTime}</td>
                      <td>{data.name}</td>
                      <td>Dr. {data.doctor}</td>
                      <td>+{data.number}</td>
                      <td><p
                        className={`actionButnOfAppt ${
                          data.action === "visited" && "bg-success"
                        } ${data.action === "cancelled" && "bg-danger"}`}
                      >
                        {data.action}
                      </p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainDashBody;
