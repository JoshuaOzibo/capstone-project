import { ReactEventHandler, useState } from "react";
import { auth } from "../ClientDatabase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import ToastMessage, { showToast } from "../toastMessage/ToastMessage.tsx";
import {openModalType} from '../TypesExport.ts'

const Login = ({ setOpen }: openModalType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      showToast("User logged in successful", "success");
      setOpen(false);
    } catch (error) {
      showToast("Error logging in user", "error");
      setError("Email or Password not correct");
    }
  };

  return (
    <div>
      <ToastMessage />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border w-full py-2 px-3"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border w-full py-2 px-3 mt-5"
          />
        </div>
        <button
          type="submit"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          <span className="flex items-center">
            <ArrowRightOnRectangleIcon className="w-6 h-6 text-blue-500" />
            <span>Login</span>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Login;
