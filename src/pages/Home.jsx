import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import ChatLayout from "../layouts/ChatLayout";
import Instructions from "../components/common/Instructions";

const Home = () => {
  const [openChat, setOpenChat] = useState(false);
  const [unread, setUnread] = useState(3); // later from socket

  return (
    <div className=" relative">

      {/* 🧠 Main Chat Layout */}
      <ChatLayout
        openChat={openChat}
        setOpenChat={setOpenChat}
      />
      <Instructions/>
      {/* 💬 Floating Message Controller */}
      <button
        onClick={() => {
          setOpenChat((prev) => !prev);
          if (!openChat) setUnread(0);
        }}
        className="
          fixed bottom-5 right-8
          w-14 h-14 rounded-full
          flex items-center justify-center
          ui-accent-bg ui-accent
          shadow-lg ui-hover
          z-999
        "
      >
        {openChat ? <FaTimes size={18} /> : <FaComments size={18} />}

        {/* 🔴 Unread badge */}
        {!openChat && unread > 0 && (
          <span
            className="
              absolute -top-1 -right-1
              text-[10px] px-1.5 py-0.5
              rounded-full
              bg-red-500 text-white font-semibold
            "
          >
            {unread}
          </span>
        )}
      </button>
    </div>
  );
};

export default Home;