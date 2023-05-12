import React from "react";
import ImgHeading from "../components/Partials/ImgHeading";

const CancellationPolicyPage = () => {
  return (
    <section
      id="cancellationPolicy"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB]"
    >
      <ImgHeading
        text="Cancellation"
        br={true}
        blueText="Policy"
        className="flex md:hidden"
      />
      <ImgHeading
        text="Cancellation"
        br={false}
        blueText="Policy"
        className="hidden md:flex"
      />

      <div className="flex w-full items-center justify-center pb-16 pt-14 lg:max-w-[80rem]">
        <p className="flex flex-col gap-8 px-10 text-base font-medium leading-[1.8rem] lg:px-9">
          <span>
            Once payment has been made, orders cannot be cancelled and refunds
            will not be issued unless QuickFinz cancels or fails to provide the
            service. However, if you change your mind about using our services,
            experience a delay caused by QuickFinz, or is dissatisfied with the
            service, please email us with your complaint. We will only consider
            refunds for the professional fees portion of the charges paid, and
            full refunds will only be made if we determine that there was a
            delay or the client was dissatisfied after a thorough investigation.
            The final decision on whether a refund will be processed rests with
            the Management of QuickFinz. Please note that refunds will not be
            issued in the case of inevitable accidents or other events beyond
            our reasonable control.
          </span>
          <span>
            Once a refund request is approved, it will be processed and
            transferred to your bank account within 72 working hours, subject to
            the terms and conditions outlined in this policy.
          </span>
          <span>
            Thank you for choosing QuickFinz and for your continued support.
          </span>
          <span>
            For any types of disputes, please mail to Grievances Addressee
            Officer:
          </span>

          <span>
            M Jasmin,{" "}
            <span className="text-[#005cde]"> wecare@quickfinz.com</span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default CancellationPolicyPage;
