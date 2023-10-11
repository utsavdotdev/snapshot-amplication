import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Navonly = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Navonly;
