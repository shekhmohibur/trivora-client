import { FaTimes, FaCopy, FaGem } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProfileModal = ({ isOpen, onClose, userData }) => {
  if (!isOpen) return null;

  const { userId, username, level, isPro } = userData || {};

  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-[92%] max-w-md
              rounded-2xl p-5
              ui-surface
              text-[var(--text-primary)]
              relative
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 opacity-70 hover:opacity-100 ui-hover p-2 rounded-lg"
            >
              <FaTimes size={16} />
            </button>

            {/* PROFILE */}
            <h2 className="text-xs font-semibold tracking-wide ui-text-secondary mb-3">
              PROFILE
            </h2>

            <div className="space-y-2">

              {/* User ID */}
              <div className="flex justify-between items-center px-4 py-3 rounded-xl ui-surface-soft">
                <span className="text-xs ui-text-secondary">User ID</span>

                <div className="flex items-center gap-2 text-xs">
                  <span className="truncate max-w-[140px]">
                    {userId || "Loading..."}
                  </span>

                  <button
                    onClick={() => handleCopy(userId)}
                    className="p-1.5 rounded-md ui-hover"
                  >
                    <FaCopy size={14} className="opacity-80" />
                  </button>
                </div>
              </div>

              {/* Username */}
              <div className="flex justify-between items-center px-4 py-3 rounded-xl ui-surface-soft">
                <span className="text-xs ui-text-secondary">Username</span>

                <div className="flex items-center gap-2 text-xs">
                  <span>{username || "Loading..."}</span>

                  <button
                    onClick={() => handleCopy(username)}
                    className="p-1.5 rounded-md ui-hover"
                  >
                    <FaCopy size={14} className="opacity-80" />
                  </button>
                </div>
              </div>

              {/* Level */}
              <div className="flex justify-between items-center px-4 py-3 rounded-xl ui-surface-soft">
                <span className="text-xs ui-text-secondary">User Level</span>
                <span className="text-xs font-semibold ui-accent">
                  {level || "GUEST"}
                </span>
              </div>
            </div>

            {/* SUBSCRIPTION */}
            <h2 className="text-xs font-semibold tracking-wide ui-text-secondary mt-5 mb-2">
              SUBSCRIPTION
            </h2>

            <div className="px-4 py-3 rounded-xl text-center text-sm ui-surface-soft">
              {isPro ? (
                <span className="ui-accent font-medium">
                  You are a Pro user 🎉
                </span>
              ) : (
                <span className="ui-text-secondary">
                  Have not subscribed yet?
                </span>
              )}
            </div>

            {/* Upgrade */}
            {!isPro && (
              <button
                className="
                  mt-4 w-full flex items-center justify-center gap-2
                  py-2.5 rounded-xl text-sm font-medium
                  ui-accent-bg
                  ui-accent
                  ui-hover
                "
              >
                <FaGem size={14} />
                UPGRADE
                <FaGem size={14} />
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;