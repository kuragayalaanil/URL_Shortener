import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { HomeRouting } from "./HomeRouting";
import { DashBoardRouting } from "./DashBoardRouting";
import { AuthRouting } from "./AuthRouting";

export const rootRoute = createRootRoute({
  component: App,
});

export const routeTree = rootRoute.addChildren([
  HomeRouting,
  DashBoardRouting,
  AuthRouting,
]);
