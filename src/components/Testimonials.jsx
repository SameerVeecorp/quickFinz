import React from "react";
import TestimonialCard from "./Partials/TestimonialCard";
import Heading from "./Partials/Heading";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex h-full w-full flex-col items-center justify-center bg-[#f8f8f8] py-16 font-montserrat"
    >
      <Heading heading="Testimonials" />

      <div className="flex items-center justify-center gap-6 px-7 xl:gap-14 xl:px-0">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
