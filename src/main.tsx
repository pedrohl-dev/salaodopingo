import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import Index from "./routes/index";
import Agendamento from "./routes/agendamento";
import "./styles.css";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const agendamentoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/agendamento",
  component: Agendamento,
});

const routeTree = rootRoute.addChildren([indexRoute, agendamentoRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);