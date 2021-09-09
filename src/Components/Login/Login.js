import React, { useState } from "react";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginImg from "../../images/Group 140.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  signInWithMail,
  createUserWithMail,
} from "./LoginEssential/LoginMethod";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [seePass, setSeePass] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const signInWithMailAndRederict = () => {
    signInWithMail(userInfo , history, from);

  };

  return (
    <div className="d-flex loginContainer">
      <div className="w-50">
        <div className="formOfSignUpIn">
          <h2>{isLogin ? "Create Account" : "Login"}</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "An Email Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Password Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setUserInfo(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="pt-5">
                {isLogin && (
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label className="text-dark">First Name</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-dark">Last Name</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                )}
                <label className="text-dark">Email</label>
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  required
                />
                <ErrorMessage
                  className="text-danger"
                  name="email"
                  component="div"
                />
                <label className="text-dark mt-4">
                  Password
                  <FontAwesomeIcon
                    onClick={(e) => setSeePass(!seePass)}
                    className="toggle-btn-for-pass"
                    icon={seePass ? faEye : faEyeSlash}
                  />
                </label>
                <Field
                  className="form-control"
                  type={seePass ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />{" "}
                <ErrorMessage
                  className="text-danger"
                  name="password"
                  component="div"
                />
                <button
                  className="btn submitingButn mt-4"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) =>
                    isLogin
                      ? createUserWithMail(userInfo)
                      : signInWithMailAndRederict()
                  }
                >
                  {isLogin ? "Create" : "Sign in"}
                </button>
              </Form>
            )}
          </Formik>
          <p className="text-dark pt-4">
            {isLogin ? "Already have an Account" : "New User"}?
            <span
              onClick={(e) => {
                setIsLogin(!isLogin);
                setSeePass(false);
              }}
              style={{ color: "#008fee", cursor: "pointer", fontSize: "18px" }}
            >
              {" "}
              {isLogin ? "Login" : "Create Account"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex-shrink-2">
        <img className="img-fluid imageOfLogin" src={LoginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
