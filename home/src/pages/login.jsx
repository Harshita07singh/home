import React, { useState } from "react";
import loginimg from "../assets/images/login.png";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);

    try {
      // Optionally use your custom hook
      await login(formData.email, formData.password);

      // Or use axios directly
      // const response = await axios.post(`${BASE_URL}/login`, {
      //   email: formData.email,
      //   password: formData.password,
      // });

      // const userId = response.data.user_id;
      // console.log("User ID:", userId);

      // localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={loginimg}
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>

          <h4 className="text-1xl mt-3 mb-6 text-gray-500 text-center">
            XPO is a leading online trading platform, providing users with access to global financial markets.
            With intuitive features and expert support, XPO empowers traders to achieve their investment goals.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
  