import { useState, useRef, useEffect } from "react";
import { FaUser, FaMoon, FaSun, FaCrown } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Navbar = ({ setOpen: setProfileOpen, open: profileOpen, setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const dropdownRef = useRef(null);
  const isPro = true;

  // Theme load
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="fixed top-3 left-0 w-full z-50 flex justify-center px-2">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: scrolled ? 0.96 : 1 }}
        transition={{ duration: 0.35 }}
        className={`
          w-full container
          px-3 md:px-5 py-2.5
          rounded-2xl flex items-center justify-between
          backdrop-blur-xl border transition-all
          ${
            scrolled
              ? "bg-[var(--surface)]/70 border-[var(--border)] shadow-[var(--shadow)]"
              : "bg-[var(--surface)]/40 border-transparent"
          }
        `}
      >
        {/* 🔵 LEFT */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          
          {/* Logo */}
          <h1 className="italic font-bold text-lg md:text-2xl truncate">
            Trivora
          </h1>

          {/* ✅ ALWAYS VISIBLE ONLINE BADGE */}
          <div className="
            flex items-center gap-1 px-2 py-1
            rounded-full
            bg-[var(--surface-soft)]
            border border-[var(--border)]
            shrink-0
          ">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-60"></span>
              <span className="relative w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </span>

            <span className="text-xs font-semibold">129</span>

            {/* hide word on very small screens */}
            <span className="text-xs ui-text-secondary hidden sm:inline">
              online
            </span>
          </div>

          {/* Hide filter on mobile */}
          <button
  onClick={() => setSidebarOpen(prev => !prev)}
  className="p-2 rounded-full ui-hover"
>
  <RiEqualizerFill size={18} className="ui-text-secondary" />
</button>
        </div>

        {/* 🟢 RIGHT */}
        <div className="flex items-center gap-2 md:gap-3" ref={dropdownRef}>
          
          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full ui-surface-soft border border-[var(--border)]"
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="ui-text-secondary" />
            )}
          </button>

          {/* Hide badge on very small */}
          <span className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs border
            ui-accent-bg ui-accent">
            <FaCrown size={12} />
            Pro
          </span>

          {/* Avatar */}
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full ui-surface-soft border border-[var(--border)] flex items-center justify-center"
          >
            <FaUser className="ui-text-secondary" />
          </button>

          {/* Dropdown */}
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-2 top-14 w-36 ui-surface border border-[var(--border)] rounded-xl shadow-[var(--shadow)] overflow-hidden"
            >
              <button
                className="block w-full text-left px-4 py-2 ui-hover"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                Profile
              </button>
              <Link className="block px-4 py-2 ui-hover" to="/login">
                Login
              </Link>
              <Link className="block px-4 py-2 ui-hover" to="/upgrade">
                Upgrade
              </Link>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;