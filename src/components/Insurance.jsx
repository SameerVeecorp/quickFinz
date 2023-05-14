import React from "react";
import Heading from "./Partials/Heading";
import InsuranceCard from "./Partials/InsuranceCard";
import Bike from "../assets/bike.png";
import { FaHospitalSymbol, FaCarSide } from "react-icons/fa";
import { BsFillUmbrellaFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselThumbs from "./Partials/CarouselThumbs";

const Insurance = () => {
  return (
    <section
      id="insurance"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB] pb-16 pt-16"
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

      <div className="mx-auto h-full w-full md:max-w-[80rem]">
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          autoPlay={false}
          showArrows={true}
          interval={7000}
          swipeable={true}
          renderIndicator={(onClickHandler, isSelected, index) => {
            return (
              <span className="relative top-4">
                <CarouselThumbs
                  onClickHandler={onClickHandler}
                  isSelected={isSelected}
                  index={index}
                  className="mr-1"
                />
              </span>
            );
          }}
        >
          <div className="grid h-[30rem] grid-cols-1 items-center justify-center gap-6 px-7 md:mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 xl:px-10">
            <div className="md:justify-self-end lg:justify-self-end">
              <InsuranceCard
                name="Bike Insurance"
                icon={<img src={Bike} className="h-[2.3rem] w-[2.3rem]" />}
                heading="Protection with Bike Insurance:"
                details={
                  <>
                    <li>Individual accident insurance</li>
                    <li>Cashless repairs and extremely quick claims</li>
                    <li>Self-inspection through smartphone</li>
                  </>
                }
              />
            </div>

            <div className="hidden md:block md:justify-self-start lg:justify-self-center">
              <InsuranceCard
                name="Health Insurance"
                icon={<FaHospitalSymbol size={26} className="text-blue" />}
                heading="Obtain a health insurance quote immediately."
                details={
                  <>
                    <li>
                      Get up to 1% of the claim amount in a lump sum without
                      being charged
                    </li>
                    <li>
                      25% more insurance coverage for hospitalisation for
                      serious illness
                    </li>
                    <li>
                      Covers the costs of both pre- and post-hospitalization
                    </li>
                  </>
                }
              />
            </div>

            <div className="hidden md:justify-self-end lg:block lg:justify-self-start">
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

            <div className="hidden md:justify-self-end lg:justify-self-end xl:block">
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
          </div>

          <div className="grid h-[30rem] grid-cols-1 items-center justify-center gap-6 px-7 md:mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 xl:px-10">
            <div className="md:justify-self-end lg:justify-self-end">
              <InsuranceCard
                name="Bike Insurance"
                icon={<img src={Bike} className="h-[2.3rem] w-[2.3rem]" />}
                heading="Protection with Bike Insurance:"
                details={
                  <>
                    <li>Individual accident insurance</li>
                    <li>Cashless repairs and extremely quick claims</li>
                    <li>Self-inspection through smartphone</li>
                  </>
                }
              />
            </div>

            <div className="hidden md:block md:justify-self-start lg:justify-self-center">
              <InsuranceCard
                name="Health Insurance"
                icon={<FaHospitalSymbol size={26} className="text-blue" />}
                heading="Obtain a health insurance quote immediately."
                details={
                  <>
                    <li>
                      Get up to 1% of the claim amount in a lump sum without
                      being charged
                    </li>
                    <li>
                      25% more insurance coverage for hospitalisation for
                      serious illness
                    </li>
                    <li>
                      Covers the costs of both pre- and post-hospitalization
                    </li>
                  </>
                }
              />
            </div>

            <div className="hidden md:justify-self-end lg:block lg:justify-self-start">
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

            <div className="hidden md:justify-self-end lg:justify-self-end xl:block">
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
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Insurance;
