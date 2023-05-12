import React from "react";

import DigiLogo from "../../assets/digitalLogo.png";
import Button from "./Button";

const InsuranceCard = ({ name, heading, details, icon }) => {
  return (
    <div className="h-[22.5rem] w-full rounded-lg border-b-[4px] border-orange bg-[#fff] px-6 py-8 drop-shadow-lg md:w-[18rem]">
      <div className="flex w-full items-center justify-between">
        {icon}
        <img src={DigiLogo} className="w-[3rem]" />
      </div>

      <div className="mt-3 flex flex-col items-start">
        <h5 className="font-bold text-blue">{name}</h5>

        <p className="mt-2 flex flex-col gap-2 text-sm font-semibold text-[#000]">
          {heading}
        </p>

        <ul className="ml-4 mt-3 flex list-image-[url('/src/assets/smallhand.svg')] flex-col gap-1 text-[12px] font-medium">
          {details}
        </ul>
      </div>

      <div className="mt-4">
        <Button text="Read More" className="text-[13px]" />
      </div>
    </div>
  );
};

export default InsuranceCard;
