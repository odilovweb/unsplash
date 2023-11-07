import React, { useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RooterLayout from "./layouts/RooterLayout";
import LikedPhotos from "./pages/LikedPhotos";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/likeSlice";
function App() {
  const dispatch = useDispatch();
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RooterLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="likedPhotos" element={<LikedPhotos />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  useEffect(() => {
    onAuthStateChanged(auth, (info) => {
      dispatch(addUser(info));
      console.log(info);
    });
  }, []);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
