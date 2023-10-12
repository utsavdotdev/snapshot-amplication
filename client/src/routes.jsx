import React from "react";
import { useRoutes } from "react-router-dom";
import Navonly from "./layouts/Navonly";
import { Dashboard, Images, Collection } from "./pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navonly />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/images", element: <Images /> },
        { path: "/collection", element: <Collection /> },
      ],
    },
  ]);
}
