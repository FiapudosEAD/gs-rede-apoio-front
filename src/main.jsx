//Import Router
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


//Import Páginas
import Home from "./pages/home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);