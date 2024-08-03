import React from "react";
import { auth } from "../ClientDatabase";
import { signOut } from "firebase/auth";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import ToastMessage, { showToast } from "../toastMessage/ToastMessage.tsx";
const SignOut = () => {
  const handleSignOut = async () => {
    console.log("Sign out initiated...");
    try {
      await signOut(auth);
      showToast("User signed out successfully", "success");
    } catch (error) {
      showToast("Error signing out", "error");
    }
  };

  return (
    <>
      <ToastMessage />
      <button onClick={handleSignOut} className="flex items-center space-x-2">
        <ArrowLeftOnRectangleIcon className="w-6 h-6 text-red-500" />
        <span>Sign out</span>
      </button>
    </>
  );
};

export default SignOut;
