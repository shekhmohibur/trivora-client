import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProfileModal from "../components/modals/ProfileModal";
import { useState } from "react";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const fakeUser = {
    userId: "a0ef6e92-a31b-4c10-bd85-d0a1",
    username: "CuddlyCentipede55",
    level: "GUEST",
    isPro: false,
  };
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar setOpen={setOpen} open={open}/>
      <main className="grow container mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
      {/* modals */}
            <ProfileModal
        isOpen={open}
        onClose={() => setOpen(false)}
        userData={fakeUser}
      />
    </div>
  );
};

export default MainLayout;