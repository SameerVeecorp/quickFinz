import React from "react";
import card from "../../assets/credit-card.png";

const data = [
  "No Credit Score required",

  "No income proof required",

  "Earn up to 6.5 % on FD",

  "Card Limit 100% on FD",

  "Increase Credit Score",

  "Cashback and many more facilities",
];

const CreditCard = ({ left }) => {
  return (
    <>
      {left === true ? (
        <div className="flex w-full flex-col items-center   lg:w-[60rem] lg:flex-row xl:gap-[10rem]">
          <div className="relative mb-8 flex w-full items-center justify-center md:w-[55%] lg:mb-0">
            <img src={card} alt="creditCard" className="w-[80%] xl:w-full" />
            <div className="absolute left-5 top-6 -z-10 h-[5rem] w-[5rem] rounded-full bg-[#FEE7DF] md:left-9 md:top-10 md:h-[10rem] md:w-[10rem]" />
          </div>

          <div className="flex w-full flex-col items-start md:w-[40%] xl:w-[55%]">
            <h3
              className="font-bold text-text-color
            "
            >
              Step up Credit Card
            </h3>
            <ul className="ml-7 mt-3 list-image-[url('/src/assets/hand.svg')]">
              {data.map((item, index) => (
                <li key={index} className="mb-2 pl-1 text-[15px] font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center   lg:w-[60rem] lg:flex-row xl:gap-[10rem]">
          <div className="flex w-[40%] flex-col items-end xl:w-[55%]">
            <h3
              className="self-center font-bold text-text-color lg:-ml-10 xl:-ml-7
            "
            >
              Step up Credit Card
            </h3>
            <ul className="ml-7 mt-3 list-image-[url('/src/assets/hand.svg')]">
              {data.map((item, index) => (
                <li key={index} className="mb-2 pl-1 text-[15px] font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mb-8 flex w-[55%] items-center justify-center lg:mb-0">
            <img src={card} alt="creditCard" className="w-[80%] xl:w-full" />
            <div className="absolute left-9 top-10 -z-10 h-[10rem] w-[10rem] rounded-full bg-[#FEE7DF]" />
          </div>
        </div>
      )}
    </>
  );
};

export default CreditCard;
