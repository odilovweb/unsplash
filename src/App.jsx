import React from "react";
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
import LikedPhotos from "./pages/likedPhotos";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RooterLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="likedPhotos" element={<LikedPhotos />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
