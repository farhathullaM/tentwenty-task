import * as Yup from "yup";
import type { TaskType } from "./taskType";

export const taskSchema: Yup.ObjectSchema<TaskType> = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  priority: Yup.string()
    .oneOf(["low", "medium", "high"])
    .required("Priority is required"),
  dueDate: Yup.string().required("Due date is required"),
});
