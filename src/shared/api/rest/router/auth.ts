import { apiInstance, Response } from "./base";

const BASE_URL = "auth";

const fetchAuth = apiInstance(BASE_URL);

export type LoginParams = {
  login: string;
  password: string;
};

export const login = async (args: LoginParams): Promise<Response<any>> => {
  return await fetchAuth({ login: args });
};

export const logout = async (): Promise<Response<any>> => {
  return await fetchAuth({ logout: {} });
};

export const status = async (): Promise<Response<any>> => {
  return await fetchAuth({ status: {} });
};
