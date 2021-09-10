import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainDashTop from "./MainDashTop/MainDashTop";
import MainDashBody from "./MianDashBody/MainDashBody";

const MainDashboard = () => {
  const [allAppoints, setAllAppoints] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://doctors-portaal.herokuapp.com/allappoints")
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
          <MainDashTop allAppoints={allAppoints} />
          <MainDashBody allAppoints={allAppoints} loader={loader} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
