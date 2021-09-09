import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Settings.css';

const Settings = () => {
  return (
    <div style={{ backgroundColor: "#e5fcff" }}>
      <div className="container-fluid row m-0 ps-0">
        <div className="col-md-2 ps-0">
          <Sidebar />
        </div>
        <div className="col-md-9 ps-4 pt-5">
          <div className="row mt-5 pt-5">
            <div className="col-md-6">
              <form className="formOfAddAdmin">
                <h3>Add a New Admin</h3>
                <input className="form-control p-2 mb-3" type="email" required placeholder="Add a new Admin Email" />
                <button className="btn submitingButn mb-3">
                  Add an Admin
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="allAdmin">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
