import React from "react";
import Wrapper from "./Partials/Wrapper";
import Ecosystem1 from "../assets/ecosystem1.png";
import Ecosystem2 from "../assets/ecosystem2.png";
import Ecosystem3 from "../assets/ecosystem3.png";
import Ecosystem4 from "../assets/ecosystem4.png";
import Ecosystem5 from "../assets/ecosystem5.png";
import Ecosystem6 from "../assets/ecosystem6.png";

const EcoSystem = () => {
  return (
    <section id="ecoSystem" className="h-full w-full bg-bg-2 py-32">
      <Wrapper className="relative flex h-full w-full items-center justify-center">
        <div className="dashed-border grid h-auto w-[98%] grid-cols-1 place-items-center px-10 py-24 md:grid-cols-3 lg:grid-cols-6">
          <img src={Ecosystem1} className="w-[10rem]" />
          <img src={Ecosystem2} className="w-[10rem]" />
          <img src={Ecosystem3} className="w-[10rem]" />
          <img src={Ecosystem4} className="w-[10rem]" />
          <img src={Ecosystem5} className="w-[10rem]" />
          <img src={Ecosystem6} className="w-[10rem]" />
        </div>

        <div className="rounded-dashed-border absolute -top-8 flex h-[4.5rem] w-[95%] items-center justify-center bg-bg-2 md:w-[33rem]">
          <h1 className="text-center   text-base font-bold leading-snug text-[#191919] md:text-2xl">
            QuickFinz <br className="block md:hidden" />
            <span className=" text-blue"> Ecosystem Architecture</span>
          </h1>
        </div>

        <div className="rounded-dashed-border2 absolute -bottom-8 flex h-[4rem] w-[95%] items-center justify-center bg-bg-2 text-center md:w-[34rem]">
          <h2 className="  text-base font-bold leading-snug text-[#191919] md:text-lg ">
            One - Stop Destination for Neo Banking Services
          </h2>
        </div>
      </Wrapper>
    </section>
  );
};

export default EcoSystem;
