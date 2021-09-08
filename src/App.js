import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import Patients from "./Components/Dashboard/Patients/Patients";
import AppointmentDashboard from "./Components/Dashboard/AppointmentDashboard/AppointmentDashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/LoginEssential/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/appointment">
          <Appointment />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <MainDashboard />
        </PrivateRoute>
        <PrivateRoute path="/allappointments">
          <AppointmentDashboard />
        </PrivateRoute>
        <PrivateRoute path="/allpatients">
          <Patients />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
