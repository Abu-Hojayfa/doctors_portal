import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import Patients from "./Components/Dashboard/Patients/Patients";
import AppointmentDashboard from "./Components/Dashboard/AppointmentDashboard/AppointmentDashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/LoginEssential/PrivateRoute";
import Settings from "./Components/Dashboard/Settings/Settings";
import PatientDashBoard from "./Components/Dashboard/PatientDashBoard/PatientDashBoard";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [allAdmins, setAllAdmins] = useState([]);
  const [allAdminReloader, setAllAdminReloader] = useState(false);

  const checkAdmin = sessionStorage.getItem("email");

  fetch("https://doctors-portaal.herokuapp.com/alladmin")
    .then((res) => res.json())
    .then((data) => {
      setAllAdmins(data);
      setAdmins(data);
    });

  useEffect(() => {
    for (let i = 0; i < admins.length; i++) {
      if (admins[i].email === checkAdmin) {
        setIsAdmin(true);
      }
    }
  }, [admins, allAdminReloader, checkAdmin, setAdmins]);

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <PrivateRoute path="/appointment">
          <Appointment />
        </PrivateRoute>

        <PrivateRoute path="/dashboard">
          {isAdmin ? <MainDashboard /> : <PatientDashBoard />}
        </PrivateRoute>

        {isAdmin && (
          <>
            <PrivateRoute path="/allappointments">
              <AppointmentDashboard />
            </PrivateRoute>

            <PrivateRoute path="/allpatients">
              <Patients />
            </PrivateRoute>

            <PrivateRoute path="/settings">
              <Settings
                allAdmins={allAdmins}
                setAllAdminReloader={setAllAdminReloader}
                allAdminReloader={allAdminReloader}
              />
            </PrivateRoute>
          </>
        )}

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
