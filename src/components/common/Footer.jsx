const Footer = () => {
  return (
    <footer className="
      w-full
      bg-[var(--surface)]/70
      backdrop-blur-xl
      border-t border-[var(--border)]
      px-4 py-6
    ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-[var(--text)]">Trivora</h2>
          <p className="text-xs ui-text-secondary">
            Play, compete, and climb the leaderboard.
          </p>
        </div>

        {/* Middle */}
        <div className="flex items-center gap-4 text-xs">
          <a href="#" className="hover:underline ui-text-secondary">About</a>
          <a href="#" className="hover:underline ui-text-secondary">Privacy</a>
          <a href="#" className="hover:underline ui-text-secondary">Terms</a>
          <a href="#" className="hover:underline ui-text-secondary">Support</a>
        </div>

        {/* Right */}
        <div className="text-xs ui-text-secondary text-center md:text-right">
          © {new Date().getFullYear()} Trivora  
        </div>

      </div>
    </footer>
  );
};

export default Footer;