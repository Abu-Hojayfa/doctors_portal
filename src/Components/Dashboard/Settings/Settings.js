import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Settings.css";

const Settings = () => {
  const [emailCheck, setEmailCheck] = useState();
  const [emailData, setEmailData] = useState();

  const onBlurHandle = (e) => {
    const email = e.target.value;
    const emailChecked =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase()
      );
    setEmailCheck(emailChecked);
    if (emailCheck){
      setEmailData(email);
    }
  };
  const addANewAdmin = () => {
    console.log(emailCheck);
    console.log(emailData);
  };
  return (
    <div style={{ backgroundColor: "#e5fcff" }}>
      <div className="container-fluid row m-0 ps-0">
        <div className="col-md-2 ps-0">
          <Sidebar />
        </div>
        <div className="col-md-9 ps-4 pt-5">
          <div className="row mt-5 pt-5">
            <div className="col-md-6">
              <div className="formOfAddAdmin">
                <h3>Add a New Admin</h3>
                <input
                  onChange={(e) => onBlurHandle(e)}
                  className="form-control p-2 mb-3"
                  type="email"
                  placeholder="Add a new Admin Email"
                />
                <p className="text-danger ">
                  {emailCheck === false ? "Please Input a valid Mail and try again." : ""}{" "}
                </p>
                <button
                  onClick={(e) => {
                    emailCheck && addANewAdmin();
                  }}
                  className={`btn submitingButn mb-3 ${
                    !emailCheck && "wrongEmail"
                  }`}
                >
                  Add an Admin
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="allAdmin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
