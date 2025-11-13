//Import Router e AuthProvider
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthContext"; 
import AppRoutes from "./routes/appRoutes";
import AuthRoutes from "./routes/authRoutes";

//Import Páginas

const router = createBrowserRouter([
  {
    element: <AuthRoutes />,
    
  },
  {
    element: <AppRoutes />,
  },
  { path: "*", element: <PageNotFound /> }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);