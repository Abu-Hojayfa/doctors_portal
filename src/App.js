import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import AppointmentDashboard from "./Components/Dashboard/AppointmentDashboard/AppointmentDashboard";
import Home from "./Components/Home/Home/Home";


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
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/dashboard">
          <MainDashboard />
        </Route>
        <Route path="/allappointments">
          <AppointmentDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
