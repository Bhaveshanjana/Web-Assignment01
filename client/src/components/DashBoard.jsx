import React from "react";
import img from "../assets/Ellipse 114.png";
import { BsFillCameraFill } from "react-icons/bs";

const DashBoard = () => {
  return (
    <>
      {/* Heading */}
      <h2 className="text-[16px] font-medium text-[#1D2226] mt-6 px-4 mb-4 sm:text-2xl">
        Account Settings
      </h2>
      <div className=" bg-gray-100 px-4 py-6">
        {/* Profile Card */}
        <div className="flex items-start gap-4 mb-6">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={img}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            {/* Camera img */}
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1">
              <BsFillCameraFill className="text-white h-3 w-3" />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="text-sm font-semibold text-[#1D2226]">Marry Doe</h3>
            <p className="text-sm text-[#1D2226] ">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] text-[#1D2226] opacity-60 font-medium">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <hr className="border-t border-dashed border border-[#CBCBCB]" />
    </>
  );
};

export default DashBoard;
