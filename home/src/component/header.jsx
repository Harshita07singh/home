import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/userLogout";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const walletData = {
    investment: "₹12,500",
    profile: "₹3,200",
    wallet: "₹9,300",
  };

  return (
    <header className="bg-[#0b0b47] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="https://xpo.ru/">
            <img src="https://xpo.ru/assets/images/logo-white.png" alt="logo" className="h-8" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#whatxpo" className="hover:text-blue-300">what is xpo</a>
          <a href="#whyxpo" className="hover:text-blue-300">why xpo</a>
          <a href="#xpoindex" className="hover:text-blue-300">xpo indexes</a>
          <a href="#fromindex" className="hover:text-blue-300">from index managers</a>
          <a href="/blogPage" className="hover:text-blue-300">blog</a>
          <a href="#team" className="hover:text-blue-300">team</a>
          <a href="#contact" className="hover:text-blue-300">contact</a>
        </nav>

        {/* Auth Buttons or Profile */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <a href="/signup" className="hidden md:inline-block bg-blue-500 px-4 py-2  hover:bg-blue-200 rounded-3xl">Sign up</a>
              <a href="/login" className="hidden md:inline-block bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-200">Sign in</a>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-400 transition"
              >
                {user.name} ▼
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-72 bg-blue-300 text-black rounded shadow-lg z-50 p-4">
                  <p className="font-semibold mb-2">My profile</p>
                  <div className="text-sm space-y-1 mb-3">
                    <p><strong>Name:</strong> {user?.name}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                    {user?.PhoneNumber && <p><strong>Phone:</strong> {user.PhoneNumber}</p>}
                  </div>

                  <p className="font-semibold mb-2">Wallet Overview</p>
                  <div className="text-sm space-y-1">
                    <p><strong>Investment:</strong> {walletData.investment}</p>
                    <p><strong>Profile Balance:</strong> {walletData.profile}</p>
                    <p><strong>Wallet:</strong> {walletData.wallet}</p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-green-500">Deposit</button>
                    <button className="bg-blue-900 text-white px-3 py-1 rounded hover:bg-red-500">Withdraw</button>
                  </div>

                  <div className="mt-4 text-center">
                    <button onClick={logout} className="text-sm hover:underline bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden ml-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {showMobileMenu && (
        <nav className="md:hidden bg-[#0b0b47] px-4 pb-4 space-y-2">
          <a href="#whatxpo" className="block text-white hover:text-blue-300">what is xpo</a>
          <a href="#whyxpo" className="block text-white hover:text-blue-300">why xpo</a>
          <a href="#xpoindex" className="block text-white hover:text-blue-300">xpo indexes</a>
          <a href="#fromindex" className="block text-white hover:text-blue-300">from index managers</a>
          <a href="/blogPage" className="block text-white hover:text-blue-300">blog</a>
          <a href="#team" className="block text-white hover:text-blue-300">team</a>
          <a href="#contact" className="block text-white hover:text-blue-300">contact</a>
          {!user ? (
            <>
              <a href="/signup" className="block bg-blue-500 px-6 py-2 rounded-3xl hover:bg-blue-600">Sign up</a>
              <a href="/login" className="block bg-blue-500 px-6 py-2 rounded-3xl hover:bg-blue-600">Sign in</a>
            </>
          ) : (
            <button onClick={logout} className="block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Logout</button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;