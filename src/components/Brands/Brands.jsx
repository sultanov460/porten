import React from "react";
import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Brands = () => {
  const brands = [
    { id: 1, img: "/brand.svg", label: "Coco" },
    { id: 2, img: "/brand.svg", label: "Coco" },
    { id: 3, img: "/brand.svg", label: "Coco" },
    { id: 4, img: "/brand.svg", label: "Coco" },
  ];
  return (
    <div className="bg-[#0F0F0F] pt-15 pb-20">
      <Container className="flex flex-col gap-20">
        <SectionTitle title={"наши бренды"} underline />
        <div className="flex gap-7.5 flex-wrap justify-center xl:flex-nowrap">
          {brands.map((brand) => (
            <div key={brand.id}>
              <img src={brand.img} alt={brand.label} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
