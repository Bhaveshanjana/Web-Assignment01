import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-6 flex items-center justify-center px-4 ">
      <div className="w-full max-w-sm sm:max-w-xl sm:mt-20 space-y-4">
        {/* Heading */}
        <div>
          <h1 className="text-2xl font-bold text-[#1D2226]">Signin to your</h1>
          <h1 className="text-2xl font-bold text-[#1D2226]">PopX account</h1>
          <p className="text-[#1D2226] text-[18px] mt-2 opacity-60">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        {/* Email Field */}
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-3 left-3 bg-white px-2 text-[13px] text-[#6C25FF] font-medium"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 text-[13px] font-medium placeholder:text-[#919191] border border-[#CBCBCB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 "
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <label
            htmlFor="password"
            className="absolute -top-3 left-3 bg-white px-2 text-[13px] text-[#6C25FF] font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 text-[13px] font-medium placeholder:text-[#919191] border border-[#CBCBCB] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Login Button */}
        <Link
          to={"/home"}
          className="flex justify-center w-full bg-[#CBCBCB] text-white font-semibold py-2 px-4 rounded-md cursor-pointer hover:bg-[#7255657b] hover:text-black transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
