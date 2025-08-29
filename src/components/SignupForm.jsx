import React from "react";

const SignupForm = () => {
  return (
    <form className="flex flex-col items-center gap-5  mt-2">
      <input
        type="name"
        placeholder="Full Name"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
      />

      <input
        type="email"
        placeholder="Email"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
      />

      <input
        type="Phone number"
        placeholder="Phone Number"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="px-2 min-w-xs  py-2 font-serif border border-red-400"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="px-2 min-w-xs  py-2 font-serif border border-red-400"
      />

      <button className="bg-red-500 rounded-md min-w-xs py-2 text-[#FAFAFA] font-serif text-base lg:text-lg cursor-pointer">
        Verify Email
      </button>

      <button className="bg-red-500 rounded-md min-w-xs py-2 text-[#FAFAFA] font-serif text-base lg:text-lg cursor-pointer">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
