import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/programs", "routes/programs.tsx"),
  route("/programs/:documentId", "routes/program.tsx"),
] satisfies RouteConfig;
