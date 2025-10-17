import apiClient from "../lib/apiClient";
import type { LoginType, RegisterType } from "../constants/types";
import { toast } from "react-toastify";

const loginUser = async ({ formData }: { formData: LoginType }) => {
  const response = await apiClient.post("/auth/login", formData);
  return response.data;
};

const registerUser = async ({ formData }: { formData: RegisterType }) => {
  try {
    const response = await apiClient.post("/auth/register", formData);
    return response.status;
  } catch (error) {
    toast.error("An unknown error occurred");
  }
};

export { loginUser, registerUser };
