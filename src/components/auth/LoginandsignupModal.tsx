import React from "react";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Signup from "./Signup";
import Login from "./Login";
import { openModalType } from "../TypesExport";

const Modal = ({ setOpen, open }: openModalType) => {
  const [isTrue, setIsTrue] = useState<boolean>(true);

  let close = setOpen;
  return (
    <Dialog open={open} onClose={() => setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white transition-all px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex w-full justify-end">
                <h2
                  onClick={() => setOpen(false)}
                  className="border text-white cards_colors_box cursor-pointer font-bold text-2xl mb-5 px-4 rounded-md py-1"
                >
                  X
                </h2>
              </div>
              <span className=" w-full mb-5  space-x-5 bg-gray-100  flex items-center justify-center">
                <button
                  onClick={() => setIsTrue(true)}
                  className={
                    isTrue
                      ? "border text-white font-medium shadow-md cards_colors_box w-full py-2 rounded-md"
                      : "border  font-medium w-full py-2 rounded-md"
                  }
                >
                  SignUp
                </button>
                <button
                  onClick={() => setIsTrue(false)}
                  className={
                    isTrue
                      ? "border font-medium w-full py-2 rounded-md"
                      : "border text-white font-medium w-full py-2 cards_colors_box shadow-md rounded-md"
                  }
                >
                  Login
                </button>
              </span>
              <div>
                {isTrue && <Signup setOpen={setOpen} setIsTrue={setIsTrue} />}
                {!isTrue && <Login setOpen={setOpen} />}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
