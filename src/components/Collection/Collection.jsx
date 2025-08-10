import React from "react";

export const Collection = () => {
  return (
    <div className="px-2.5 flex flex-col justify-center items-center gap-13 bg-[url('NewCollection.jpg')] bg-no-repeat bg-cover bg-center h-screen w-full text-white">
      <h1 className="font-bold text-4xl font-playfair text-center">
        НОВАЯ КОЛЛЕКЦИЯ
      </h1>
      <button className="py-3 px-7 border border-white bg-transparent cursor-pointer font-normal text-lg hover:bg-white hover:text-black transition duration-300 ease-in-out">
        КАТАЛОГ
      </button>
    </div>
  );
};
