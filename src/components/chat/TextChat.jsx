import { useState } from "react";
import { FaImage, FaPaperPlane } from "react-icons/fa";
const TextChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(true); // 🔥 simulate stranger typing

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "text", content: message, sender: "me" },
    ]);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setMessages((prev) => [
      ...prev,
      { type: "image", content: imageUrl, sender: "me" },
    ]);
  };

  return (
    <div className="flex flex-col h-full">

      {/* 🔝 HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold">
          Stranger
          {isTyping && (
            <span className="ml-2 text-xs ui-text-secondary animate-pulse">
              typing...
            </span>
          )}
        </h2>
      </div>

      {/* 💬 MESSAGES */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.type === "text" ? (
              <div
                className={`
                  px-3 py-2 rounded-xl text-sm max-w-[70%]
                  ${
                    msg.sender === "me"
                      ? "ui-accent-bg ui-accent"
                      : "ui-surface-soft"
                  }
                `}
              >
                {msg.content}
              </div>
            ) : (
              <img
                src={msg.content}
                alt="sent"
                className="max-w-[140px] rounded-xl border border-[var(--border)]"
              />
            )}
          </div>
        ))}
      </div>

{/* ✍️ INPUT AREA */}
<div className="mt-3 flex items-center gap-2">

  {/* 📷 Image upload */}
  <label className="cursor-pointer p-2 rounded-lg ui-hover">
    <FaImage size={16} />
    <input
      type="file"
      accept="image/*"
      onChange={handleImage}
      className="hidden"
    />
  </label>

  {/* 📝 Input */}
  <input
    type="text"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Type a message..."
    className="
      flex-1 px-3 py-2 rounded-xl text-sm
      outline-none
      ui-surface-soft
      border border-[var(--border)]
    "
  />

  {/* 🚀 Send Button */}
  <button
    onClick={handleSend}
    disabled={!message.trim()}
    className={`
      p-2.5 rounded-xl flex items-center justify-center
      transition
      ${
        message.trim()
          ? "ui-accent-bg ui-accent ui-hover"
          : "ui-surface-soft opacity-50 cursor-not-allowed"
      }
    `}
  >
    <FaPaperPlane size={14} />
  </button>
</div>
    </div>
  );
};

export default TextChat;