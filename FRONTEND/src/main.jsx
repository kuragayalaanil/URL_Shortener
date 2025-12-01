import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routing/routeTree";

const router = createRouter({
  routeTree,
});

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
