import React from "react";
import Heading from "./Partials/Heading";
import Wrapper from "./Partials/Wrapper";
import DownloadImg from "../assets/download-app.png";
import mask from "../assets/mask.png";
import DownloadBtns from "./Partials/DownloadBtns";

const data = [
  "Maintain a good financial situation by monitoring your credit score constantly.",

  "Find out about special offers on loans and credit cards.",

  "Experience a seamless journey.",
];

const DownloadApp = () => {
  return (
    <section
      id="downloadApp"
      className="relative h-full w-full bg-[#fff] py-16 font-montserrat"
    >
      <Wrapper className="flex h-full w-full flex-col items-center px-7 lg:flex-row">
        <div className="flex w-full items-center justify-center lg:hidden">
          <img
            src={DownloadImg}
            alt="app-preview"
            className="w-full md:w-[60%]"
          />
        </div>

        <div className="mt-12 flex h-full w-full flex-col items-center lg:mt-0 lg:w-[40%] lg:items-start">
          <div className="block lg:hidden">
            <Heading
              heading="Download the"
              blueHeading="QuickFinz Mobile App"
              left={false}
              br={true}
            />
          </div>

          <div className="hidden lg:block">
            <Heading
              heading="Download the"
              blueHeading="QuickFinz Mobile App"
              left={true}
              br={true}
            />
          </div>

          <ul className="ml-7 mt-6 list-image-[url('/src/assets/hand.svg')]">
            {data.map((item, index) => (
              <li key={index} className="mb-2 pl-1 text-[15px] font-medium">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center text-center lg:items-start lg:text-start">
            <h3 className="text-lg font-bold text-blue">
              Download App on your mobile
            </h3>

            <DownloadBtns />
          </div>
        </div>

        <div className="hidden w-[60%] items-center justify-end lg:flex">
          <img src={DownloadImg} alt="app-preview" className="z-20 w-[69%]" />
        </div>
      </Wrapper>

      <img
        src={mask}
        className="absolute bottom-0 right-3 z-10 hidden w-[12rem] lg:block"
      />
    </section>
  );
};

export default DownloadApp;
