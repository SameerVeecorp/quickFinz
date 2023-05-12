import React from "react";
import ImgHeading from "../components/Partials/ImgHeading";
import CareersCard from "../components/Partials/CareersCard";

const CareersPage = () => {
  return (
    <section
      id="careers"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB]"
    >
      <ImgHeading text="Careers" />

      <div className="flex w-full flex-col items-center justify-center gap-10 px-6 py-16 md:p-16 lg:max-w-[80rem]">
        <CareersCard
          heading="We are here to empowering our consumers:"
          text="At QuickFinz, we are dedicated to making a meaningful difference in the lives of our customers/ clients, and every member of our team shares this goal. If you share our passion for creating a positive impact and improving the lives of consumers, we invite you to join us on our journey."
        />

        <CareersCard
          heading="Technology Team"
          text="Are you looking for opportunities in Data Science, Back-end Engineering, Full-stack Development, UI/UX Design, or Analytics roles?"
          children={
            <span>Along with a cover letter send your resume to us.</span>
          }
        />

        <CareersCard
          heading="Product and Marketing Team"
          text="Are you excited about Product Management? Interested in Digital Marketing, Content-SEO roles, PR, Brand? Along with a cover letter send your resume to us."
        />

        <CareersCard
          heading="Operations Teams"
          text="Are you passionate about helping customers? If so, we are currently hiring for our customer service fulfilment, accounts, and business operation teams."
          children={
            <>
              <span>Along with a cover letter send your resume to us.</span>
              <span>
                Email -{" "}
                <span className="cursor-pointer text-blue">
                  wecare@quickfinz.com
                </span>
              </span>
            </>
          }
        />
      </div>
    </section>
  );
};

export default CareersPage;
