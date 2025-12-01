import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import HomePage from "../pages/HomePage";

export const HomeRouting = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
