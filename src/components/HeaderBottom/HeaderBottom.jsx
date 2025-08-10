import React from "react";
import { Container } from "../Container/Container";

export const HeaderBottom = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <Container>
        <div
          className="flex justify-between items-center
"
        >
          <img src="logo.svg" alt="" />
          <div className="flex font-ptsans text-xs font-normal text-[#969696]">
            <a className="hidden sm:block p-5 text-[#969696] cursor-pointer  no-underline outline-none hover:bg-[#1F1F1F] hover:text-white transition duration-300 ">
              ПОНРАВИЛОСЬ
            </a>
            <a className="hidden sm:block p-5 text-[#969696] cursor-pointer no-underline outline-none hover:bg-[#1F1F1F] hover:text-white transition duration-300">
              ЛИЧНЫЙ КАБИНЕТ
            </a>
            <a className="hidden sm:block p-5 text-[#969696] cursor-pointer no-underline outline-none hover:bg-[#1F1F1F] hover:text-white transition duration-300">
              НАСТРОЙКИ
            </a>
            <div className="flex gap-1.5  sm:gap-5 sm:ml-5">
              <img
                src="basket.svg"
                alt=""
                className="p-2.5 sm:p-5 cursor-pointer hover:bg-[#1F1F1F] transition duration-300"
              />
              <img
                src="search.svg"
                alt=""
                className="p-2.5 sm:p-5 cursor-pointer hover:bg-[#1F1F1F] transition duration-300"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
