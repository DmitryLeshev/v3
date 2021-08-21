import { apiInstance } from "./base";
import type { Task } from "./models";

const BASE_URL = "/todos";

export type GetTodosListParams = {
  userId?: number;
  completed?: boolean;
};

export const getTasksList = (params?: GetTodosListParams): Promise<Task[]> => {
  return apiInstance.get(BASE_URL, { params });
};

export type GetTodoByIdParams = {
  taskId: number;
};

export const getTaskById = ({
  taskId,
  ...params
}: GetTodoByIdParams): Promise<Task> => {
  return apiInstance.get(`${BASE_URL}/${taskId}`, { params });
};
