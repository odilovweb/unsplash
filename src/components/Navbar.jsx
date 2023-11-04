import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dark } from "../redux/likeSlice";
import { FaMoon, FaSun } from "react-icons/fa6";
function Navbar() {
  const theme = JSON.parse(localStorage.getItem("mode"));
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);
  const dispatch = useDispatch();
  const { mode, value } = useSelector((state) => state.like);
  return (
    <div className="flex py-4 flex-col items-center sm:flex-row">
      <h1 className="my-auto text-2xl font-bold mb-2 sm:text-3xl sm:mr-auto">
        <Link to="/">Unsplash</Link>
      </h1>
      <nav className="flex items-center gap-3 text-lg cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/likedPhotos">
          Liked Photos
          {value.length ? (
            <span className="badge badge-success">{value.length}</span>
          ) : (
            <span className="badge badge-secondary">{value.length}</span>
          )}
        </Link>
        <button
          className="text-2xl"
          onClick={() => {
            dispatch(dark());
          }}
        >
          {mode === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
