import * as Yup from "yup";
import type { RegisterType } from "../../constants/types";

export const registerSchema: Yup.ObjectSchema<RegisterType> =
  Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    name: Yup.string().required("Name is required"),
  });
