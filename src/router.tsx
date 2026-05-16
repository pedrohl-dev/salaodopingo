import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import Index from "./routes/index";
import AgendamentoPage from "./routes/agendamento";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const agendamentoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/agendamento",
  component: AgendamentoPage,
});

const routeTree = rootRoute.addChildren([indexRoute, agendamentoRoute]);

export const router = createRouter({
  routeTree,
  basepath: "/salaodopingo",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}