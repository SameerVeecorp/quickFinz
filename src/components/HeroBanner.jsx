import React from "react";
import bg from "../assets/hero-bg.png";
import businessman from "../assets/businessman.png";
import DownloadBtns from "./Partials/DownloadBtns";

const HeroBanner = () => {
  return (
    <div className="relative flex h-full w-full items-center bg-[url('/src/assets/hero-bg.png')] bg-cover bg-center bg-no-repeat px-8 py-16 font-montserrat md:h-[30rem] md:px-0 md:py-0 xl:gap-[15rem]">
      <div className="hidden h-full w-[46%] items-end justify-center lg:flex xl:justify-end">
        <img src={businessman} alt="" className="w-[21rem]" />
      </div>

      <div className="h-full w-full text-center lg:w-[54%] lg:text-start">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="flex w-full flex-col text-3xl font-extrabold leading-snug text-orange md:text-[2.2rem]">
            Credit Score Down Hai!
            <span className="text-blue"> Tension Nahin Leneka Mamu...</span>
            <hr className="ml-[5px] mt-3 w-[6rem] self-center rounded-2xl border-[3px] border-orange lg:self-start" />
          </h1>

          <div className="mt-6 flex w-full justify-center lg:justify-start">
            <p className="w-full font-medium md:w-[60%]">
              Know your credit Score absolutely free from ‘Quickfinz’. Is it
              low? It’s not more than just number. You can build it high & enjoy
              a financial establishment.
            </p>
          </div>

          <div className="mt-6 flex w-full flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="-mb-2 text-[15px] font-bold">Download the App</h5>

            <div className="lg:-ml-1">
              <DownloadBtns />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
