import React from "react";
import Heading from "./Partials/Heading";
import InsuranceCard from "./Partials/InsuranceCard";

const Insurance = () => {
  return (
    <section
      id="insurance"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB] pb-24 pt-16 font-montserrat"
    >
      <Heading
        heading="Munna Insurance Kar Lo,"
        blueHeading=" Nahin To Mamu Pakar Lega."
      />

      <div className="mt-8 grid grid-cols-1 items-center justify-center gap-6 px-7 lg:grid-cols-2 xl:grid-cols-3 xl:gap-14 xl:px-0">
        <InsuranceCard />
        <InsuranceCard />
        <InsuranceCard />
      </div>
    </section>
  );
};

export default Insurance;
