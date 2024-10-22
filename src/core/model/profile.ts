import { DepartmentModel } from "./department";
import { Role } from "./user";

export interface ProfileModel {
  id: string
  name: string
  email: string
  role: Role;
  isActive: boolean;
  department: DepartmentModel | null;
}
