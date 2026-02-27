import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-primary">
          BaseApp
        </Link>
      </div>

      <div className="flex gap-2">
        <NavLink to="/" className="btn btn-ghost btn-sm">
          Home
        </NavLink>

        {user ? (
          <>
            <NavLink to="/dashboard" className="btn btn-primary btn-sm">
              Dashboard
            </NavLink>
            <button onClick={logoutUser} className="btn btn-outline btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-ghost btn-sm">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-primary btn-sm">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;