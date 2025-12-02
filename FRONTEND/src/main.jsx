import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routing/routeTree";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

const router = createRouter({
  routeTree,
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
