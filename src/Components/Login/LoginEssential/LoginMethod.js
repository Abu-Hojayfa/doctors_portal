import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

if (!initializeApp(firebaseConfig).length) {
  initializeApp(firebaseConfig);
}


const success = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
};

const wrong = (errorCode, errorMessage) => {
  Swal.fire({
    icon: "error",
    title: `${errorCode}`,
    text: `${errorMessage}`,
  });
};

export const createUserWithMail = ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (email && password && firstName && lastName) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("email", user.email);
        success();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        wrong(errorCode, errorMessage);
      });
  }
};

export const signInWithMail = ({ email, password }) => {
  if (email && password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("email", user.email);
        success();
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        wrong(errorCode, errorMessage);
      });
  }
};
