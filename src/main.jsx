import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.jsx";

// Importação das Páginas
import Home from "./pages/home.jsx";
import WriteStory from "./pages/writeStory.jsx";
import MyStories from "./pages/myStories.jsx";
import StoryDetails from "./pages/storyDetails.jsx";
import PageNotFound from "./pages/pageNotFound.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },     
  { path: "/register", element: <Register /> },
  { path: "/writeStory", element: <WriteStory /> },
  { path: "/myStories", element: <MyStories /> },
  { path: "/storyDetails", element: <StoryDetails /> },
  { path: "*", element: <PageNotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);