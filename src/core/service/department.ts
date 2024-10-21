import { HTTP_REQUEST } from "@core/libs/api";
import { ApiResponse } from "@core/libs/api/types";
import { endpoint } from "@core/libs/config";
import { DepartmentModel } from "@core/model/department";

export const departmentService = {
    get: HTTP_REQUEST.get<ApiResponse<DepartmentModel[]>>(endpoint.departments)
}