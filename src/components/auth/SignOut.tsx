import React from "react";
import { auth } from "../ClientDatabase";
import { signOut } from "firebase/auth";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const SignOut = () => {
  const handleSignOut = async () => {
    console.log("Sign out initiated...");
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
    console.log("Sign out process completed");
  };

  return (
    <button onClick={handleSignOut} className="flex items-center space-x-2">
      <ArrowLeftOnRectangleIcon className="w-6 h-6 text-red-500" />
      <span>Sign out</span>
    </button>
  );
};

export default SignOut;
