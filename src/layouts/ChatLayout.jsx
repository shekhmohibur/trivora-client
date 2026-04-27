import TextChat from "../components/chat/TextChat";
import VoiceChat from "../components/chat/VoiceChat";
import { useEffect, useRef } from "react";

const ChatLayout = ({ openChat, setOpenChat }) => {
  const panelRef = useRef(null);

  // 🔥 onBlur (outside click)
  useEffect(() => {
    const handleClick = (e) => {
      if (
        openChat &&
        panelRef.current &&
        !panelRef.current.contains(e.target)
      ) {
        setOpenChat(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openChat, setOpenChat]);

  return (
    <div className="h-[calc(100dvh-90px)] p-3">
      {/* 🎤 Voice */}
      <div className="ui-surface h-full p-4 relative overflow-hidden">
        <VoiceChat />

        {/* 🌫️ Backdrop */}
        {openChat && (
          <div className="fixed inset-0 bg-black/20  z-40" />
        )}

        {/* 💬 Chat Bubble Panel */}
        <div
          ref={panelRef}
          className={`
            fixed bottom-20 right-5
            w-[340px] max-w-[92vw]
            h-[480px] max-h-[72vh]
            rounded-2xl
            ui-surface shadow-2xl
            flex flex-col
            transition-all duration-200
            z-50

            ${openChat
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"}
          `}
        >
          {/* 🔝 Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]">
            <div className="text-sm font-semibold">
              Stranger
              <span className="ml-2 text-xs ui-text-secondary">
                online
              </span>
            </div>

            <button
              onClick={() => setOpenChat(false)}
              className="ui-hover p-1.5 rounded-md"
            >
              ✕
            </button>
          </div>

          {/* 💬 Chat */}
          <div className="flex-1 p-3 overflow-hidden flex flex-col">
            <TextChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;