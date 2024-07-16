import { useState } from "react";
import { auth, db } from "../ClientDatabase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import {stateSetsTypes} from '../TypesExport';

const Signup = ({ setIsTrue }: stateSetsTypes) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      // // Add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name: { name },
      });
      setIsTrue(false);
      console.log("User signed up and data added to Firestore:", user);
    } catch (error: any) {
      console.error("Error signing up:", error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div>
          <span className="flex gap-5">
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border w-full py-2 px-3"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border w-full py-2 px-3"
            />
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border w-full py-2 px-3 my-5"
          />
        </div>
        <button
          type="submit"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          <span className="flex items-center">
            <UserPlusIcon className="w-6 h-6 text-green-500" />
            <span>Signup</span>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Signup;
