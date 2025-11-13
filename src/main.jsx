//Import Router e AuthProvider
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

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