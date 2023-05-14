import React from "react";
import TestimonialCard from "./Partials/TestimonialCard";
import Heading from "./Partials/Heading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselThumbs from "./Partials/CarouselThumbs";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex h-full w-full flex-col items-center justify-center bg-[#f8f8f8] pb-24 pt-16  "
    >
      <Heading heading="Testimonials" />

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
          <div className="grid h-[46rem] grid-cols-1 items-start justify-start gap-6 px-7 md:h-[26rem] lg:h-[30rem] lg:grid-cols-2 lg:flex-row xl:gap-8 xl:px-0">
            <div className="block justify-self-end">
              <TestimonialCard
                text="I had an urgent need for a personal loan, but I lacked the time to investigate and contact several lenders. Quick Finz came to my rescue! Finding the best loan offers on the market was really simple for me thanks to their loan aggregation tool. I received quick access to a variety of loans from reliable lenders. I was able to get a loan with good terms and save a lot of time and work because of Quick Finz. In my opinion, anyone looking for a hassle-free loan experience should definitely check out Quick Finz."
                name="Mark"
              />
            </div>

            <div className="hidden justify-self-start lg:block">
              <TestimonialCard
                text="I can't express my gratitude to Quick Finz enough for their superb service. I was in need of a car loan but didn't know where to look. Quick Finz made the procedure simple. I could easily compare loan choices using their platform, and their experienced staff helped me at every turn. They were able to assist me in locating a loan with affordable interest rates and adaptable repayment terms. I now have my ideal car, thanks to Quick Finz. If you require a loan, use their services without hesitation. They'll help you avoid tension, time, and expense"
                name="Jennifer L."
              />
            </div>
          </div>

          <div className="grid h-[46rem] grid-cols-1 items-start justify-start gap-6 px-7 md:h-[26rem] lg:h-[30rem] lg:grid-cols-2 lg:flex-row xl:gap-8 xl:px-0">
            <div className="block justify-self-end">
              <TestimonialCard
                text="I had an urgent need for a personal loan, but I lacked the time to investigate and contact several lenders. Quick Finz came to my rescue! Finding the best loan offers on the market was really simple for me thanks to their loan aggregation tool. I received quick access to a variety of loans from reliable lenders. I was able to get a loan with good terms and save a lot of time and work because of Quick Finz. In my opinion, anyone looking for a hassle-free loan experience should definitely check out Quick Finz."
                name="Mark"
              />
            </div>

            <div className="hidden justify-self-start lg:block">
              <TestimonialCard
                text="I can't express my gratitude to Quick Finz enough for their superb service. I was in need of a car loan but didn't know where to look. Quick Finz made the procedure simple. I could easily compare loan choices using their platform, and their experienced staff helped me at every turn. They were able to assist me in locating a loan with affordable interest rates and adaptable repayment terms. I now have my ideal car, thanks to Quick Finz. If you require a loan, use their services without hesitation. They'll help you avoid tension, time, and expense"
                name="Jennifer L."
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
