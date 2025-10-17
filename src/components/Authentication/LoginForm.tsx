import { useState } from "react";
import InputBox from "../ui/InputBox";
import { Navigate } from "react-router";
import { Checkbox } from "../ui/checkbox";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { useAuth } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import type { LoginType } from "../../constants/types";

const LoginForm = () => {
  const { user, login, loading } = useAuth();
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginType) => {
    login(data);
  };

  if (user) return <Navigate to="/" />;

  return (
    <form
      onClick={handleSubmit(onSubmit)}
      className="flex flex-col items-center h-screen  justify-center w-full px-20 max-lg:px-16 gap-3 max-md:px-8 max-sm:px-4 max-md:h-[50vh]"
    >
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-2xl font-bold w-full text-[#111928]">
          Welcome Back
        </h1>
        <div className="flex flex-col gap-4 items-center justify-center">
          <InputBox
            errors={errors}
            register={register}
            inputName="email"
            placeholder="name@example.com"
            label="Email"
            required={false}
          />

          <InputBox
            errors={errors}
            register={register}
            inputName="password"
            placeholder="*******"
            type="password"
            label="Password"
            required={false}
          />
        </div>

        <div>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          <span>Remember me</span>
        </div>
        <input
          type="submit"
          value={loading ? "Loading..." : "Sign In"}
          disabled={loading}
          className="px-4 py-2 w-full bg-[#1A56DB] cursor-pointer text-white rounded-lg mt-4"
        />
      </div>
    </form>
  );
};

export default LoginForm;
