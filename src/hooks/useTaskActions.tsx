import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTask, updateTask } from "../services/task_api";

const useTaskActions = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task created successfully");
    },

    onError: () => {
      toast.error("Failed to create task");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task updated successfully");
    },
    onError: () => {
      toast.error("Failed to update task");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete task");
    },
  });
  return {
    create: createMutation.mutate,
    creating: createMutation.isPending,
    created: createMutation.isSuccess,

    update: updateMutation.mutate,
    updating: updateMutation.isPending,
    updated: updateMutation.isSuccess,

    remove: deleteMutation.mutate,
    removing: deleteMutation.isPending,
    removed: deleteMutation.isSuccess,
  };
};

export default useTaskActions;
