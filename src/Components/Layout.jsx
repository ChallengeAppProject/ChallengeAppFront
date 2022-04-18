import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Molecules/Header/Header";
import Footer from "./Molecules/Footer/Footer";
import Home from "../Views/Home"

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Home/>
      <Footer />
    </div>
  );
};
export default Layout;
