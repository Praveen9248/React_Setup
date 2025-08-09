import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "../components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const signup = (credentials) => {
    const result = registerUser(credentials);
    if (result) {
      navigate("/login");
    } else {
      console.log("try again");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(signup)}>
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
        <Input
          label="Username: "
          placeholder="Enter your username"
          {...register("username", {
            required: true,
          })}
        />
        <Button type="submit" className="w-full my-4">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
