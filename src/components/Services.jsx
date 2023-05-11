import React from "react";
import Wrapper from "./Partials/Wrapper";
import mask from "../assets/mask.png";
import ServicesCard from "./Partials/ServicesCard";
import services1 from "../assets/services1.svg";
import services2 from "../assets/services2.svg";
import services3 from "../assets/services3.svg";
import services4 from "../assets/services4.svg";
import services5 from "../assets/services5.svg";
import services6 from "../assets/services6.svg";
import Heading from "./Partials/Heading";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full h-full font-montserrat pt-16 pb-24 bg-bg-2 relative"
    >
      <Wrapper className="flex flex-col items-center justify-center">
        <Heading heading="Explore" blueHeading="Services" left={false} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[4rem] gap-x-[6rem] mt-12">
          <ServicesCard
            img={services1}
            title="Credit Services"
            text="To act as a marketplace or marketing platform for distribution of all types lending, lead generation through NBFS’s, Lending institution and Banks etc."
          />

          <ServicesCard
            img={services2}
            title="Utility Services"
            text="BBPS authorize online utility bills payments services platform. We provide all types of recharges, utility Bill Payment services to the customers."
          />

          <ServicesCard
            img={services3}
            title="Mutual Fund"
            text="Offering Goal-based SIPs (Systematic Investment Plans) including but not limited to Mutual Fund Schemes, Pension Products such as NPS and much more!"
          />

          <ServicesCard
            img={services4}
            title="Insurance Services"
            text="We believe in transparency in insurance Services. Two Wheler, Four-wheeler, Commercial, Travel, Term Plan etc insurance services are available here."
          />

          <ServicesCard
            img={services5}
            title="Banking Services"
            text="To be the leading neo banking services company of choice for the under-served common man offering secured, responsive & customised banking and financial services."
          />

          <ServicesCard
            img={services6}
            title="Travel & e-Governance"
            text="Users will be benefited at cheap rate travel experiences by using our Travel Services. Our platform is growing by e-Governance Services Like PAN apply, Correction etc."
          />
        </div>

        <img
          src={mask}
          className="w-[18rem] absolute z-10 bottom-0 left-3 hidden lg:block"
        />
      </Wrapper>
    </section>
  );
};

export default Services;
