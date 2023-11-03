import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex py-4 flex-col items-center sm:flex-row">
      <h1 className="my-auto text-2xl font-bold mb-2 sm:text-3xl sm:mr-auto">
        <Link to="/">Unsplash</Link>
      </h1>
      <nav className="flex items-center gap-3 text-lg cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
