import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "@styles/index.scss";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Privacy from "./pages/Privacy.tsx";
import MainLayout from "./pages/MainLayout.tsx";
import ToS from "./pages/ToS.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/tos",
        element: <ToS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
