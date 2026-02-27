import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium ${
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium ${
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }`
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium ${
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium ${
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }`
        }
      >
        Contact
      </NavLink>

      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }`
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            BaseApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks}

            {user ? (
              <button onClick={logoutUser} className="btn btn-sm btn-outline">
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-sm btn-ghost">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-sm btn-primary">
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBars size={20} />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {navLinks}

              <div className="pt-2 border-t">
                {user ? (
                  <button
                    onClick={logoutUser}
                    className="btn btn-sm btn-outline w-full"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="btn btn-sm btn-ghost w-full"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="btn btn-sm btn-primary w-full mt-2"
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
