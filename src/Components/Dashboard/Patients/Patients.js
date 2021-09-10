import React, { useEffect, useState } from "react";
import MainDashBody from "../MainDashboard/MianDashBody/MainDashBody";
import Sidebar from "../Sidebar/Sidebar";


const Patients = () => {
  const [allAppoints, setAllAppoints] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allappoints")
      .then((res) => res.json())
      .then((data) => {
        setAllAppoints(data);
        setLoader(false);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#e5fcff" }}>
      <div className="container-fluid row m-0 ps-0">
        <div className="col-md-2 ps-0">
          <Sidebar showAll={true} />
        </div>
        <div className="col-md-9 ps-4">
          <MainDashBody allAppoints={allAppoints} loader={loader} />
        </div>
      </div>
    </div>
  );
};

export default Patients;
