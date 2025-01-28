"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import TopHeader from "@/Components/TopHeader/TopHeader";


const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleGitHubLogin = () => {
    console.log("Login with GitHub");
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <section>
      <TopHeader title="Sign In Page" link1="Home" link2="Sign In" link3="/signIn" />
      <div className="px-5 py-[60px] ">
        <div className="flex justify-center items-center p-4">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md bg-white rounded-lg shadow-2xl border border-solid border-gray-400 p-8"
          >
            <h2 className="text-2xl font-bold text-center">
              Welcome Back!
            </h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              Login to access your account.
            </p>

            {/* Email or Username Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email or Username
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email or username"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg text-white font-medium bg-csYellow hover:bg-orange-500 transition-colors duration-200"
            >
              Login
            </button>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="px-3 text-sm">OR</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-gray-200 hover:bg-gray-100 transition"
              >
                <FcGoogle className="w-6 h-6" />
                <span className="font-medium ">Continue with Google</span>
              </button>

              <button
                type="button"
                onClick={handleGitHubLogin}
                className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-black text-white hover:bg-gray-800 transition"
              >
                <FaGithub className="w-6 h-6" />
                <span className="font-medium">Continue with GitHub</span>
              </button>
            </div>

            {/* Account Creation Link */}
            <p className="mt-6 text-sm text-center text-gray-600">
              No account?{" "}
              <a
                href="/signup"
                className="font-medium text-csYellow hover:underline "
              >
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
