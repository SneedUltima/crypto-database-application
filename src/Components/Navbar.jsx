import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuOpen = () => setNav(!nav);

  return (
    <div className="rounded-div bg-crypto-purple-light flex justify-between items-center text-crypto-white h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl font-light ">CryptoScape.</h1>
      </Link>
      <div className="hidden md:block">
        <Link to="/signin" className="p-4">
          Login
        </Link>
        <Link
          to="/signup"
          className="px-5 py-2 bg-crypto-purple-button ml-2 rounded-2xl shadow-lg hover:bg-crypto-purple-light
          border-2 border-crypto-purple-button ease-in-out duration-300"
        >
          Sign up
        </Link>
      </div>
      {/* Menu Icon */}
      <div onClick={menuOpen} className="block md:hidden cursor-pointer z-10">
        {nav ? (
          <AiOutlineClose className=" text-2xl" />
        ) : (
          <AiOutlineMenu className=" text-2xl" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-crypto-purple-light ease-in duration-300 z-50"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li className="py-6">
            <Link to="/">Account</Link>
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button className="w-full my-2 p-3 bg-crypto-white text-crypto-black rounded-2xl shadow-xl">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 p-3 bg-crypto-purple rounded-2xl shadow-xl hover:bg-crypto-purple-light">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
