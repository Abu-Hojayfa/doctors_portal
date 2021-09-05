import React from "react";
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faNotesMedical,
  faUserFriends,
  faCalendarAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
      <div className="dashboard-container">
        <p>
          <FontAwesomeIcon style={{marginRight:'10px'}} icon={faBars} /> Dashboard
        </p>
        <p>
          <FontAwesomeIcon style={{marginRight:'10px'}} icon={faCalendarAlt} /> Appointment
        </p>
        <p>
          <FontAwesomeIcon style={{marginRight:'10px'}} icon={faUserFriends} /> Patients
        </p>
        <p>
          <FontAwesomeIcon style={{marginRight:'10px'}} icon={faNotesMedical} />
          Prescription
        </p>
        <p>
          <FontAwesomeIcon style={{marginRight:'10px'}} icon={faCog} />
          Setting
        </p>
      </div>
  );
};

export default Sidebar;
