import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "Pages/Landing/Landing.tsx"),
  // pattern ^           ^ module file
] satisfies RouteConfig;
