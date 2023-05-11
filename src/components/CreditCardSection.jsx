import React from "react";
import Wrapper from "./Partials/Wrapper";
import CreditCard from "./Partials/CreditCard";
import Heading from "./Partials/Heading";

const CreditCardSection = () => {
  return (
    <section id="creditCardSection" className="py-16">
      <Wrapper>
        <div className="flex flex-col items-center">
          <Heading
            heading="Chirkut ki Jindegi Goodbye karo,"
            blueHeading="Credit Card se Apna Lifestyle Smart Banao."
            left={false}
            br={true}
          />
        </div>

        <div className="mt-16 w-full">
          <div className="hidden flex-col items-center justify-center gap-y-16 lg:flex">
            <CreditCard left={true} />

            <CreditCard left={false} />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-16 lg:hidden">
            <CreditCard left={true} />

            <CreditCard left={true} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CreditCardSection;
