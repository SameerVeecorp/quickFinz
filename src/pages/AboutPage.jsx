import React from "react";
import ImgHeading from "../components/Partials/ImgHeading";
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  return (
    <section
      id="aboutUs"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB]"
    >
      <ImgHeading text="About" blueText="Us" />

      <div className="flex w-full items-center justify-center pb-16 pt-14 lg:max-w-[80rem]">
        <p className="flex flex-col gap-8 px-10 text-start text-base font-medium leading-[1.8rem] text-[#191919] md:px-8">
          <span>
            Welcome to QuickFinz! We are a loan aggregator cum online services
            provider company.
          </span>

          <span>
            We are dedicated to providing our customers with an easy and
            efficient way to find the best loan options available to them. Our
            mission is to help individuals and businesses find the right loan
            products that meet their specific needs and financial goals.
          </span>

          <span>
            Quick Finz works with large banks, NBFCs and fintech lenders who
            offer you wide choice of products. This platform is a great digital
            consumer credit marketplace with more than millions of happy
            customers.
          </span>

          <span>
            Our team consists of experienced professionals who have a deep
            understanding of the lending industry and are committed to providing
            top-notch customer service. We work with a network of trusted
            lenders to offer a wide range of loan options, including personal
            loans, business loans, student loans, and more.
          </span>

          <span>
            At QuickFinz, we understand that every borrower has unique needs and
            circumstances. That's why we take a personalized approach to help
            our customers find the loan products that best fit their
            requirements. We are committed to providing transparent and clear
            information about the loan products we offer, including interest
            rates, fees, and repayment terms.
          </span>

          <span>
            Whether you are looking to consolidate your debt, start a business,
            or pay for college, we are here to help. This platform is designed
            to make the loan application process quick and easy, allowing our
            customers to get the funds they need as soon as possible.
          </span>

          <span>
            QuickFinz offers assistance in selecting the best financial products
            by using data and technological advancements. Our platform employs
            an algorithm-based approach to grant access to various personal
            credit offers, facilitate effortless comparison of multiple options,
            and provide impartial advice. Throughout the entire loan application
            process, from initiation to disbursal or credit card issuance, we
            stand by your side to provide comprehensive support.
          </span>

          <span>
            Thank you for considering QuickFinz for your borrowing needs & one
            stop services platform. We look forward to help you for achieving
            your financial goals.
          </span>
        </p>
      </div>

      <Testimonials />
    </section>
  );
};

export default AboutPage;
