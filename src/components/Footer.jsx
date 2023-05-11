import React from "react";
import Wrapper from "./Partials/Wrapper";
import Logo from "../assets/logo.png";
import Flag from "../assets/indian-flag.png";
import DownloadBtns from "./Partials/DownloadBtns";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Visa from "../assets/visa.png";

const icons = [
  <FaFacebookF size={16} />,
  <FaLinkedinIn size={16} />,
  <FaYoutube size={16} />,
  <FaTwitter size={16} />,
  <FaInstagram size={16} />,
];

const Footer = () => {
  return (
    <footer className="h-auto w-full bg-[url('/src/assets/footer-bg.svg')] bg-bottom bg-no-repeat font-montserrat">
      <Wrapper className="h-full w-full">
        <div className="grid h-full w-full grid-cols-1 gap-y-6 px-4 pt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-9">
          <div className="flex flex-col items-start">
            <img src={Logo} alt="logo" className="-ml-3 h-[3.8rem] w-[11rem]" />

            <p className="mt-4 w-full text-sm font-medium">
              ‘QuickFinz’ is an online services marketplace of Kwickzen Services
              Private Limited. We help in enhanceing self-employment to the
              Partners.
            </p>

            <div className="mt-4">
              <DownloadBtns />
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center xl:items-end">
            <div className="flex flex-col items-start py-4 text-sm">
              <h3 className="text-base font-bold text-blue">Legal</h3>

              <ul className="mt-6 flex flex-col gap-2 font-semibold">
                <li className=" cursor-pointer hover:text-orange">About Us</li>
                <li className=" cursor-pointer hover:text-orange">Careers</li>
                <li className=" cursor-pointer hover:text-orange">
                  Privacy Policy
                </li>
                <li className=" cursor-pointer hover:text-orange">
                  Cancellation Policy
                </li>
                <li className=" cursor-pointer hover:text-orange">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start xl:w-[30rem] xl:items-center">
            <div className="flex flex-col items-start py-4 text-sm">
              <h3 className="text-base font-bold text-blue">Important Links</h3>

              <ul className="mt-6 flex flex-col gap-2 font-semibold">
                <li className=" cursor-pointer hover:text-orange">Blog</li>
                <li className=" cursor-pointer hover:text-orange">Rewards</li>
                <li className=" cursor-pointer hover:text-orange">
                  Global Anti-Corruption Policy
                </li>
                <li className=" flex cursor-pointer flex-col gap-2 hover:text-orange">
                  <span>RBI Kehta hai</span>
                  <span>Reports Bugs & Earn</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start md:-ml-14 md:items-center xl:ml-0 xl:items-end">
            <div className="flex flex-col items-center py-4 text-sm">
              <h3 className="mb-4 text-base font-bold text-blue">Follow Us</h3>

              <div className="flex flex-col items-center justify-end">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="my-[2px] flex h-[2.2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-full bg-blue text-[#fff] transition duration-200 hover:bg-orange"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="mb-10 mt-8 h-auto w-full md:mt-3">
        <Wrapper className="h-full w-full">
          <div className="flex h-full w-full flex-col items-start gap-y-6 px-4 text-sm font-semibold md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col">
              <p>Supported Payment Methods</p>

              <div className="mt-2">
                <img src={Visa} className="w-[4rem]" />
              </div>
            </div>

            <div className="flex flex-col gap-y-6 md:flex-row md:gap-12">
              <div>
                <p>Secured By</p>
                <div className="mt-2 flex gap-2">
                  <img src={Visa} className="w-[4rem]" />
                  <img src={Visa} className="w-[4rem]" />
                </div>
              </div>

              <div>
                <p>Certified By</p>
                <div className="mt-2 flex justify-start md:justify-center">
                  <img src={Visa} className="w-[4rem]" />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="h-auto w-full bg-blue py-8 text-center md:h-12 md:py-0 md:text-start">
        <Wrapper className="h-full w-full">
          <div className="flex h-full w-full flex-col items-center justify-between px-4 text-[#fff] md:flex-row">
            <p className="text-sm">
              @Copyright 2023 Kwickzen Services Pvt. Ltd. All Rights Reserved.
            </p>

            <div className="mt-4 flex gap-2 md:mt-0">
              <img src={Flag} alt="flag" className="w-[2rem]" />
              <p className="text-sm">Made in India with ❤️</p>
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
