import React from "react";
import Logo from "../assets/logo.png";
import PayLogo from "../assets/payment-img.png";

const LoginHeader = () => {
  return (
    <header className="h-full w-full border-b-[3px] border-[#F75C29] py-2">
      <div className="mx-auto flex w-full max-w-[80rem] items-center justify-center px-7 lg:justify-between xl:px-0">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-[12rem] cursor-pointer" />
          <img src={PayLogo} alt="logo" className="h-[4rem] w-[4rem]" />
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
