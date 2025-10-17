import * as Yup from "yup";
import type { LoginType } from "../../constants/types";

export const loginSchema: Yup.ObjectSchema<LoginType> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
