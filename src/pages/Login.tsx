import LoginForm from "../components/Authentication/LoginForm";
import LoginPageInfo from "../components/Authentication/LoginPageInfo";

const Login = () => {
  return (
    <div className="flex items-center justify-between max-md:flex-col-reverse">
      <LoginForm />
      <LoginPageInfo />
    </div>
  );
};

export default Login;
