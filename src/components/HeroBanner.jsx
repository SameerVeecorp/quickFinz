import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeroCarouselCard from "./Partials/HeroCarouselCard";
import CarouselThumbs from "./Partials/CarouselThumbs";

const HeroBanner = () => {
  return (
    <Carousel
      showArrows={false}
      axis="vertical"
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      autoPlay={true}
      interval={7000}
      renderIndicator={(onClickHandler, isSelected, index) => {
        return (
          <div className="relative right-5 top-[-14rem] flex h-full w-full items-center justify-end">
            <CarouselThumbs
              isSelected={isSelected}
              onClickHandler={onClickHandler}
              index={index}
            />
          </div>
        );
      }}
    >
      <HeroCarouselCard />
      <HeroCarouselCard />
      <HeroCarouselCard />
    </Carousel>
  );
};

export default HeroBanner;
