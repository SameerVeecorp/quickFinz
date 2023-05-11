import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Button = ({ text, href }) => {
  const navigate = useNavigate();

  return (
    <button
      className="text-[#fff] rounded-md py-2 px-4 flex items-center background"
      onClick={() => navigate({ href })}
    >
      {text} <HiOutlineChevronRight size={16} />
    </button>
  );
};

export default Button;
