import React from "react";
import Navigation from "./navigation/Navigation";
import { Outlet } from "react-router-dom";

const Withnav = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Withnav;
