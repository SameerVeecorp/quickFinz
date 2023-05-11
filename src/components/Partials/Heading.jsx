import React from "react";

const Heading = ({ heading, blueHeading, left, br }) => {
  return (
    <div
      className={`flex flex-col ${
        left === true ? "items-start text-start" : "items-center text-center"
      }`}
    >
      <h1 className="font-montserrat text-3xl font-bold leading-snug text-[#191919]">
        {heading} {br && <br />}
        <span className=" text-blue">{blueHeading}</span>
      </h1>

      <hr className="my-4 w-[6rem] rounded-2xl border-[3px] border-orange" />
    </div>
  );
};

export default Heading;
