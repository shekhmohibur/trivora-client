import { useState, useEffect } from "react";

const Sidebar = ({ isPro = false }) => {
  // 🧠 Load from localStorage safely
  const getStored = () => {
    try {
      return JSON.parse(localStorage.getItem("filters")) || {};
    } catch {
      return {};
    }
  };

  const stored = getStored();

  // 🔹 States (initialized from storage)
  const [gender, setGender] = useState(stored.gender || "male");
  const [lookingFor, setLookingFor] = useState(
    stored.lookingFor || "random"
  );
  const [preferred, setPreferred] = useState(stored.preferred || []);
  const [blocked, setBlocked] = useState(stored.blocked || []);
  const [interests, setInterests] = useState(stored.interests || []);

  const [countries, setCountries] = useState([]);

  const [preferredQuery, setPreferredQuery] = useState("");
  const [blockedQuery, setBlockedQuery] = useState("");
  const [interestInput, setInterestInput] = useState("");

  // 🌍 Fetch countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return;

        const formatted = data.map((c) => ({
          name: c.name.common,
          code: c.cca2?.toLowerCase(),
        }));

        setCountries(formatted);
      })
      .catch((err) => console.error(err));
  }, []);

  // 🔍 Filter helper
  const filterCountries = (query) =>
    countries
      .filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 6);

  // ➕ Add country
  const addCountry = (c, type) => {
    const limit = isPro ? Infinity : 3;

    if (type === "preferred") {
      if (preferred.length >= limit) return;
      if (preferred.find((x) => x.name === c.name)) return;

      setPreferred((prev) => [...prev, c]);
      setPreferredQuery("");
    }

    if (type === "blocked") {
      if (blocked.length >= limit) return;
      if (blocked.find((x) => x.name === c.name)) return;

      setBlocked((prev) => [...prev, c]);
      setBlockedQuery("");
    }
  };

  // ❌ Remove
  const removeCountry = (name, type) => {
    if (type === "preferred") {
      setPreferred((prev) =>
        prev.filter((c) => c.name !== name)
      );
    } else {
      setBlocked((prev) =>
        prev.filter((c) => c.name !== name)
      );
    }
  };

  // ➕ Interest
  const addInterest = () => {
    if (!interestInput.trim()) return;
    if (interests.includes(interestInput)) return;

    setInterests((prev) => [...prev, interestInput]);
    setInterestInput("");
  };

  // 🔄 Auto-save (modern UX)
  useEffect(() => {
    const data = {
      gender,
      lookingFor,
      preferred,
      blocked,
      interests,
    };

    localStorage.setItem("filters", JSON.stringify(data));
  }, [gender, lookingFor, preferred, blocked, interests]);

  return (
    <div className="h-full w-full ui-surface p-4 space-y-5 overflow-y-auto">

      {/* 🧑 Gender */}
      <div>
        <p className="text-xs ui-text-secondary mb-1">
          My Gender
        </p>
        <div className="flex gap-2">
          {["male", "female"].map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`px-3 py-1 rounded-lg text-xs ${
                gender === g
                  ? "ui-accent-bg ui-accent"
                  : "ui-surface-soft"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 🎯 Looking For (PRO) */}
      <div>
        <p className="text-xs ui-text-secondary mb-1">
          Looking For {!isPro && "(Pro)"}
        </p>

        <div className="flex gap-2">
          {["random", "male", "female"].map((g) => (
            <button
              key={g}
              disabled={!isPro && g !== "random"}
              onClick={() => isPro && setLookingFor(g)}
              className={`
                px-3 py-1 rounded-lg text-xs
                ${
                  lookingFor === g
                    ? "ui-accent-bg ui-accent"
                    : "ui-surface-soft"
                }
                ${
                  !isPro && g !== "random"
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }
              `}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 🌍 Preferred */}
      <div>
        <p className="text-xs ui-text-secondary mb-1">
          Preferred Countries {!isPro && "(max 3)"}
        </p>

        <input
          value={preferredQuery}
          onChange={(e) => setPreferredQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-2 py-1 text-xs rounded-lg ui-surface-soft border border-[var(--border)]"
        />

        {preferredQuery && (
          <div className="mt-2 space-y-1">
            {filterCountries(preferredQuery).map((c) => (
              <div
                key={c.name}
                onClick={() => addCountry(c, "preferred")}
                className="flex items-center gap-2 text-xs cursor-pointer ui-hover p-1 rounded"
              >
                <img
                  src={`https://flagcdn.com/w20/${c.code}.png`}
                  className="w-4 h-4"
                />
                {c.name}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1 mt-2">
          {preferred.map((c) => (
            <span
              key={c.name}
              onClick={() =>
                removeCountry(c.name, "preferred")
              }
              className="px-2 py-1 text-xs rounded-full ui-accent-bg ui-accent cursor-pointer"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>

      {/* 🚫 Blocked */}
      <div>
        <p className="text-xs ui-text-secondary mb-1">
          Blocked Countries {!isPro && "(max 3)"}
        </p>

        <input
          value={blockedQuery}
          onChange={(e) => setBlockedQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-2 py-1 text-xs rounded-lg ui-surface-soft border border-[var(--border)]"
        />

        {blockedQuery && (
          <div className="mt-2 space-y-1">
            {filterCountries(blockedQuery).map((c) => (
              <div
                key={c.name}
                onClick={() => addCountry(c, "blocked")}
                className="flex items-center gap-2 text-xs cursor-pointer ui-hover p-1 rounded"
              >
                <img
                  src={`https://flagcdn.com/w20/${c.code}.png`}
                  className="w-4 h-4"
                />
                {c.name}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1 mt-2">
          {blocked.map((c) => (
            <span
              key={c.name}
              onClick={() =>
                removeCountry(c.name, "blocked")
              }
              className="px-2 py-1 text-xs rounded-full bg-red-500 text-white cursor-pointer"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>

      {/* 💡 Interests */}
      <div>
        <p className="text-xs ui-text-secondary mb-1">
          Interests
        </p>

        <div className="flex gap-2">
          <input
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
            className="flex-1 px-2 py-1 text-xs rounded-lg ui-surface-soft border border-[var(--border)]"
          />
          <button
            onClick={addInterest}
            className="px-2 text-xs ui-accent-bg ui-accent rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-1 mt-2">
          {interests.map((i) => (
            <span
              key={i}
              onClick={() =>
                setInterests((prev) =>
                  prev.filter((x) => x !== i)
                )
              }
              className="px-2 py-1 text-xs rounded-full ui-surface-soft cursor-pointer"
            >
              {i}
            </span>
          ))}
        </div>
      </div>

      {/* 🔒 Pro notice */}
      {!isPro && (
        <div className="ui-surface-soft border border-[var(--border)] rounded-xl p-3 text-xs text-center">
          Upgrade to{" "}
          <span className="ui-accent font-medium">Pro</span> for unlimited filters
        </div>
      )}
    </div>
  );
};

export default Sidebar;