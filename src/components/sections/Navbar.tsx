import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SignOut from "../auth/SignOut";
import { auth, db } from "../ClientDatabase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../Styles.css";
import { openModalType } from "../TypesExport";
import { onAuthStateChanged } from "firebase/auth";
import HeaderLogo from '../../assets/cb857sgqnwslzgtjnfv.svg';
import { motion } from "framer-motion";

const Navbar = ({ setOpen }: openModalType) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [nameOfUser, setNameOfUser] = useState<string>("");

  const getUserName = async () => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userId = user.uid;
          const userDocRef = doc(db, "users", userId);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const { name } = userDoc.data();
            setNameOfUser(name.name);

          } else {
            console.log("No such document!");
          }
        }
      });
    } catch (error) {
      console.error("Error fetching current user's name:", error);
    }
  };

  getUserName();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unSubscribe();
  }, []);
  const handleRegister = () => {
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      scroll > 100 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
      className={`z-10 w-full fixed transition-all ease-out delay-300 m-auto  py-[1rem] sm:px-[2rem] px-[1rem] ${
        isScrolled ? "gradient_background " : "bg-transparent py-4"
      }`}
    >
      <div className="flex font-bold items-center justify-between">
        <div className=" flex space-x-1 items-center cursor-pointer">
        <img className="md:w-[38px] w-[34px] " src={HeaderLogo} alt="HeaderLogo" />
          <motion.p transition={{delay: 0.5}} className="text-white">Swift-Short</motion.p>
        </div>

        {isLoggedIn && (
          <ul className="md:flex hidden space-x-5 items-center">
            <Link to="/analytics" className=" cursor-pointer text-white">
              Dashboard
            </Link>
          </ul>
        )}

        <div className=" cursor-pointer">
          {!isLoggedIn && (
            <p className="text-white" onClick={handleRegister}>
              Signup/Login
            </p>
          )}
          {isLoggedIn && (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex text-white uppercase w-full justify-center gap-x-1.5 rounded-md hover:bg-blue-500 px-3 py-2 text-sm font-semibold border border-blue-300 ">
                  My-Profile
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 text-white"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <h2 className="block text-center gradient_background  uppercase px-4 py-2 -mt-2 rounded-t-md text-sm text-black-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      {nameOfUser}
                    </h2>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/analytics"
                      className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
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
    </section>
    </>
  );
};

export default Navbar;
