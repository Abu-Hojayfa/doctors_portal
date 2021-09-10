import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const DeleteAndShowAdmin = ({
  allAdminReloader,
  setAllAdminReloader,
  allAdmins,
}) => {
  const deleteAnAdmin = (e) => {
    fetch("http://localhost:5000/deleteanadmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e }),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          title: "An Admin is Deleted",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
        setAllAdminReloader(!allAdminReloader);
      }
    });
  };

  return (
    <div className="allAdminsContainer">
      <h3 className=" pb-3">All Admins</h3>
      {allAdmins &&
        allAdmins.map((admin, index) => (
          <div key={admin._id} className="d-flex align-items-center">
            <p className="adminEmail">
              {index + 1}. {admin.email}
            </p>
            <FontAwesomeIcon
              onClick={(e) => deleteAnAdmin(admin._id)}
              className="iconOfDeletion"
              icon={faTrash}
            />
          </div>
        ))}
    </div>
  );
};

export default DeleteAndShowAdmin;
