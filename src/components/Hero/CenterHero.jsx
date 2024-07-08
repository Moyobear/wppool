import React from "react";
import dots from "../../img/Asset 1@4x 1.svg";
import rectangle from "../../img/Rectangle 1.png";

export default function CenterHero() {
  return (
    <div className="w-full h-full relative">
      <img
        src={dots}
        alt="Dots image"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full mix-blend-multiply"
      />
      <img
        src={rectangle}
        alt="rectángulo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center z-40 mix-blend-normal px-4">
        <h1 className="text-white text-[2rem] xl:text-[4.8rem] font-serif text-center">
          The Wh1POOL Index
        </h1>
        <p className=" text-white text-[.8rem] xl:text-[1.5rem] text-center leading-none">
          Monitor the performance of emerging, publicly traded, financial
          technology companies
        </p>
      </div>

      <div className="h-full pl-6">
        <div className="flex md:flex-col items-end md:items-start md:justify-end gap-3 md:gap-12 text-white h-full pb-12">
          <div className="flex flex-col">
            <p className="text-[2.2rem] font-serif">60</p>
            <p className="text-[1rem] font-sans">Companies</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[2.2rem] font-serif">$100B</p>
            <p className="text-[1rem] font-sans">Market cap</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[2.2rem] font-serif">3.5x</p>
            <p className="text-[1rem] font-sans">Revenue multiple</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[2.2rem] font-serif">60%</p>
            <p className="text-[1rem] font-sans">
              60% LTM avg. revenue growth rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
