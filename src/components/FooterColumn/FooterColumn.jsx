import React from "react";

export const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-10 ">
      <h3 className="uppercase font-normal font-playfair text-2xl text-white">
        {title}
      </h3>
      {children}
    </div>
  );
};
