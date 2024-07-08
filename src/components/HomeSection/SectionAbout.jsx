import React from "react";
import fondo from "../../img/banner-img 3.png";

export default function SectionAbout() {
  return (
    <section className="h-[100%] md:w-[80%] mx-auto mt-24 flex flex-col">
      <div className="border border-[#90B8F0] w-[100%] my-24" />
      <div className="bg-white min-h-[26.25rem] w-full rounded-lg relative">
        <img
          src={fondo}
          alt="fondo image"
          className="absolute right-0 hidden lg:block lg:opacity-50 xl:opacity-100 z-0"
        />
        <div className="lg:w-[70%] p-16 z-[100] ">
          <h4 className="text-[2rem] md:text-[3rem] font-serif p-0 m-0">
            About WPPOOL
          </h4>
          <h5 className="text-[1.8rem] text-[#7D7F81] font-serif">
            Investing in wppool for over 50 years
          </h5>
          <p className="text-[#191618] md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique
            accusantium nemo autem.
          </p>
        <button className="shadow-[0_5px_10px_rgba(0,0,0,0.5)] mt-8 rounded-full bg-[#2042B6] py-3 px-3 text-md text-white hover:bg-sky-500 active:bg-sky-700 ">
        Contact WPPOOL
        </button>
        </div>
      </div>
      <div className="border border-[#90B8F0] w-[100%] my-24" />
    </section>
  );
}
