import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/userLogout";
import { getWallet, depositFunds, withdrawFunds } from "../utils/walletApi";
const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDepositing, setIsDepositing] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [walletData, setWalletData] = useState(null);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const data = await getWallet();
        setWalletData(data);
      } catch (err) {
        console.error(
          "Wallet fetch error:",
          err.response?.data?.message || err.message
        );
      }
    };

    if (user) fetchWallet();
  }, [user]);

  const handleDeposit = async () => {
    const amount = parseFloat(depositAmount);
    const regex = /^\d+(\.\d+)?$/;

    if (!regex.test(depositAmount)) {
      return alert("Enter a valid numeric amount (e.g., 100 or 100.50)");
    }

    if (amount <= 0) {
      return alert("Amount must be greater than 0");
    }

    setIsDepositing(true);

    try {
      await depositFunds(amount);
      alert(`₹${amount} deposited successfully`);
      setShowDepositModal(false);
      setDepositAmount("");
      const updated = await getWallet();
      setWalletData(updated);
    } catch (err) {
      console.error(
        "Deposit error:",
        err.response?.data?.message || err.message
      );
      alert(
        "Deposit failed: " + (err.response?.data?.message || "Network error")
      );
    } finally {
      setIsDepositing(false);
    }
  };

  const handleWithdraw = async () => {
    const amount = parseFloat(withdrawAmount);
    const regex = /^\d+(\.\d+)?$/;

    if (!regex.test(withdrawAmount)) {
      return alert("Enter a valid numeric amount (e.g., 100 or 100.50)");
    }

    if (amount <= 0) {
      return alert("Amount must be greater than 0");
    }

    setIsWithdrawing(true);

    try {
      await withdrawFunds(amount);
      alert(`₹${amount} withdrawn successfully`);
      setShowWithdrawModal(false);
      setWithdrawAmount("");
      const updated = await getWallet();
      setWalletData(updated);
    } catch (err) {
      console.error(
        "Withdrawal error:",
        err.response?.data?.message || err.message
      );
      alert(
        "Withdrawal failed: " + (err.response?.data?.message || "Network error")
      );
    } finally {
      setIsWithdrawing(false);
    }
  };
  return (
    <header className="bg-[#0b0b47] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="https://xpo.ru/">
            <img
              src="https://xpo.ru/assets/images/logo-white.png"
              alt="logo"
              className="h-8"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#whatxpo" className="hover:text-blue-300">
            what is xpo
          </a>
          <a href="#whyxpo" className="hover:text-blue-300">
            why xpo
          </a>
          <a href="#xpoindex" className="hover:text-blue-300">
            xpo indexes
          </a>
          <a href="#fromindex" className="hover:text-blue-300">
            from index managers
          </a>
          <a href="/blogPage" className="hover:text-blue-300">
            blog
          </a>
          <a href="#team" className="hover:text-blue-300">
            team
          </a>
          <a href="#contact" className="hover:text-blue-300">
            contact
          </a>
        </nav>

        {/* Auth Buttons or Profile */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <a
                href="/signup"
                className="hidden md:inline-block bg-blue-500 px-4 py-2  hover:bg-blue-200 rounded-3xl"
              >
                Sign up
              </a>
              <a
                href="/login"
                className="hidden md:inline-block bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-200"
              >
                Sign in
              </a>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-400 transition"
              >
                {user.name} ▼
              </button>

              {/* {showDropdown && (
                <div className="absolute right-0 mt-2 w-72 bg-blue-300 text-black rounded shadow-lg z-50 p-4">
                  <p className="font-semibold mb-2">My profile</p>
                  <div className="text-sm space-y-1 mb-3">
                    <p>
                      <strong>Name:</strong> {user?.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {user?.email}
                    </p>
                    {user?.PhoneNumber && (
                      <p>
                        <strong>Phone:</strong> {user.PhoneNumber}
                      </p>
                    )}
                  </div>

                  <p className="font-semibold mb-2">Wallet Overview</p>

                  {walletData ? (
                    <>
                      <p>
                        <strong>Investment:</strong> ₹
                        {walletData.investmentAmount}
                      </p>
                      <p>
                        <strong>Profile Balance:</strong> ₹
                        {walletData.profileAmount}
                      </p>
                      <p>
                        <strong>Wallet:</strong> ₹{walletData.balance}
                      </p>
                    </>
                  ) : (
                    <p>Loading wallet...</p>
                  )}

                  <div className="mt-4 flex justify-between">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-green-500"
                      onClick={() => setShowDepositModal(true)}
                    >
                      Deposit
                    </button>

                    <button className="bg-blue-900 text-white px-3 py-1 rounded hover:bg-red-500">
                      Withdraw
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      onClick={logout}
                      className="text-sm hover:underline bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )} */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-72 bg-blue-300 text-black rounded shadow-lg z-50 p-4">
                  <p className="font-semibold mb-2">My profile</p>
                  <div className="text-sm space-y-1 mb-3">
                    <p>
                      <strong>Name:</strong> {user?.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {user?.email}
                    </p>
                    {user?.PhoneNumber && (
                      <p>
                        <strong>Phone:</strong> {user.PhoneNumber}
                      </p>
                    )}
                  </div>

                  <p className="font-semibold mb-2">Wallet Overview</p>

                  {walletData ? (
                    <div className="bg-white p-2 rounded shadow">
                      <p className="text-center font-bold mb-2">
                        Balance: ₹{walletData.balance.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        Last updated:{" "}
                        {new Date(walletData.updatedAt).toLocaleString()}
                      </p>

                      {walletData.transactions &&
                        walletData.transactions.length > 0 && (
                          <div className="max-h-28 overflow-y-auto text-xs">
                            <p className="font-semibold">
                              Recent Transactions:
                            </p>
                            {walletData.transactions
                              .slice(0, 5)
                              .map((tx, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between my-1 border-b pb-1"
                                >
                                  <span className="capitalize">{tx.type}</span>
                                  <span
                                    className={
                                      tx.type === "deposit"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }
                                  >
                                    {tx.type === "deposit" ? "+" : "-"} ₹
                                    {tx.amount.toFixed(2)}
                                  </span>
                                </div>
                              ))}
                          </div>
                        )}
                    </div>
                  ) : (
                    <p className="text-center py-2 bg-gray-200 rounded">
                      Loading wallet...
                    </p>
                  )}

                  <div className="mt-4 flex justify-between">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-green-500"
                      onClick={() => setShowDepositModal(true)}
                    >
                      Deposit
                    </button>

                    <button
                      className="bg-blue-900 text-white px-3 py-1 rounded hover:bg-red-500"
                      onClick={() => setShowWithdrawModal(true)}
                    >
                      Withdraw
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      onClick={logout}
                      className="text-sm hover:underline bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}

              {/* Add withdraw modal */}
              {showWithdrawModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded shadow-lg text-black w-80">
                    <h2 className="text-lg font-semibold mb-4">
                      Withdraw from Wallet
                    </h2>
                    {walletData && (
                      <p className="text-sm mb-2">
                        Available Balance: ₹{walletData.balance.toFixed(2)}
                      </p>
                    )}
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full p-2 border rounded mb-4"
                    />
                    <div className="flex justify-between">
                      <button
                        onClick={handleWithdraw}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        disabled={isWithdrawing}
                      >
                        {isWithdrawing ? "Processing..." : "Confirm"}
                      </button>
                      <button
                        onClick={() => setShowWithdrawModal(false)}
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden ml-2">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {showMobileMenu && (
        <nav className="md:hidden bg-[#0b0b47] px-4 pb-4 space-y-2">
          <a href="#whatxpo" className="block text-white hover:text-blue-300">
            what is xpo
          </a>
          <a href="#whyxpo" className="block text-white hover:text-blue-300">
            why xpo
          </a>
          <a href="#xpoindex" className="block text-white hover:text-blue-300">
            xpo indexes
          </a>
          <a href="#fromindex" className="block text-white hover:text-blue-300">
            from index managers
          </a>
          <a href="/blogPage" className="block text-white hover:text-blue-300">
            blog
          </a>
          <a href="#team" className="block text-white hover:text-blue-300">
            team
          </a>
          <a href="#contact" className="block text-white hover:text-blue-300">
            contact
          </a>
          {!user ? (
            <>
              <a
                href="/signup"
                className="block bg-blue-500 px-6 py-2 rounded-3xl hover:bg-blue-600"
              >
                Sign up
              </a>
              <a
                href="/login"
                className="block bg-blue-500 px-6 py-2 rounded-3xl hover:bg-blue-600"
              >
                Sign in
              </a>
            </>
          ) : (
            <button
              onClick={logout}
              className="block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              Logout
            </button>
          )}
        </nav>
      )}
      {showDepositModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-black w-80">
            <h2 className="text-lg font-semibold mb-4">Deposit to Wallet</h2>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={handleDeposit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={isDepositing}
              >
                {isDepositing ? "Depositing..." : "Confirm"}
              </button>
              <button
                onClick={() => setShowDepositModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
