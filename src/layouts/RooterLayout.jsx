import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";

function RooterLayout() {
  const { user } = useSelector((state) => state.like);
  return (
    <div className="align-element">
      {user ? (
        <div>
          <header>
            <Navbar />
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default RooterLayout;
