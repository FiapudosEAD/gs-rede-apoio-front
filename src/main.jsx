//Import Router
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


//Import Páginas
import Home from "./pages/home.jsx";
import WriteStory from "./pages/writeStory.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/writeStory", element: <WriteStory /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);