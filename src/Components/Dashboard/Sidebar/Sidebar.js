import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faNotesMedical,
  faUserFriends,
  faCalendarAlt,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Sidebar = () => {
  let history = useHistory();

  const goToPage = (e) => {
    history.push(`/${e}`);
  };
  return (
    <div className="dashboard-container">
      <p onClick={(e) => goToPage("dashboard")}>
        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBars} />{" "}
        Dashboard
      </p>
      <p onClick={(e) => goToPage("allappointments")}>
        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCalendarAlt} />{" "}
        Appointment
      </p>
      <p onClick={(e) => goToPage("allpatients")}>
        <FontAwesomeIcon style={{ marginRight: "0px" }} icon={faUserFriends} />{" "}
        Patients
      </p>
      <p onClick={(e) => goToPage("prescription")}>
        <FontAwesomeIcon
          style={{ marginRight: "10px" }}
          icon={faNotesMedical}
        />
        Prescription
      </p>
      <p onClick={(e) => goToPage("home")}>
        <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faBackspace} />
        Go Back
      </p>
    </div>
  );
};

export default Sidebar;
