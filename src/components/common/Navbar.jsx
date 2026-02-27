import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "animate.css";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      {["/", "/services", "/about", "/contact"].map((path, i) => {
        const names = ["Home", "Services", "About", "Contact"];
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`
            }
          >
            {names[i]}
          </NavLink>
        );
      })}

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
    <nav
      className={`
        w-full z-50 transition-all duration-300
        ${
          isSticky
            ? "fixed top-0 bg-base-100 shadow-lg animate__animated animate__fadeInDown"
            : "relative bg-transparent"
        }
      `}
    >
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
              <button
                onClick={logoutUser}
                className="btn btn-sm btn-outline ml-2"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-sm btn-ghost ml-2">
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
              className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow bg-base-100 rounded-box w-52 space-y-2"
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