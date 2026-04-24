import { FaTimes, FaCopy, FaGem } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProfileModal = ({ isOpen, onClose, userData }) => {
  if (!isOpen) return null;

  const { userId, username, level, isPro } = userData || {};

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={onClose} // 👈 outside click closes
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // 👈 prevent close inside
            className="
              w-[92%] max-w-md
              rounded-2xl p-5
              bg-base-100/80 backdrop-blur-xl
              border border-base-300/40
              shadow-xl
              text-base-content
              relative
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition"
            >
              <FaTimes />
            </button>

            {/* PROFILE */}
            <h2 className="text-xs font-semibold tracking-wide opacity-70 mb-3">
              PROFILE
            </h2>

            <div className="space-y-2">
              
              {/* User ID */}
              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-base-200/60 border border-base-300/30">
                <span className="text-xs opacity-70">User ID</span>
                <div className="flex items-center gap-2 text-xs">
                  <span className="truncate max-w-[140px]">
                    {userId || "Loading..."}
                  </span>
                  <button onClick={() => handleCopy(userId)}>
                    <FaCopy className="opacity-60 hover:opacity-100" />
                  </button>
                </div>
              </div>

              {/* Username */}
              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-base-200/60 border border-base-300/30">
                <span className="text-xs opacity-70">Username</span>
                <div className="flex items-center gap-2 text-xs">
                  <span>{username || "Loading..."}</span>
                  <button onClick={() => handleCopy(username)}>
                    <FaCopy className="opacity-60 hover:opacity-100" />
                  </button>
                </div>
              </div>

              {/* Level */}
              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-base-200/60 border border-base-300/30">
                <span className="text-xs opacity-70">User Level</span>
                <span className="text-xs font-semibold">
                  {level || "GUEST"}
                </span>
              </div>
            </div>

            {/* SUBSCRIPTION */}
            <h2 className="text-xs font-semibold tracking-wide opacity-70 mt-5 mb-2">
              SUBSCRIPTION
            </h2>

            <div className="px-4 py-3 rounded-xl text-center text-sm bg-base-200/60 border border-base-300/30">
              {isPro ? "You are a Pro user 🎉" : "Have not subscribed yet?"}
            </div>

            {/* Upgrade */}
            {!isPro && (
              <button className="
                mt-4 w-full flex items-center justify-center gap-2
                py-2.5 rounded-xl text-sm font-medium
                bg-primary/90 text-white hover:bg-primary
                transition
              ">
                <FaGem className="text-xs" />
                UPGRADE
                <FaGem className="text-xs" />
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;