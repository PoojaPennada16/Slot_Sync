import { ROLES } from "./roles";

export const ROUTE_ACCESS = {
  "/owner": [ROLES.OWNER],
  "/manager": [ROLES.MANAGER],
  "/technician": [ROLES.TECHNICIAN],
};