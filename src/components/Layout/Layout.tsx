import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
const Layout = () => {
  return (
    <div>
      <Outlet />

      <div className="flex-grow">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
