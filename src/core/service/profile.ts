import { HTTP_REQUEST } from "@core/libs/api";
import { ApiResponse } from "@core/libs/api/types";
import { endpoint } from "@core/libs/config";
import { ProfileModel } from "@core/model/profile";

export const profileService = {
  get: HTTP_REQUEST.get<ApiResponse<ProfileModel>>(endpoint.profile),
};
