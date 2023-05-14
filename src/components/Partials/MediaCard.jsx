import React from "react";
import { ImCircleRight } from "react-icons/im";

const MediaCard = ({
  logo,
  headline,
  date,
  LogoClassName,
  headlineClassname,
}) => {
  return (
    <div className="flex h-[12rem] w-full flex-col justify-between rounded-lg bg-[#fff] drop-shadow-lg md:w-[21rem] lg:w-[19rem] xl:w-[23.5rem]">
      <div className="w-full justify-self-start px-6 py-4 text-[#000]">
        <img
          src={logo}
          className={` ${LogoClassName ? LogoClassName : "w-[10rem]"}`}
        />
        <p
          className={`${
            headlineClassname ? headlineClassname : "mt-4"
          } text-sm font-medium`}
        >
          {headline}
        </p>
      </div>
      <div className="flex w-full justify-between rounded-b-lg bg-[#F75C29] px-6 py-3 text-sm font-semibold text-[#fff]">
        <p>{date}</p>
        <div>
          <p className="flex cursor-pointer items-center justify-center">
            Read More <ImCircleRight size={16} className="ml-1 mt-[3px]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
