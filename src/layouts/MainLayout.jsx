import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProfileModal from "../components/modals/ProfileModal";
import Sidebar from "../components/common/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fakeUser = {
    userId: "a0ef6e92-a31b-4c10-bd85-d0a1",
    username: "CuddlyCentipede55",
    level: "GUEST",
    isPro: false,
  };

  return (
    <div className="flex flex-col min-h-screen bg-(--bg) text-(--text-primary)">

      {/* Navbar (controls both) */}
      <Navbar
        setOpen={setProfileOpen}
        open={profileOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main */}
      <main className="flex-1 w-full container mx-auto pt-20 px-4 pb-10">
        <Outlet />
      </main>

      <Footer />

      {/* Profile */}
      <ProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        userData={fakeUser}
      />

      {/* 🔥 Sidebar Drawer */}
      <>
        {/* Backdrop */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
        )}

        {/* Drawer */}
        <div
          className={`
            fixed top-0 left-0 h-full w-[300px] max-w-[85vw]
            ui-surface shadow-2xl z-50
            transform transition-transform duration-300

            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Sidebar />
        </div>
      </>
    </div>
  );
};

export default MainLayout;