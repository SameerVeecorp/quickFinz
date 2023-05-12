import React from "react";
import Heading from "./Partials/Heading";
import InsuranceCard from "./Partials/InsuranceCard";
import Bike from "../assets/bike.png";
import { FaHospitalSymbol, FaCarSide } from "react-icons/fa";
import { BsFillUmbrellaFill } from "react-icons/bs";

const Insurance = () => {
  return (
    <section
      id="insurance"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB] pb-24 pt-16 font-montserrat"
    >
      <div className="block lg:hidden">
        <Heading
          heading="Munna Insurance Kar Lo,"
          br={true}
          blueHeading=" Nahin To Mamu Pakar Lega."
        />
      </div>

      <div className="hidden lg:block">
        <Heading
          heading="Munna Insurance Kar Lo,"
          blueHeading=" Nahin To Mamu Pakar Lega."
        />
      </div>

      <div className="mt-8 grid grid-cols-1 items-center justify-center gap-6 px-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 xl:px-0">
        <InsuranceCard
          name="Bike Insurance"
          icon={<img src={Bike} className="w-[3rem]" />}
          heading="Protection with Bike Insurance:"
          details={
            <>
              <li>Individual accident insurance</li>
              <li>Cashless repairs and extremely quick claims</li>
              <li>Self-inspection through smartphone</li>
            </>
          }
        />
        <InsuranceCard
          name="Health Insurance"
          icon={<FaHospitalSymbol size={26} className="text-blue" />}
          heading="Obtain a health insurance quote immediately."
          details={
            <>
              <li>
                Get up to 1% of the claim amount in a lump sum without being
                charged
              </li>
              <li>
                25% more insurance coverage for hospitalisation for serious
                illness
              </li>
              <li>Covers the costs of both pre- and post-hospitalization</li>
            </>
          }
        />
        <div className="hidden lg:block">
          <InsuranceCard
            name="Car Insurance"
            icon={<FaCarSide size={26} className="text-blue" />}
            heading="Protect your car with Car Insurance:"
            details={
              <>
                <li>1400 garages provide cashless repairs</li>
                <li>Drive less and spend less</li>
                <li>Discounts of up to 25% are available on premium</li>
              </>
            }
          />
        </div>

        <div className="hidden xl:block">
          <InsuranceCard
            name="Commercial Insurance"
            icon={<BsFillUmbrellaFill size={26} className="text-blue" />}
            heading="Benefits provided by Commercial Insurance:"
            details={
              <>
                <li>Safeguarding property</li>
                <li>Your Employees' Protection</li>
                <li>Protection against Liabilities</li>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Insurance;
