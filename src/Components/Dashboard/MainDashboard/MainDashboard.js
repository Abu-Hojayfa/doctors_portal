import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainDashTop from "./MainDashTop/MainDashTop";

const MainDashboard = () => {
  const [allAppoints, setAllAppoints] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allappoints")
      .then((res) => res.json())
      .then((data) => setAllAppoints(data));
  }, []);
  return (
    <div style={{ backgroundColor: "#e5fcff" }}>
      <div className="container-fluid row m-0 ps-0">
        <div className="col-md-2 ps-0">
          <Sidebar />
        </div>
        <div className="col-md-9 ps-4">
          <MainDashTop allAppoints={allAppoints} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
