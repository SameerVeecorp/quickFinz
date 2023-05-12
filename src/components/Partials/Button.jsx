import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const Button = ({ text, className, type, onClick }) => {
  return (
    <button
      type={type ? type : "submit"}
      className={`${className} background flex items-center rounded-md px-4 py-2 font-medium text-[#fff]`}
      onClick={onClick}
    >
      {text} <HiOutlineChevronRight size={16} />
    </button>
  );
};

export default Button;
