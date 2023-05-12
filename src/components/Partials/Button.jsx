import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Button = ({ text, href }) => {
  const navigate = useNavigate();

  return (
    <button
      className="background flex items-center rounded-md px-4 py-2 font-medium text-[#fff]"
      onClick={() => navigate({ href })}
    >
      {text} <HiOutlineChevronRight size={16} />
    </button>
  );
};

export default Button;
