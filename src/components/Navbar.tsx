import React, {useState} from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SignOut from "./auth/SignOut";
import { auth } from "../firebaseConfig";

const Navbar = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    if(auth.currentUser){
        // setIsLogin(true);
    }
    
  return (
    <div className="z-10 w-full fixed m-auto backdrop-blur-sm bg-white/50 py-[1rem] sm:px-[2rem] px-[1rem]">
      <div className="flex font-bold items-center justify-between">
        <h1 className=" cursor-pointer">JoshProject</h1>

        <ul className="md:flex hidden space-x-3 items-center">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Generate QR code</li>
          <li className=" cursor-pointer">My links</li>
        </ul>

        <div className=" cursor-pointer">
            {<p>Register</p>}
          {<Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                My-Profile
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    <SignOut />
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
