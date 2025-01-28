'use client'

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import TopHeader from "@/Components/TopHeader/TopHeader";
import Link from "next/link";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleGitHubLogin = () => {
    console.log("Login with GitHub");
  };

  return (
   <section className="">
    <TopHeader title="Sign Up Page" link1="Home" link2="Sign Up" link3="/signUp" />
     <div className="px-5 py-[60px] md:px-[60px] md:py-[100px] max-w-screen-lg md:mx-auto">
        <div className="flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8"
      >
        <h2 className="text-3xl mb-6 font-bold text-center text-gray-800 \">
          Register
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 mt-2 border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-2 border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-2 border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full px-4 py-2 mt-2 border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
            required
          />
        </div>

        {/* Create an Account Button */}
        <button
          type="submit"
          className="w-full bg-csYellow text-white py-2 rounded-lg hover:bg-orange-500 transition duration-200 focus:ring-4 focus:ring-csYellow focus:outline-none"
        >
          Create an Account
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-3 text-sm text-gray-600">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Login with Socials */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 focus:ring-2 focus:ring-csYellow"
          >
            <FcGoogle className="w-6 h-6" />
            <span className="text-gray-700 font-medium">Login with Google</span>
          </button>

          <button
            onClick={handleGitHubLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-black text-white hover:bg-gray-900 transition duration-300 focus:ring-2 focus:ring-csYellow"
          >
            <FaGithub className="w-6 h-6" />
            <span className="font-medium">Login with GitHub</span>
          </button>
        </div>

        {/* Additional Info */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-csYellow font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </form>
        </div>
    </div>
   </section>
  );
};

export default SignUp;
