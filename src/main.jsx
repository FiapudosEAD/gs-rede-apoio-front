import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";

// Importação das Páginas
import Home from "./pages/home.jsx";
import WriteStory from "./pages/writeStory.jsx";
import MyStories from "./pages/myStories.jsx";
import StoryDetails from "./pages/storyDetails.jsx";
import PageNotFound from "./pages/pageNotFound.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

const router = createBrowserRouter([
  // Rotas Públicas (Acessíveis sem login)
  { path: "/login", element: <Login /> },     
  { path: "/register", element: <Register /> },

  // Rotas Protegidas (Exigem login)
  { 
    path: "/", 
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/writeStory", 
    element: (
      <ProtectedRoute>
        <WriteStory />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/myStories", 
    element: (
      <ProtectedRoute>
        <MyStories />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/storyDetails", 
    element: (
      <ProtectedRoute>
        <StoryDetails />
      </ProtectedRoute>
    ) 
  },
  
  // Página 404
  { path: "*", element: <PageNotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);