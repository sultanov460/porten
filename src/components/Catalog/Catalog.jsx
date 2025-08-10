import React from "react";
import { Container } from "../Container/Container";

export const Catalog = () => {
  const data = [
    {
      id: 1,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
    {
      id: 2,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
    {
      id: 3,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
    {
      id: 4,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
    {
      id: 5,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
    {
      id: 6,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
    {
      id: 7,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
    {
      id: 8,
      title: "Louis XVI ATHOS",
      price: "165 000 руб.",
      image: "/watch.svg",
    },
  ];
  return (
    <div className="py-17 md:pt-30 md:pb-37.5 text-white">
      <Container>
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="font-bold text-4xl font-playfair text-center">
            НОВЫЕ ПОСТУПЛЕНИЯ
          </h1>
          <div className="w-[120px] border border-white"></div>
          <div className="flex flex-wrap gap-x-[23px] gap-y-10 mt-[41px] justify-center">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-full xs:max-w-62.5 cursor-pointer border border-transparent hover:border-white hover:-translate-y-[5px] transition-transform duration-300"
              >
                <div className="bg-[#191B1C] py-13.5 px-5.5">
                  <img className="mx-auto" src={item.image} alt={item.title} />
                </div>
                <h3 className="font-playfair font-normal text-lg text-left mt-[25px]">
                  {item.title}
                </h3>
                <p className="font-playfair font-bold text-base text-left mt-[10px]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
