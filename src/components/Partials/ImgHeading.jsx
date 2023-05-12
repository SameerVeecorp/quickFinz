import React from "react";
import Bg from "../../assets/bg.png";

const ImgHeading = ({ text, blueText, br, className }) => {
  return (
    <div
      className={`${className} ${
        className ? "" : "flex"
      } h-[18rem] w-full items-center justify-center bg-[url('/src/assets/bg.png')] bg-cover bg-no-repeat font-montserrat`}
    >
      {/* <img src={Bg} alt="img" /> */}
      <h1 className={` w-full text-center text-[2rem] font-bold`}>
        {text} {br && <br />} <span className="text-[#005cde]">{blueText}</span>
      </h1>
    </div>
  );
};

export default ImgHeading;
