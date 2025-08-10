import React from "react";
import { Container } from "../Container/Container";

export const HeaderTop = () => {
  return (
    <div
      className="bg-black py-3.5
"
    >
      <Container>
        <div className="flex justify-between font-normal text-xs text-[#969696] align-center font-ptsans">
          <div className="flex gap-3.5 ">
            <img src="/phone.svg" alt="" className="cursor-pointer" />
            <div>
              <p className="hidden sm:block">
                8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 cursor-pointer hover:text-white transition duration-300">
            <img src="/enter.svg" alt="" />
            <p>Войти / Регистрация</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
