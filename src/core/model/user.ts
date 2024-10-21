import { DepartmentModel } from "./department";

export type Role =
  | "ADMIN"
  | "MANAGING_DIRECTOR"
  | "FINANCE"
  | "HEAD_OF_DIVISION"
  | "MANAGER";

export interface UserModel {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: true;
  department: DepartmentModel | null;
}
