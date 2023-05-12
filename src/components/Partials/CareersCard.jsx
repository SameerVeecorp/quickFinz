import React from "react";
import Button from "./Button";

const CareersCard = ({ heading, text, children }) => {
  return (
    <div className="h-full w-full rounded-lg bg-[#fff] px-8 py-10 drop-shadow-xl md:w-[90%] xl:w-[80%]">
      <h2 className="text-[1.4rem] font-bold">{heading}</h2>

      <p className="my-3 flex flex-col text-base font-medium leading-[1.8] text-[#191919]/70">
        {text}
        {children}
      </p>

      <div className="mt-6">
        <Button text="Apply Now" />
      </div>
    </div>
  );
};

export default CareersCard;
