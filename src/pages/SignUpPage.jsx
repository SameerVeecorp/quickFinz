import React from "react";
import { useNavigate } from "react-router-dom";
import Service1 from "../assets/services1.svg";
import Service2 from "../assets/services2.svg";
import Service3 from "../assets/services7.svg";
import Button from "../components/Partials/Button";
import ServicesCard from "../components/Partials/ServicesCard";
import InputFields from "../components/Partials/InputFields";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-montserrat">
      <section className="mx-auto flex h-screen w-full max-w-[80rem] flex-col gap-[0_3rem] px-4 md:px-10 lg:flex-row xl:px-3">
        <div className="mt-24 flex w-full flex-col lg:w-3/4">
          <h1 className="mx-auto px-4 text-center text-[2.2rem] font-black leading-[3.5rem] md:w-[80%] md:px-0 lg:w-full lg:text-start">
            Start your Self-Employment Journey in
            <span className="text-[#005cde]"> 2 minutes!</span>
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
        <div className="mt-12 h-fit w-full rounded p-[1.8rem] shadow-md lg:w-[50%]">
          <h3 className="text-center text-[1.3rem] font-extrabold uppercase text-[#0057dd] lg:text-start">
            Partner registration
          </h3>

          <form className="mt-10 flex flex-col gap-6">
            <InputFields
              label="Mobile Number"
              type="number"
              id="phone"
              required={true}
            />

            <InputFields label="Name" type="text" id="name" required={true} />

            <InputFields
              label="Email Address"
              type="text"
              id="email"
              required={true}
            />

            <div className="flex items-center gap-[0.8rem]">
              <input type="checkbox" className="" />
              <p className="text-sm">
                I agree to Terms of use and allow to send all updates of
                QuickFinz on Whatsapp
              </p>
            </div>

            {/* <div
              className="g-recaptcha"
              id="captcha"
              data-sitekey="6Ld0T-AlAAAAAJ9KiOJlPIlAIX-B7gyfrzS1hLiT"
            /> */}

            <div className="self-center">
              <Button text="Sign In" />
            </div>

            <div className="flex flex-col gap-4 self-center text-center">
              <p className="font-semibold">Or</p>
              <p className="font-semibold">Already a Registered Partner</p>
              <div className="self-center">
                <Button
                  text="Log In"
                  type="button"
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
