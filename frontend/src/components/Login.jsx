import { Input, Button } from "../components";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const login = (credentials) => {
    const result = loginUser(credentials);
    if (result) {
      navigate("/");
    } else {
      console.log("wrong credentials");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        <Input
          label="Email: "
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
        <Input
          label="Password: "
          placeholder="Enter your password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        <Button type="submit" className="w-full my-4">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
