import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppoinmetQuary.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const AppointmentQuary = ({ trtment, time, openTime, closeTime }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [patientInfo, setPatientInfo] = useState({});

  const onSubmit = (data) => {
    setPatientInfo(data);
  };

  const sendtoDB = () => {
    let info = { ...patientInfo };
    info.sub = trtment;
    info.time = time.toDateString();
    info.openTime = openTime;
    info.closeTime = closeTime;

    fetch("http://localhost:5000/bookticket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your Booking is Complete");
        setIsOpen(false);
      });
  };

  return (
    <div style={{ borderRadios: "10px" }}>
      <button onClick={handleModal} className="btn">
        BOOK APPOINTMENT
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="patient-quary">
          <h3 className="text-center mt-2">{trtment}</h3>
          <h5 className="text-center text-secondary mt-2 mb">
            on {time.toDateString()}
          </h5>

          <form onBlur={handleSubmit(onSubmit)}>
            <div className="input-grp">
              <select
                name="selectDoctor"
                {...register("doctor", { required: true })}
              >
                <option value="">Select a Doctor</option>
                <option value="cudi">Dr. Cudi</option>
                <option value="jon">Dr. Demon Jon</option>
                <option value="southee">Dr. Istiak Southee</option>
              </select>
              <p>{errors.doctor && "Choose your Doctor"}</p>
            </div>

            <div className="input-grp">
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                {...register("name", { required: true, min: 3, maxLength: 80 })}
              />
              <p>{errors.name && "Name is required"}</p>
            </div>

            <div className="input-grp">
              <input
                type="number"
                placeholder="Phone Number"
                name="number"
                {...register("number", {
                  required: true,
                  min: 5,
                  maxLength: 15,
                })}
              />
              <p>
                {errors.number &&
                  "Phone Number is required and Length must be more than 6"}
              </p>
            </div>

            <div className="input-grp">
              <input
                type="text"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "invalid email address",
                  },
                })}
              />
              <p>{errors.email && "Email is required"}</p>
            </div>

            <div className="input-grp">
              <select name="gender" {...register("gender", { required: true })}>
                <option value="">Select your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="custom">Custom</option>
              </select>
              .<p>{errors.gender && "Select your Gender"}</p>
            </div>
          </form>
          <button
            onClick={sendtoDB}
            style={{
              marginLeft: "15px",
              marginTop: "25px",
              padding: "8px 15px",
            }}
            className="btn"
          >
            Make Appointment
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentQuary;
