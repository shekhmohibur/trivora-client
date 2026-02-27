import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    loginUser(data.email, data.password)
      .then(() => navigate("/dashboard"))
      .catch(err => alert(err.message));
  };

  return (
    <div className="max-w-md mx-auto card bg-base-100 shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />

        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;