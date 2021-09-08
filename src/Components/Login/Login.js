import React, { useState } from "react";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginImg from "../../images/Group 140.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [seePass, setSeePass] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="d-flex loginContainer">
      <div className="w-50">
        <div className="formOfSignUpIn">
          <h2>Login</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
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
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="pt-5">
                <label className="text-dark">Email</label>
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
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
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p className="text-dark pt-4">
            {isLogin ? "New User" : "Already have an Account"}?
            <span
              onClick={(e) => setIsLogin(!isLogin)}
              style={{ color: "#008fee", cursor: "pointer", fontSize: "18px" }}
            >
              {" "}
              {isLogin ? "Create Account" : "Login"}
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
