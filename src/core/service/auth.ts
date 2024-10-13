import { HTTP_REQUEST } from "@core/libs/api";
import { ApiResponse } from "@core/libs/api/types";
import { endpoint } from "@core/libs/config";
import { AuthLoginModel } from "@core/model/auth";

export const authService = {
    signin: HTTP_REQUEST.post<ApiResponse, AuthLoginModel>(endpoint.auth.signin),
    signup: HTTP_REQUEST.post(endpoint.auth.signup),
}