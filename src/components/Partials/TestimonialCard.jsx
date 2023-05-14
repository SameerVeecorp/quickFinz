import React from "react";
import Profile from "../../assets/profile.png";
import Mask from "../../assets/TestimonialMask.png";

const TestimonialCard = ({ text, name, profession, profileImg }) => {
  return (
    <div className="mt-16 h-auto w-full flex-col rounded-lg border-b-[4px] border-[#f75c29] bg-[#fff] px-8 py-6 drop-shadow-xl xl:w-[36rem]">
      <p className="text-start text-[14px] font-medium leading-[1.3rem] text-[#191919]/70">
        {text}
      </p>

      <div className="mt-5 flex w-full items-center gap-4">
        <div className="block md:hidden md:w-[45%]">
          <img src={profileImg ? profileImg : Profile} className="h-[5rem]" />
        </div>

        <div className="hidden md:block">
          <img
            src={profileImg ? profileImg : Profile}
            className=" h-[4.5rem]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-[15px] font-bold text-[#005cde]">{name}</p>

          <p className="text-[12px] font-medium">{profession}</p>

          <div className="absolute bottom-6 right-8 hidden md:block">
            <img src={Mask} className="h-[6rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
