import React from "react";
import ImgHeading from "../components/Partials/ImgHeading";
import Women from "../assets/women.png";
import Whatsapp from "../assets/whatsapp.svg";
import Phone from "../assets/download-app.png";
import { FaEnvelope } from "react-icons/fa";
import Button from "../components/Partials/Button";

const SupportPage = () => {
  return (
    <section
      id="aboutUs"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB]  "
    >
      <ImgHeading text="Support" />

      <div className="flex h-full w-full items-center justify-center px-10 pt-10 md:px-9 md:pt-16 lg:max-w-[80rem] lg:pt-24">
        <div className="flex h-full w-full flex-col items-center md:items-start lg:w-[55%]">
          <h1 className=" text-3xl font-bold text-[#f75c29] md:text-[4rem] xl:text-[4.2rem]">
            Help & Support
          </h1>

          <p className="mt-8 text-center text-2xl font-bold text-[#000] md:mt-12 md:text-start">
            QuickFinz is committed to{" "}
            <span className="text-blue">support you.</span>
          </p>

          <p className="mt-2 text-center text-2xl font-bold text-[#000] md:text-start">
            Connect to our Customer Support WhatsApp or reach out us by Call.
          </p>

          <div className="mt-10 flex flex-col items-center gap-10 md:items-start xl:flex-row xl:items-center">
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <FaEnvelope size={38} className="text-[#f75c29]" />
              <p className="text-xl font-bold">wecare@quickfinz.com</p>
            </div>

            <div className="flex flex-col items-center gap-3 md:flex-row">
              <img src={Whatsapp} className="w-[2.5rem]" />
              <p className="text-xl font-bold">+91-90629-91629</p>
            </div>
          </div>

          <div className="mt-12 flex w-full flex-col items-start justify-center gap-y-8 text-center md:text-start lg:mb-12 xl:mb-0">
            <div className="h-full w-full rounded-lg bg-[#fff] px-10 py-8 drop-shadow-lg xl:w-[70%]">
              <h3 className="text-lg font-bold text-blue">Register Office</h3>

              <p className="mt-3 text-[15px] font-medium">
                NO 220, 2ND PHASE,DOMLUR 2ND STAGE, Bangalore North,
                Bangalore-560075, Karnataka
              </p>
            </div>

            <div className="h-full w-full rounded-lg bg-[#fff] px-10 py-8 drop-shadow-lg xl:w-[70%]">
              <h3 className="text-lg font-bold text-blue">Corporate office</h3>

              <p className="mt-3 text-[15px] font-medium">
                Durga Abason, Ra 423, Nabapally, Pole – 02/521, Sector – IV,
                Kolkata, West Bengal, 700098
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden h-full w-[45%] xl:flex">
          <img src={Women} className="relative xl:left-12" />
        </div>
      </div>

      <div className="z-20 mx-auto my-24 flex h-full w-full flex-col items-center justify-center gap-10 bg-blue py-24 md:flex-row md:py-2 lg:mb-24 lg:mt-0 lg:gap-0 xl:max-w-[75.5rem] xl:rounded-xl">
        <div className="relative flex h-full w-full items-center justify-center md:w-[25%] lg:w-full">
          <img src={Phone} className="z-10 w-[15rem]" />

          <div className="absolute -z-10 h-[10rem] w-[10rem] rounded-full bg-[#fff] md:h-[11rem] md:w-[11rem]" />
        </div>

        <div className="flex w-[60%] flex-col items-center justify-center gap-4 text-center text-[#fff] md:items-start md:text-start lg:w-full">
          <h3 className="text-[2rem] font-bold">
            Start your Self-Employment Journey in 2 minutes!
          </h3>

          <div className="self-center md:self-start">
            <Button text="Join now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
