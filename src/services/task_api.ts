import type { TaskType, TaskUpdateType } from "../components/Forms/taskType";
import apiClient from "../lib/apiClient";

const createTask = async ({ formData }: { formData: TaskType }) => {
  const response = await apiClient.post("/tasks", formData);
  return response.data;
};

const getAllTask = async ({
  page,
  limit,
  search,
}: {
  page: number;
  limit: number;
  search: string;
}) => {
  const response = await apiClient.get("/tasks", {
    params: { page, limit, search },
  });
  return response.data;
};

const updateTask = async ({
  id,
  formData,
}: {
  id: string;
  formData: TaskUpdateType;
}) => {
  const response = await apiClient.put(`/tasks/${id}`, formData);
  return response.data;
};

const deleteTask = async ({ id }: { id: string }) => {
  const response = await apiClient.delete(`/tasks/${id}`);
  return response.data;
};

export { createTask, getAllTask, updateTask, deleteTask };
