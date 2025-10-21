import React, { JSX } from "react";

export const Box = (): JSX.Element => {
  return (
    <div className="w-[118px] h-[54px]">
      <header className="fixed top-[66px] left-[104px] w-[122px] h-[54px] flex flex-col">
        <p className="w-[104px] h-[21px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-sm tracking-[0] leading-[normal]">
          Selamat siang,
        </p>

        <h1 className="w-[118px] h-[33px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-text-1 text-[22px] tracking-[0] leading-[normal]">
          Kiting kibo
        </h1>
      </header>
    </div>
  );
};