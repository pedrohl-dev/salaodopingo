import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";
import { Route as indexRoute } from "./routes/index";
import { Route as agendamentoRoute } from "./routes/agendamento";

const routeTree = rootRoute.addChildren([indexRoute, agendamentoRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
