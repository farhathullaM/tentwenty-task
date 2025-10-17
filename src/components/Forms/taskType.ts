export interface TaskType {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface TaskAllType {
  _id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  dueDate: string;
  user: string;
}

export interface TaskUpdateType {
  title?: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  dueDate?: string;
  status?: "pending" | "in-progress" | "completed";
}
