import { convertObjectToQueryParams } from "@features/_global/helper";
import { ApiOption, MethodTypes, getContentType } from "./types";
import { cookie } from "@features/_global/utils/cookies";
import { config } from "../config";

const generateEndpoint = (
  endpoint: string,
  path?: string,
  queryParams?: Record<string, string | number | null | undefined>
) => {
  if (!endpoint) return "";
  let result = endpoint;
  if (path) {
    result = `${endpoint}/${path}`;
  }
  if (queryParams) {
    const query = convertObjectToQueryParams(queryParams);
    result = `${result}${query ? `?${query}` : ""}`;
  }
  return result;
};

async function createRequest<Res = unknown, Req = unknown>(
  endpoint: string,
  method: MethodTypes,
  apiOption?: ApiOption,
  body?: Req
) {
  let defaultValue = { ...apiOption };

  const token = cookie.get<string>(config.storage);
  if (token) {
    defaultValue = {
      ...defaultValue,
      bearerToken: token,
    };
  }

  const res: Response = await fetch(
    generateEndpoint(endpoint as string, apiOption?.path || "", {
      ...apiOption?.queryParams,
    }),
    {
      method,
      headers: {
        ...(defaultValue.contentType !== "form-data" && {
          "Content-Type": getContentType(defaultValue?.contentType),
        }),
        ...(defaultValue?.bearerToken &&
          typeof defaultValue.bearerToken !== "undefined" && {
            Authorization: `Bearer ${defaultValue.bearerToken}`,
          }),
        ...defaultValue?.headers,
      },
      body:
        getContentType(defaultValue?.contentType) === "application/json"
          ? JSON.stringify(body)
          : (body as BodyInit),
    }
  );
  const data: Res = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data as Res;
}

export const HTTP_REQUEST = {
  get:
    <Res = unknown, Req = unknown>(endpoint: string) =>
    (apiOption?: ApiOption) =>
      createRequest<Res, Req>(endpoint, "GET", apiOption),
  post:
    <Res = unknown, Req = unknown>(endpoint: string) =>
    (body?: Req, apiOption?: ApiOption) =>
      createRequest<Res, Req>(endpoint, "POST", apiOption, body),
  put:
    <Res = unknown, Req = unknown>(endpoint: string) =>
    (body?: Req, apiOption?: ApiOption) =>
      createRequest<Res, Req>(endpoint, "PUT", apiOption, body),
  patch:
    <Res = unknown, Req = unknown>(endpoint: string) =>
    (body?: Req, apiOption?: ApiOption) =>
      createRequest<Res, Req>(endpoint, "PATCH", apiOption, body),
  delete:
    <Res = unknown, Req = unknown>(endpoint: string) =>
    (apiOption?: ApiOption) =>
      createRequest<Res, Req>(endpoint, "DELETE", apiOption),
};
