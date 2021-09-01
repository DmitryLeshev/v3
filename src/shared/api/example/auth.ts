import { Response } from "./_base";
import { Status } from "shared/types";
import { SECOND } from "shared/constans";

export type LoginParams = {
  login: string;
  password: string;
};

let appStatus: Status = "cubic-is-not-auth";

function mockResponsSuccess<T>(data?: T, message?: string): Response<T> {
  return {
    status: "success",
    message: message,
    data: data,
  };
}
function mockResponsFaild(message: string): Response<unknown> {
  return {
    status: "faild",
    message: message,
  };
}
function mockResponsError(error: string): Response<unknown> {
  return { status: "error", error: error };
}

export const login = async (
  args: LoginParams
): Promise<Response<{ token: string }>> => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (args.login !== "admin1") reject(mockResponsFaild("User not found"));
      if (args.password !== "ZoomG50N!@")
        reject(mockResponsFaild("User not found"));
      appStatus = "user-auth";
      resolve(
        mockResponsSuccess({ token: "qwe123!@#" }, `Welcome ${args.login}`)
      );
    }, SECOND * 2);
  });
};

export const logout = async (): Promise<Response<Status>> => {
  return new Promise((resolve) => {
    setInterval(() => {
      appStatus = "user-is-not-auth";
      resolve(mockResponsSuccess(appStatus));
    }, SECOND * 2);
  });
};

export const status = async (): Promise<Response<Status>> => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(mockResponsSuccess(appStatus));
    }, SECOND * 2);
  });
};
