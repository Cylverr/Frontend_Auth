import React from "react";

const SigninForm = () => {
  return (
    <form className="flex flex-col items-center gap-5  mt-2">
      <input
        type="email"
        placeholder="Email"
        className="px-2 min-w-xs py-2 text-[#010101] font-serif border border-red-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="px-2 min-w-xs  py-2 font-serif border border-red-400"
      />

      <div className="w-full flex justify-end">
        <button className="text-red-500 font-serif text-sm lg:text-base cursor-pointer">
          Forgot Password?
        </button>
      </div>

      <button className="bg-red-500 rounded-md min-w-xs py-2 text-[#FAFAFA] font-serif text-base lg:text-lg cursor-pointer">
        Sign In
      </button>
    </form>
  );
};

export default SigninForm;
