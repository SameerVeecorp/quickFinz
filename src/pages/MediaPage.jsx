import React from "react";
import EconomicTimes from "../assets/economicTimes.png";
import MediaNews from "../assets/mediaNews.png";
import SocialSamosa from "../assets/socialSamosa.png";
import TOI from "../assets/toi.png";
import MediaCard from "../components/Partials/MediaCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MediaPage = () => {
  return (
    <section className="flex h-full w-full flex-col gap-[0_3rem] bg-[#fbfbfb] pb-24">
      <div className="relative flex h-[15rem] w-full flex-col items-center justify-center bg-[url('/src/assets/media-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute z-10 h-full w-full bg-[#005cde]/50" />

        <div className="z-20 flex w-full max-w-[80rem] flex-col items-center justify-center gap-2 px-10 text-start text-[#fff] lg:items-start xl:px-9">
          <h1 className="text-center text-4xl font-bold lg:text-start">
            QuickFinz in the News!
          </h1>

          <h3 className="text-center text-xl font-medium lg:text-start">
            Media coverage, events, podcasts and TV.
          </h3>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[80rem] grid-cols-1 place-items-center gap-x-9 gap-y-14   px-9 py-16 md:grid-cols-2 lg:grid-cols-3">
        <MediaCard
          logo={EconomicTimes}
          headline=" UPI to now allow borrowers to access digital credit lines from
              banks"
        />

        <MediaCard
          logo={EconomicTimes}
          headline="Which UPI payments will attract interchange fee? Will you have to
              bear the cost?"
        />

        <MediaCard
          logo={MediaNews}
          headline={
            <span>
              Women’s Day Campaigns 2023 <br />– Part 4
            </span>
          }
          LogoClassName="w-[9rem]"
          headlineClassname="mt-2"
        />

        <MediaCard
          logo={SocialSamosa}
          headline="Women’s Day campaigns 2023: Brands look at gender through a
          different perspective"
          LogoClassName="w-[4rem]"
          headlineClassname="mt-3"
        />

        <MediaCard
          logo={EconomicTimes}
          headline="Women in leadership roles may help organisations in achieving
          better outcomes: Tech Leaders"
        />

        <MediaCard
          logo={TOI}
          headline="Checklist to ensure your digital lending platform is safe to use"
          LogoClassName="w-[3rem]"
          headlineClassname="mt-3"
        />

        <MediaCard
          logo={EconomicTimes}
          headline=" UPI to now allow borrowers to access digital credit lines from
              banks"
        />

        <MediaCard
          logo={EconomicTimes}
          headline="Which UPI payments will attract interchange fee? Will you have to
              bear the cost?"
        />

        <MediaCard
          logo={MediaNews}
          headline={
            <span>
              Women’s Day Campaigns 2023 <br />– Part 4
            </span>
          }
          LogoClassName="w-[9rem]"
          headlineClassname="mt-2"
        />

        <MediaCard
          logo={SocialSamosa}
          headline="Women’s Day campaigns 2023: Brands look at gender through a
          different perspective"
          LogoClassName="w-[4rem]"
          headlineClassname="mt-3"
        />

        <MediaCard
          logo={EconomicTimes}
          headline="Women in leadership roles may help organisations in achieving
          better outcomes: Tech Leaders"
        />

        <MediaCard
          logo={TOI}
          headline="Checklist to ensure your digital lending platform is safe to use"
          LogoClassName="w-[3rem]"
          headlineClassname="mt-3"
        />
      </div>

      <div className="flex w-full items-center justify-center gap-3">
        <div className="mr-2 flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000]">
          <BiChevronLeft size={24} />
        </div>
        <div className="flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000] bg-[#005cde] text-[#fff]">
          <p>1</p>
        </div>
        <div className="flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000]">
          <p>2</p>
        </div>
        <div className="flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000]">
          <p>3</p>
        </div>
        <div className="flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000]">
          <p>4</p>
        </div>
        <div className="flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000]">
          <p>5</p>
        </div>
        <div className="flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000]">
          <p>6</p>
        </div>
        <div className="ml-2 flex h-[2.2rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-md border border-[#000]">
          <BiChevronRight size={24} />
        </div>
      </div>
    </section>
  );
};

export default MediaPage;
