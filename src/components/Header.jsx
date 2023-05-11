import React, { useState } from "react";
import Wrapper from "./Partials/Wrapper";
import Logo from "../assets/logo.png";
import Pay from "../assets/payment-img.png";
import { IoHome, IoClose } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import Button from "./Partials/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <header className="py-2 w-full border-b-[3px] border-orange font-montserrat">
        <Wrapper className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-[12rem] cursor-pointer" />
            <img
              src={Pay}
              alt="logo"
              className="w-[4rem] h-[4rem] hidden md:block"
            />
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-base font-semibold ">
            <li onClick={() => navigate("/")}>
              <IoHome
                size={20}
                className="hover:text-orange text-text-color cursor-pointer"
              />
            </li>
            <li
              className="hover:text-orange text-text-color cursor-pointer"
              onClick={() => navigate("")}
            >
              Online Services
            </li>
            <li
              className="hover:text-orange text-text-color cursor-pointer"
              onClick={() => navigate("")}
            >
              Media Room
            </li>
            <li
              className="hover:text-orange text-text-color cursor-pointer"
              onClick={() => navigate("")}
            >
              Support
            </li>
            <li>
              <Button text="Join us" href={""} />
            </li>
          </ul>

          <div onClick={handleMobileMenu} className="lg:hidden">
            <BiMenu size={35} className="hover:text-text-orange" />
          </div>
        </Wrapper>
      </header>

      <div
        className={`fixed left-0 top-0 z-[100] flex h-[100vh] w-full select-none flex-col items-center justify-center overflow-hidden bg-[#fff] text-center transition-all duration-300 ease-out ${
          mobileMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="absolute right-5 top-[1.5rem]"
          onClick={handleMobileMenu}
        >
          <IoClose size={35} className="hover:text-text-orange" />
        </div>

        <ul className="z-30 my-10 gap-6 flex cursor-pointer flex-col items-center text-2xl font-semibold">
          <li onClick={() => navigate("/")} className="flex gap-1 items-center">
            <IoHome
              size={20}
              className="hover:text-orange text-text-color cursor-pointer"
            />
            Home
          </li>
          <li
            className="hover:text-orange text-text-color cursor-pointer"
            onClick={() => navigate("")}
          >
            Online Services
          </li>
          <li
            className="hover:text-orange text-text-color cursor-pointer"
            onClick={() => navigate("")}
          >
            Media Room
          </li>
          <li
            className="hover:text-orange text-text-color cursor-pointer"
            onClick={() => navigate("")}
          >
            Support
          </li>
          <li>
            <Button text="Join us" href={""} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
