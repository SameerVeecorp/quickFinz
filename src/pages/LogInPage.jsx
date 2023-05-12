import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Service1 from "../assets/services1.svg";
import Service2 from "../assets/services2.svg";
import Service3 from "../assets/services7.svg";
import ServicesCard from "../components/Partials/ServicesCard";
import Button from "../components/Partials/Button";
import InputFields from "../components/Partials/InputFields";

const LogInPage = () => {
  const [overlay, setOverlay] = useState(false);
  const [otpBox, setOtpBox] = useState(true);
  const [payBox, setPayBox] = useState(false);

  return (
    <div className=" font-montserrat">
      <section className="mx-auto flex h-screen w-full max-w-[80rem] flex-col gap-[0_3rem] px-4 md:px-10 lg:flex-row xl:px-3">
        <div className="mt-24 flex w-full flex-col lg:w-3/4">
          <h1 className="mx-auto px-4 text-center text-[2.2rem] font-black leading-[3.5rem] md:w-[80%] md:px-0 lg:w-full lg:text-start">
            Welcome to your <br />
            <span className="text-[#005cde]"> Self-Employment Journey!</span>
          </h1>

          <div className="my-8 flex w-full items-center justify-center px-4 md:px-0 lg:my-4 lg:justify-start">
            <ul className="ml-[1.1rem] flex list-image-[url('/src/assets/hand.svg')] flex-col items-start gap-4 px-2 py-[0.4rem] text-[1.2rem] font-semibold italic leading-[1.8rem] text-[rgb(47,45,45)]">
              <li>Lifetime Income</li>
              <li>Earn ₹30,000 to ₹40,000 per month</li>
              <li>Multi-service distribution</li>
              <li>Operate from anywhere</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 text-center md:flex-row lg:mt-16 lg:justify-start">
            <ServicesCard
              img={Service1}
              title="Loan Services"
              className="w-[10rem]"
            />
            <ServicesCard
              img={Service2}
              title="Utility Services"
              className="w-[10rem]"
            />
            <ServicesCard
              img={Service3}
              title="More Services"
              className="w-[10rem]"
            />
          </div>
        </div>

        <div className="mt-12 w-full lg:mt-8 lg:w-[50%]">
          <p className="mb-2 text-center text-sm font-bold lg:text-end">
            Partner Registration
          </p>
          <div className="h-fit rounded p-[1.8rem] shadow-md">
            <h3 className="text-center text-[1.3rem] font-extrabold text-[#0057dd] lg:text-start">
              Log in with Username
            </h3>

            <div className="mt-10 flex flex-col gap-6">
              <InputFields label="User Name" type="text" id="userName" />

              <InputFields label="Password" type="password" id="password" />

              <div className="self-center">
                <Button text="Log In" />
              </div>

              <div className="flex w-full flex-col gap-5 self-center">
                <p className="text-center font-semibold">Or</p>
                <h3 className="text-center text-[1.3rem] font-extrabold text-[#0057dd] lg:text-start">
                  Log in with OTP
                </h3>

                <InputFields label="Mobile Number" type="number" id="phone" />

                <div
                  className="self-center"
                  onClick={() => {
                    setOverlay(true);
                    setOtpBox(true);
                  }}
                >
                  <Button text="Request OTP" type="button" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {overlay && (
        <div className="fixed top-0 z-30 flex h-screen w-full items-center justify-center bg-[#f8f8f8]/90">
          {otpBox && (
            <div
              className="flex h-fit w-full flex-col items-center justify-center rounded-lg bg-[#fff] px-6 py-10 text-center drop-shadow-lg md:w-[28rem] md:px-16"
              id="otpBox"
            >
              <h3 className="text-[1.5rem] font-bold text-[#0057dd]">
                OTP Verification
              </h3>

              <p className="my-5 text-sm font-medium">
                Dear Partner, Please enter OTP in below box, send to your Mobile
                number xxxxxxx123
              </p>

              <form className="mt-4 flex gap-4 text-xl font-bold">
                <input
                  type="number"
                  className="border-black/50 h-[3.5rem] w-[3rem] rounded-lg border-2 text-center [appearance:textfield] md:w-[4rem] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <input
                  type="number"
                  className="border-black/50 h-[3.5rem] w-[3rem] rounded-lg border-2 text-center [appearance:textfield] md:w-[4rem] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <input
                  type="number"
                  className="border-black/50 h-[3.5rem] w-[3rem] rounded-lg border-2 text-center [appearance:textfield] md:w-[4rem] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <input
                  type="number"
                  className="border-black/50 h-[3.5rem] w-[3rem] rounded-lg border-2 text-center [appearance:textfield] md:w-[4rem] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </form>

              <div>
                <p className="mt-8 text-sm font-semibold">
                  OTP will expire in{" "}
                  <span className="text-[#f75c29]">00:30</span> Sec
                </p>

                <p className="mt-2 text-sm font-semibold">
                  Didn't receive?
                  <span className="cursor-pointer text-[#005cde]">
                    Resend OTP
                  </span>
                </p>
              </div>

              <button
                style={{ background: "linear-gradient(#f75c29, #c83809)" }}
                className="mt-8 cursor-pointer self-center rounded border-[none] px-[1.1rem] py-[0.5rem] text-base font-semibold text-[#fff]"
                type="button"
                onClick={() => {
                  setPayBox(true);
                  setOtpBox(false);
                }}
              >
                Submit
              </button>
            </div>
          )}

          {payBox && (
            <div
              className="flex h-fit w-full flex-col items-center justify-center rounded-lg bg-[#fff] px-6 py-10 text-center drop-shadow-lg md:w-[28rem] md:px-16"
              id="congratsBox"
            >
              <img src={Logo} className="w-[12rem]" />
              <h3 className="mt-4 text-[1.5rem] font-bold text-[#f75c29]">
                Congratulation!
              </h3>
              <p className="my-5 text-sm font-medium">
                Please Pay Rs.999/- to complate DSA Partner registration
              </p>
              <button
                style={{ background: "linear-gradient(#f75c29, #c83809)" }}
                className="cursor-pointer self-center rounded border-[none] px-[1.1rem] py-[0.5rem] text-base font-semibold text-[#fff]"
                type="button"
                onClick={() => {
                  setPayBox(false);
                  setOverlay(false);
                }}
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LogInPage;
