import React from "react";

const InputFields = ({ label, id, type, required }) => {
  return (
    <div className="relative flex flex-col">
      <label
        htmlFor={id}
        className="absolute left-[5%] top-[-18%] bg-[white] py-0 pl-[0.2rem] pr-2 text-[0.8rem] font-semibold text-[rgb(96,92,92)]"
      >
        {label}
      </label>
      <input
        className="rounded-[5px] border-2 border-solid border-[rgb(96,92,92)] px-[1.2rem] py-[0.8rem] text-base font-semibold [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        type={type}
        id={id}
        required={required}
      />
    </div>
  );
};

export default InputFields;
