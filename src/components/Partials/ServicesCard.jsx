import React from "react";

const ServicesCard = ({ img, text, title }) => {
  return (
    <div className="flex items-center justify-center text-center flex-col w-[18rem] md:w-[20rem]">
      <div className="relative flex items-center justify-center">
        <img src={img} alt={title} className="w-[3.5rem]" />
        <div className=" bg-[#92cbdf] opacity-25 w-[6rem] h-[3.2rem] absolute top-6 rounded-t-full" />
      </div>

      <div className="mt-8 text-text-color">
        <h3 className="font-bold text-lg">{title}</h3>

        <p className="mt-1 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
