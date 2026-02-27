import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    registerUser(data.email, data.password)
      .then(() => navigate("/dashboard"))
      .catch(err => alert(err.message));
  };

  return (
    <div className="max-w-md mx-auto card bg-base-100 shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

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

        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;