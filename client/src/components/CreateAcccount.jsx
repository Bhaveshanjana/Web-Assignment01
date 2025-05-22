import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    e.target.preventDeafult();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-between  px-4 py-6 mt-9">
      {/* Form Card */}
      <form
        onSubmit={handleChange}
        className="w-full max-w-xl flex-grow sm:bg-white sm:shadow-2xl rounded-lg sm:p-4"
      >
        <h2 className="text-2xl font-bold text-[#1D2226] mb-6">
          Create your
          <br />
          <span className="text-black">PopX account</span>
        </h2>

        {/* Input fields */}
        <div className="space-y-6">
          <div className="relative ">
            <label
              htmlFor="fullName"
              className="absolute -top-3 left-3 bg-white px-1 text-[13px] text-[#6C25FF] font-medium"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-5 py-2 text-[13px] font-medium border border-[#CBCBCB] rounded-md placeholder:text-[#1D2226] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone Number */}
          <div className="relative ">
            <label className="absolute -top-3 left-3 text-[13px] font-medium text-[#6C25FF] bg-white px-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-5 text-[13px] font-medium placeholder:text-[#1D2226] py-2 border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute -top-3 left-3 text-[13px] font-medium text-[#6C25FF] bg-white px-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-5 text-[13px] font-medium placeholder:text-[#1D2226] py-2 border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="absolute -top-3 left-3 text-[13px] font-medium text-[#6C25FF] bg-white px-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-5 text-[13px] font-medium placeholder:text-[#1D2226] py-2 border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Company Name */}
          <div className="relative">
            <label className="absolute -top-3 left-3 text-[13px] font-medium text-[#6C25FF] bg-white px-1">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-5 text-[13px] font-medium placeholder:text-[#1D2226] py-2 border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Radio buttons */}
        <p className="text-sm text-gray-700 mt-3">
          Are you an Agency?<span className="text-red-500">*</span>
        </p>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === "yes"}
              onChange={handleChange}
              className="accent-purple-600 size-4"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === "no"}
              onChange={handleChange}
              className="accent-purple-600 size-4"
            />
            No
          </label>
        </div>
        {/* Submit Button */}
        <div className="w-full max-w-md mt-6 sm:static sm:mt-6 fixed bottom-0 mx-auto left-0 right-0 px-4 py-4 ">
          <Link
            to={"/login"}
            className="flex justify-center w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 disabled:cursor-not-allowed cursor-pointer"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
