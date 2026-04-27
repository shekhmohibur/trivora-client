import logo from "/logo.webp";
import { IoCall, IoCallOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { TbMessageReportFilled, TbHistory } from "react-icons/tb";
import { useState, useEffect } from "react";

const VoiceChat = () => {
  const [status, setStatus] = useState("idle");
  const [muted, setMuted] = useState(false);
  const [country, setCountry] = useState(null);

  // 🌍 Fetch country info
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setCountry({
          code: data.country_code,
          name: data.country_name,
        });
      } catch (err) {
        console.error("Failed to fetch country", err);
      }
    };

    fetchCountry();
  }, []);

  const handleCall = () => {
    if (status === "idle") {
      setStatus("connecting");
      setTimeout(() => setStatus("connected"), 2000);
    } else {
      setStatus("idle");
    }
  };

  const statusText = {
    idle: "Ready to connect",
    connecting: "Connecting...",
    connected: "Connected",
  };

  return (
    <div className="h-full flex flex-col justify-between">

      {/* 🔝 MAIN */}
      <div className="flex flex-col items-center justify-center flex-1">

        {/* 🌀 Logo + Flag */}
        <div className="relative flex items-center justify-center mb-6">

          {/* Pulse when active */}
          {status !== "idle" && (
            <div className="absolute w-32 h-32 rounded-full ui-accent-bg opacity-30 animate-ping" />
          )}

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 rounded-full shadow-lg"
          />

          {/* 🌍 Country Flag */}
          {country && (
            <img
              src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
              alt={country.name}
              title={country.name}
              className="
                absolute -bottom-2 -right-2
                w-8 h-8 rounded-full
                border-2 border-[var(--surface)]
                shadow-md
              "
            />
          )}
        </div>

        {/* 📡 STATUS */}
        <p className="text-sm ui-text-secondary mb-6">
          {statusText[status]}
        </p>

        {/* 🎛️ CONTROLS */}
        <div className="flex items-center gap-6">

          {/* Call */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={handleCall}
              className={`
                w-14 h-14 rounded-full flex items-center justify-center
                shadow-md ui-hover transition
                ${
                  status === "connected"
                    ? "bg-red-500 text-white"
                    : "ui-accent-bg ui-accent"
                }
              `}
            >
              {status === "idle" ? (
                <IoCallOutline size={22} />
              ) : (
                <IoCall size={22} />
              )}
            </button>

            <span className="text-xs ui-text-secondary">
              {status === "idle"
                ? "Call"
                : status === "connecting"
                ? "Cancel"
                : "End"}
            </span>
          </div>

          {/* Mute */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => setMuted((prev) => !prev)}
              disabled={status === "idle"}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center
                shadow-md transition
                ${
                  muted
                    ? "bg-red-500 text-white"
                    : "ui-surface-soft ui-text-secondary"
                }
                ${status === "idle" && "opacity-40 cursor-not-allowed"}
              `}
            >
              <IoMdMic size={20} />
            </button>

            <span className="text-xs ui-text-secondary">
              {muted ? "Muted" : "Mute"}
            </span>
          </div>

          {/* Report */}
          <div className="flex flex-col items-center gap-1">
            <button className="w-12 h-12 rounded-full flex items-center justify-center ui-surface-soft ui-text-secondary ui-hover shadow-md">
              <TbMessageReportFilled size={20} />
            </button>
            <span className="text-xs ui-text-secondary">Report</span>
          </div>
        </div>

        {/* ⚙️ OPTIONS */}
        <div className="mt-6 flex items-center gap-4 text-xs ui-text-secondary">

          <label className="flex items-center gap-1 cursor-pointer">
            <input type="checkbox" className="accent-[var(--accent)]" />
            Auto Call
          </label>

          <span>|</span>

          <button className="flex items-center gap-1 ui-hover px-2 py-1 rounded-md">
            <TbHistory size={14} />
            History
          </button>
        </div>
      </div>

      {/* 📢 AD */}
      <div className="mt-4">
        <div className="ui-surface-soft border border-[var(--border)] rounded-xl p-3 text-center text-xs ui-text-secondary">
          Advertisement
        </div>
      </div>
    </div>
  );
};

export default VoiceChat;