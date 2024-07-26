import React from "react";

export const Costos = () => {
  return (
    <>
      <div className="flex mt-5">
        <p className="font-bold text-[25px]">$125.00</p>
        <div className="text-[18px] bg-black text-white font-semibold place-content-center px-2 rounded-md ml-4 h-[25px] mt-2">
          50%
        </div>
       
      </div>
      <p className="text-gray-500 font-semibold line-through">$250.00</p>
    </>
  );
};
