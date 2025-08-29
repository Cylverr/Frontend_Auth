import React from "react";

const Card = ({ text, request, action }) => {
  return (
    <div className="bg-[#FAFAFA] flex font-serif w-full max-w-sm flex-col gap-2 px-5 py-5 rounded-sm">
      <p className="text-[#010101] text-2xl lg:text-3xl">{text}</p>
      <p className="text-[#010101] text-lg lg:text-xl">{request}</p>
      <button className="text-red-500 text-right text-lg lg:text-xl">
        {action}
      </button>
    </div>
  );
};

export default Card;
