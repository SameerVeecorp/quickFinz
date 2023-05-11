import React from "react";
import Bike from "../../assets/bike.png";
import DigiLogo from "../../assets/digitalLogo.png";
import Button from "./Button";

const InsuranceCard = () => {
  return (
    <div className="h-[17.5rem] w-full rounded-lg border-b-[4px] border-orange bg-[#fff] px-6 pt-6 drop-shadow-lg md:w-[23rem]">
      <div className="flex w-full items-center justify-between">
        <img src={Bike} className="w-[4rem]" />
        <img src={DigiLogo} className="w-[4.8rem]" />
      </div>

      <div className="mt-3 flex flex-col items-start">
        <h5 className="font-bold text-blue">Bike Insurance</h5>

        <p className="mt-2 flex flex-col gap-2 text-sm font-medium">
          <span>Lorem Ipsum is simply dummy text of the printing</span>
          <span>Lorem Ipsum is simply dummy text of the printing</span>
        </p>
      </div>

      <div className="mt-4">
        <Button text="Read More" />
      </div>
    </div>
  );
};

export default InsuranceCard;
