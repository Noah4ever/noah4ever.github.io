// import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/index.scss";
import { RouterProvider, createHashRouter } from "react-router-dom";

import MainLayout from "@/pages/MainLayout.tsx";
import App from "@/pages/App.tsx";
import Privacy from "@/pages/Privacy.tsx";
import ToS from "@/pages/ToS.tsx";
// import Imprint from "@/pages/Imprint.tsx";

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
      // {
      //   path: "/imprint",
      //   element: <Imprint />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
