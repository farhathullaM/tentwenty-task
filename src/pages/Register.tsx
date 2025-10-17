import { useForm } from "react-hook-form";
import InputBox from "../components/ui/InputBox";
import { useAuth } from "../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterType } from "../constants/types";
import { registerUser } from "../services/authentication";
import { Link, Navigate, useNavigate } from "react-router";
import { registerSchema } from "../components/Authentication/registerSchema";

const Register = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterType) => {
    const res = await registerUser({ formData: data });
    if (res === 201 || res === 200) navigate("/login");
  };

  if (user) return <Navigate to="/" />;

  return (
    <form
      onClick={handleSubmit(onSubmit)}
      className="flex flex-col items-center h-screen gap-5 justify-center w-full"
    >
      <h1 className="text-3xl font-semibold">Login</h1>
      <div className="flex flex-col w-96 gap-4">
        <InputBox
          errors={errors}
          register={register}
          inputName="name"
          placeholder="Name"
          label="Name"
          required={false}
        />

        <InputBox
          errors={errors}
          register={register}
          inputName="email"
          placeholder="Email"
          label="Email"
          required={false}
        />

        <InputBox
          errors={errors}
          register={register}
          inputName="password"
          placeholder="Password"
          label="Password"
          required={false}
        />
      </div>

      <input
        type="submit"
        value={"Register"}
        className="px-4 py-2 w-96 bg-blue-600 cursor-pointer text-white rounded-3xl mt-4"
      />

      <div>
        <p className="text-sm">
          Already have an account?
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
