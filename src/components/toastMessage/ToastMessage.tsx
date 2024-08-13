import React from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const ToastMessage = () => {
  return <div className="z-20">
    <ToastContainer />
  </div>
};

export const showToast = (
  message: string,
  type: "success" | "error",
  options?: ToastOptions
) => {
  const toastOptions = { ...defaultOptions, ...options };

  switch (type) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
  }
};

export default ToastMessage;
