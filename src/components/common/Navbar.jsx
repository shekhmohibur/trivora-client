import { FaUser } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="mx-auto w-full px-5 backdrop-blur-lg py-4 shadow-lg rounded-2xl flex justify-between items-center">
      <div className="flex items-center gap-3">
        <h1 className="italic font-inter font-bold text-2xl">Trivora</h1>
        <div className="flex items-center gap-1 badge outline-1 outline-gray-600">
          <div className="relative flex items-center justify-center w-3 h-3">
            {/* Ping animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            {/* Solid dot */}
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <span className="font-inter text-xs font-bold">129</span>
          <span className="font-inter text-xs font-bold text-gray-400">online</span>
        </div>
        <div className="badge outline-1 outline-gray-600 py-4 hover:bg-gray-600/40 transition-all duration-300 cursor-pointer">
          <RiEqualizerFill size={21}/>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Link className="font-inter text-xl text-cyan-100 font-semibold">Login</Link>
        <div className="border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-600/40 transition-all duration-300">
          <FaUser size={21} className="text-cyan-200 "/>
        </div>
        <div>
          <Link>Profile</Link>
          <Link>Login</Link>
          <Link>Upgrage</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
