import React from "react";

export const Hero = () => {
  return (
    <div className="px-2.5 flex flex-col justify-center items-center gap-20 bg-[url('Hero.jpg')] bg-no-repeat bg-cover bg-center h-screen w-full">
      <div className="px-17 py-23.5 border-4 border-white rounded-[4px]  mx-auto">
        <img
          src="/logo.svg"
          alt=""
          className="w-46.25 h-21.5 border-b-[2px] border-[#fff]"
        />
        <p className="font-ptsans text-[22px] font-normal text-white">
          САНКТ-ПЕТЕРБУРГ
        </p>
      </div>
      <p className="font-normal text-base leading-[1.5rem] text-center text-white max-w-[730px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum
        purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed
        iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus
        ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh
        magna feugiat id nunc, dui nisl viverra.
      </p>
    </div>
  );
};
