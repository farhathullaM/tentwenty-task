import * as Yup from "yup";
import type { TaskUpdateType } from "./taskType";

export const updateTaskSchema: Yup.ObjectSchema<TaskUpdateType> =
  Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    priority: Yup.string()
      .oneOf(["low", "medium", "high"])
      .required("Priority is required"),
    dueDate: Yup.string().required("Due date is required"),
    status: Yup.string()
      .oneOf(["pending", "in-progress", "completed"])
      .required("Status is required"),
  });
