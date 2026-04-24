import { Link } from "react-router";
import {
  FaBars,
  FaUserCircle,
  FaCrown,
  FaComments,
  FaSlidersH,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const Navbar = ({ setOpen:setProfileOpen, open:profileOpen }) => {
  const { user, logoutUser } = useAuth();
  const [isSticky, setIsSticky] = useState(false);
  const [activeUsers, setActiveUsers] = useState(128);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky behavior
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulated live users (lightweight)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => {
        const change = Math.floor(Math.random() * 3 - 1);
        return Math.max(50, prev + change);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`
        w-full z-50 transition-all duration-300
        ${
          isSticky
            ? "fixed top-0 backdrop-blur-xl bg-base-100/70 border-b border-base-300/40 shadow-sm"
            : "absolute bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* Sidebar toggle */}
          <button className="p-2 rounded-lg hover:bg-base-200/60 transition">
            <FaSlidersH className="text-[18px] opacity-80" />
          </button>

          {/* Logo */}
          <h1 className="text-lg font-semibold tracking-tight">
            <span className="text-primary">Tri</span>vora
          </h1>

          {/* Active users */}
          <div className="hidden sm:flex items-center gap-2 ml-3 text-xs text-base-content/70">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            <span className="font-medium">{activeUsers}</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* Messages */}
          <button className="p-2 rounded-lg hover:bg-base-200/60 transition relative">
            <FaComments className="text-[18px] opacity-80" />
          </button>

          {/* Upgrade */}
          <Link className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/90 text-white hover:bg-primary transition">
            <FaCrown className="text-[12px]" />
            Pro
          </Link>

          {/* Auth */}
{user ? (
  <div className="dropdown dropdown-end">
    
    {/* Trigger */}
    <div
      tabIndex={0}
      role="button"
      className="p-1 rounded-full hover:bg-base-200/60 transition cursor-pointer"
    >
      <FaUserCircle size={26} />
    </div>

    {/* Dropdown */}
    <ul className="dropdown-content mt-2 w-44 p-2 rounded-xl bg-base-100 shadow-lg border border-base-300/40 z-[999]">
      
      <li>
        <button
          onClick={() => setProfileOpen(true)}
          className="rounded-lg hover:bg-base-200 w-full text-left"
        >
          Profile
        </button>
      </li>

      <li>
        <button
          onClick={logoutUser}
          className="rounded-lg hover:bg-base-200 w-full text-left"
        >
          Logout
        </button>
      </li>

    </ul>
  </div>
) : (
  <Link className="text-sm px-3 py-1.5 rounded-lg border border-base-300 hover:bg-base-200/60 transition">
    Login
  </Link>
)}

          {/* Mobile menu */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-base-200/60 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-base-100/95 backdrop-blur-xl border-t border-base-300/40">
          {/* Active users */}
          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            <span>{activeUsers} users online</span>
          </div>

          <div className="flex flex-col gap-2">
            <Link className="px-3 py-2 rounded-lg bg-primary text-white text-sm">
              Upgrade to Pro
            </Link>
            {!user && (
              <Link className="px-3 py-2 rounded-lg border text-sm">Login</Link>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
