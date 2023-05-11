import React from "react";
import google from "../../assets/google-btn.png";
import apple from "../../assets/apple-btn.png";

const DownloadBtns = () => {
  return (
    <div className="mt-3 flex flex-col gap-x-3 gap-y-2 md:flex-row">
      <a href="">
        <img
          src={google}
          alt="google-store"
          className="w-[11rem] cursor-pointer md:w-[8rem]"
        />
      </a>

      <a href="">
        <img
          src={apple}
          alt="apple-store"
          className="w-[11rem] cursor-pointer md:w-[8rem]"
        />
      </a>
    </div>
  );
};

export default DownloadBtns;
