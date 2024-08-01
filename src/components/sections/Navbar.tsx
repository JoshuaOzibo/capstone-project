import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SignOut from "../auth/SignOut";
import { auth } from "../ClientDatabase";
import { Link } from "react-router-dom";
import '../Styles.css';

const Navbar = ({ setOpen, open }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unSubscribe();
  }, []);
  const handleRegister = () => {
    setOpen(true);
  };
  return (
    <div className="z-10 w-full fixed m-auto backdrop-blur-sm gradient_background py-[1rem] sm:px-[2rem] px-[1rem]">
      <div className="flex font-bold items-center justify-between">
        <h1 className=" cursor-pointer">
          {/* <img className="w-[50px] h-[20px]" src="https://www.prisma.io/illustrations/home-page/hero-lines.svg" alt="" /> */}
          <p>JoshProject</p>
        </h1>

        {isLoggedIn && <ul className="md:flex hidden space-x-5 items-center">

          <Link to='/analytics' className=" cursor-pointer">Dashboard</Link>
        </ul>}

        <div className=" cursor-pointer">
          {!isLoggedIn && <p onClick={handleRegister}>Register</p>}
          {isLoggedIn && (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex uppercase w-full justify-center gap-x-1.5 rounded-md hover:bg-blue-500 px-3 py-2 text-sm font-semibold text-gray-900 border border-blue-300 ">
                  My-Profile
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 text-black"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a className="block text-center gradient_background  uppercase px-4 py-2 -mt-2 rounded-t-md text-sm text-black-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      joshua
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/analytics' className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      Dashboard
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      <SignOut />
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
