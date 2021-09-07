import React from "react";
import "./Login.css";
import LoginImg from "../../images/Group 140.png";

const Login = () => {
  return (
    <div className="d-flex loginContainer">
      <div className="w-50">hello</div>
      <div className="flex-shrink-2">
        <img className="img-fluid imageOfLogin" src={LoginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
