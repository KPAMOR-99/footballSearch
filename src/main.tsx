import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PlayerProfile from "./pages/PlayerProfile.tsx";
import ClubProfile from "./pages/ClubProfile.tsx";



// provides routes for the various pages in this web app
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/PlayerProfile",
    element: <PlayerProfile />,
  },
  {
    path: "/ClubProfile",
    element: <ClubProfile />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

