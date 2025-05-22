import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 flex flex-col justify-between">
      {/* Header Section */}
      <div className="bottom-34 fixed sm:static sm:w-md sm:mx-auto">
        <h1 className="text-[28px] sm:text-[36px] text-[#1D2226] font-bold mt-4">
          Welcome to PopX
        </h1>
        <p className="text-black/60 text-[18px] sm:text-[20px] max-w-2xs mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Button Section */}
      <div className="w-full max-w-md mx-auto fixed bottom-0 left-0 right-0 px-4 py-4 bg-white shadow sm:shadow-none sm:bg-transparent space-y-2">
        <Link
          to={"/signup"}
          className="flex justify-center w-full bg-[#6C25FF] hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 cursor-pointer"
        >
          Create Account
        </Link>
        <Link
          to={"/login"}
          className="flex justify-center w-full bg-[#6C25FF4B] hover:bg-purple-400 hover:text-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 cursor-pointer"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
