import React from "react";
import Wrapper from "./Partials/Wrapper";
import Heading from "./Partials/Heading";
import Circle from "./Partials/Circle";

const Process = () => {
  return (
    <section id="process" className="h-full w-full bg-bg-2 pb-32 pt-24">
      <Wrapper className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Heading heading="Loan Application" blueHeading=" Process" />

          <div className="mt-16 flex w-full items-center justify-center">
            <div className="hidden gap-12 lg:grid lg:grid-cols-4">
              <Circle
                color="blue"
                text="Application submits with KYC and other details in QuickFinz Platform."
                leftCircle={false}
                rightCircle={true}
                line="right"
                arrowUp={true}
              />

              <Circle
                color="orange"
                text="QuickFinz handed over the application to NBFS’s, Lending institution and Banks."
                leftCircle={true}
                rightCircle={true}
                line="right"
                arrowDown={true}
              />

              <Circle
                color="blue"
                text="Lending institutions check applicant CIBIL & generate Report."
                leftCircle={true}
                rightCircle={true}
                line="right"
                arrowUp={true}
              />

              <Circle
                color="orange"
                text="CIBIL Score match with their requirement & release loan directly to the applicant after legal procedure."
                leftCircle={true}
                rightCircle={false}
                arrowDown={true}
              />
            </div>

            <div className="grid grid-cols-1 gap-12 lg:hidden">
              <Circle
                color="blue"
                text="Application submits with KYC and other details in QuickFinz Platform."
                topCircle={false}
                bottomCircle={true}
                line="bottom"
                arrowRight={true}
              />

              <Circle
                color="orange"
                text="QuickFinz handed over the application to NBFS’s, Lending institution and Banks."
                topCircle={true}
                bottomCircle={true}
                line="bottom"
                arrowLeft={true}
              />

              <Circle
                color="blue"
                text="Lending institutions check applicant CIBIL & generate Report."
                topCircle={true}
                bottomCircle={true}
                line="bottom"
                arrowRight={true}
              />

              <Circle
                color="orange"
                text="CIBIL Score match with their requirement & release loan directly to the applicant after legal procedure."
                topCircle={true}
                bottomCircle={false}
                arrowLeft={true}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Process;
