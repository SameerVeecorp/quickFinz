import React from "react";
import Profile from "../../assets/profile.png";
import Mask from "../../assets/TestimonialMask.png";

const TestimonialCard = () => {
  return (
    <div className="mt-16 hidden h-auto w-full flex-col rounded-lg border-b-[4px] border-[#f75c29] bg-[#fff] px-8 py-6 drop-shadow-xl lg:flex xl:w-[36rem]">
      <p className="text-[14px] font-medium leading-[1.3rem] text-[#191919]/70">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="mt-5 flex items-center gap-4">
        <img src={Profile} className="w-[4.5rem]" />

        <div className="flex flex-col">
          <p className="text-[15px] font-bold text-[#005cde]">
            Yuichi Kaneda, Japan
          </p>

          <p className="text-[12px] font-medium">Director</p>

          <img src={Mask} className="absolute bottom-6 right-8 w-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
