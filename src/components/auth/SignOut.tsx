import * as React from "react";
import { auth } from "../../firebaseConfig"; // Adjust the import path as needed
import { signOut } from "firebase/auth";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <button onClick={handleSignOut} className="flex items-center space-x-2">
      <ArrowLeftOnRectangleIcon className="w-6 h-6 text-red-500" />
      <span>Signout</span>
    </button>
  );
};

export default SignOut;
