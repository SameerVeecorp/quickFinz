import React from "react";

const CarouselThumbs = ({ isSelected, onClickHandler, index, className }) => {
  return (
    <span
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      className={`${
        isSelected ? "text-[21px] text-[#f75c29]" : "text-[22px] text-[#cecece]"
      }  material-symbols-outlined mb-1 ${className}`}
    >
      radio_button_checked
    </span>
  );
};

export default CarouselThumbs;
