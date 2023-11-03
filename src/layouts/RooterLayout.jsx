import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RooterLayout() {
  return (
    <div className="align-element">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RooterLayout;
