import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full items-center justify-center bg-bg-2">
      <div className="flex h-full w-full flex-col items-center justify-center py-[12rem]">
        <h1 className="text-6xl font-bold text-orange">404</h1>
        <h2 className="mt-1 text-xl font-semibold text-blue">
          Page Not Found :(
        </h2>

        <p className="mt-1 text-xl font-semibold text-blue">
          Go back to{" "}
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer underline hover:text-orange"
          >
            HomePage
          </span>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
