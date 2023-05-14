import React from "react";
import arrowBlue from "../../assets/arrowBlue.svg";
import arrowOrange from "../../assets/arrowOrange.svg";

const Circle = ({
  color,
  text,
  topCircle,
  leftCircle,
  rightCircle,
  bottomCircle,
  line,
  arrowUp,
  arrowDown,
  arrowLeft,
  arrowRight,
}) => {
  return (
    <>
      <div
        className={`relative z-20 flex h-[12.8rem] w-[12.8rem] items-center justify-center rounded-full border-[6px] bg-bg-2 text-center   xl:h-[14.5rem] xl:w-[14.5rem] ${
          color === "blue"
            ? "border-blue"
            : color === "orange"
            ? "border-orange"
            : ""
        } `}
      >
        <p className="px-6 text-[13px] font-medium">{text}</p>

        {topCircle && (
          <div
            className={`absolute -top-3 z-30 h-[1rem] w-[1rem] rounded-full border-[3px] bg-[#fff] ${
              color === "blue"
                ? "border-blue"
                : color === "orange"
                ? "border-orange"
                : ""
            }`}
          />
        )}

        {leftCircle && (
          <div
            className={`absolute -left-3 z-30 h-[1rem] w-[1rem] rounded-full border-[3px] bg-[#fff] ${
              color === "blue"
                ? "border-blue"
                : color === "orange"
                ? "border-orange"
                : ""
            }`}
          />
        )}

        {line === "right" ? (
          <div className="absolute -right-16 z-10 h-1 w-[4rem] bg-blue" />
        ) : line === "bottom" ? (
          <div className="absolute -bottom-16 z-10 h-[4rem] w-1 bg-blue" />
        ) : (
          <></>
        )}

        {rightCircle && (
          <div
            className={`absolute -right-3 z-30 h-[1rem] w-[1rem] rounded-full border-[3px] bg-[#fff] ${
              color === "blue"
                ? "border-blue"
                : color === "orange"
                ? "border-orange"
                : ""
            }`}
          />
        )}

        {bottomCircle && (
          <div
            className={`absolute -bottom-3 z-30 h-[1rem] w-[1rem] rounded-full border-[3px] bg-[#fff] ${
              color === "blue"
                ? "border-blue"
                : color === "orange"
                ? "border-orange"
                : ""
            }`}
          />
        )}
        {arrowUp && (
          <img
            src={arrowBlue}
            className="absolute -top-[7rem] hidden  w-[20rem] md:block"
          />
        )}

        {arrowRight && (
          <img
            src={arrowBlue}
            className="absolute -right-[7rem] hidden  w-[20rem] rotate-[88deg] md:block"
          />
        )}

        {arrowDown && (
          <img
            src={arrowOrange}
            className="absolute -bottom-[7rem] hidden  w-[20rem] md:block"
          />
        )}

        {arrowLeft && (
          <img
            src={arrowOrange}
            className="absolute -left-[7rem] hidden w-[20rem] rotate-[88deg] md:block"
          />
        )}
      </div>
    </>
  );
};

export default Circle;
