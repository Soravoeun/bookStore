import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Navbar />

      <section className="outlet">
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
