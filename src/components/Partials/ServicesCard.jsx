import React from "react";

const ServicesCard = ({ img, text, title, className }) => {
  return (
    <div
      className={`flex  flex-col items-center justify-center text-center ${
        className ? className : "w-[18rem] md:w-[20rem]"
      } `}
    >
      <div className="relative flex items-center justify-center">
        <img src={img} alt={title} className="z-20 w-[3.5rem]" />
        <div className="absolute top-6 z-10 h-[3.2rem] w-[6rem] rounded-t-full bg-[#92cbdf] opacity-25" />
      </div>

      <div className="mt-8 text-text-color">
        <h3 className="text-lg font-bold">{title}</h3>

        <p className="mt-1 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
