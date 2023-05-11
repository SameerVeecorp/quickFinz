import React from "react";
import Wrapper from "./Partials/Wrapper";
import AboutImg from "../assets/about-img.png";
import Heading from "./Partials/Heading";
import Button from "./Partials/Button";

const About = () => {
  return (
    <section id="about" className="w-full h-full bg-[#fff] py-16 xl:pl-6">
      <Wrapper className="flex items-center relative">
        <div className="w-full xl:w-[45%] text-center xl:text-start flex flex-col items-center xl:items-start">
          <div className="block xl:hidden">
            <Heading blueHeading="About QuickFinz" left={false} />
          </div>

          <div className="hidden xl:block">
            <Heading blueHeading="About QuickFinz" left={true} />
          </div>

          <div className="w-[90%] block xl:hidden mt-4">
            <img src={AboutImg} alt="about-img" />
          </div>

          <p className="flex flex-col gap-6 mt-10 xl:mt-4 text-base xl:text-[15px] md:w-[80%] xl:w-full">
            Welcome to QuickFinz! We are a loan aggregator cum online services
            provider company.
            <span>
              We are dedicated to providing our customers with an easy and
              efficient way to find the best loan options available to them. Our
              mission is to help individuals and businesses find the right loan
              products that meet their specific needs and financial goals.
            </span>
            <span>
              Quick Finz works with large banks, NBFCs and fintech lenders who
              offer you wide choice of products. This platform is a great
              digital consumer credit marketplace with more than millions of
              happy customers.
            </span>
            <span>
              Our team consists of experienced professionals who have a deep
              understanding of the lending industry and are committed to
              providing top-notch customer service. We work with a network of
              trusted lenders to offer a wide range of loan options, including
              personal loans, business loans, student loans, and more.
            </span>
          </p>

          <div className="mt-8 xl:mt-6">
            <Button text="Read-more" />
          </div>
        </div>
        <div className="w-[58%] absolute -right-7 hidden xl:block">
          <img src={AboutImg} alt="about-img" />
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
