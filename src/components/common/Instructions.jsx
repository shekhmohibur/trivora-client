const Instructions = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 py-12">

      {/* 🧠 Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome to <span className="ui-accent">Trivora</span>
        </h1>
        <p className="mt-3 text-sm ui-text-secondary">
          Talk to strangers instantly with voice and text — simple, fast, and real.
        </p>
      </div>

      {/* 📌 Steps */}
      <div className="space-y-6">

        {/* Step */}
        <div className="flex gap-4 items-start">
          <div className="w-7 h-7 rounded-full ui-accent-bg ui-accent text-xs flex items-center justify-center font-semibold">
            1
          </div>
          <div>
            <h2 className="text-sm font-medium">Start a Call</h2>
            <p className="text-sm ui-text-secondary">
              Tap the call button to connect with a random stranger instantly.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-7 h-7 rounded-full ui-accent-bg ui-accent text-xs flex items-center justify-center font-semibold">
            2
          </div>
          <div>
            <h2 className="text-sm font-medium">Talk Freely</h2>
            <p className="text-sm ui-text-secondary">
              Use your microphone to chat in real time. Mute anytime when needed.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-7 h-7 rounded-full ui-accent-bg ui-accent text-xs flex items-center justify-center font-semibold">
            3
          </div>
          <div>
            <h2 className="text-sm font-medium">Use Text Chat</h2>
            <p className="text-sm ui-text-secondary">
              Open messages to send text or images alongside your voice chat.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-7 h-7 rounded-full ui-accent-bg ui-accent text-xs flex items-center justify-center font-semibold">
            4
          </div>
          <div>
            <h2 className="text-sm font-medium">Stay Safe</h2>
            <p className="text-sm ui-text-secondary">
              Report inappropriate users instantly or leave anytime.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-7 h-7 rounded-full ui-accent-bg ui-accent text-xs flex items-center justify-center font-semibold">
            5
          </div>
          <div>
            <h2 className="text-sm font-medium">Auto Connect</h2>
            <p className="text-sm ui-text-secondary">
              Enable auto call to instantly move to the next conversation.
            </p>
          </div>
        </div>
      </div>

      {/* 🌿 Divider */}
      <div className="my-10 h-px bg-[var(--border)] opacity-60" />

      {/* 💡 Tips */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold">Tips</h3>
        <ul className="text-sm ui-text-secondary space-y-1">
          <li>• Use headphones for better clarity</li>
          <li>• Keep your connection stable</li>
          <li>• Be respectful and friendly</li>
        </ul>
      </div>

      {/* ✨ Footer */}
      <p className="mt-10 text-center text-xs ui-text-secondary">
        Enjoy the experience ✦
      </p>
    </div>
  );
};

export default Instructions;