import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`mx-auto w-full max-w-[80rem] px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
