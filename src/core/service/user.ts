import { HTTP_REQUEST } from "@core/libs/api";
import { ApiResponse } from "@core/libs/api/types";
import { endpoint } from "@core/libs/config";
import { UserModel } from "@core/model/user";

export const userService = {
  get: HTTP_REQUEST.get<ApiResponse<UserModel[]>>(endpoint.users),
};
