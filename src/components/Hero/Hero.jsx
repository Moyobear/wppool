import React from "react";
import dots from "../../img/Asset 1@4x 1.svg";
import rectangle from "../../img/Rectangle 1.png";
import CenterHero from "./CenterHero";
import { BsArrowDown } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <>
    <div className="w-full h-[100vh] bg-[#2042B6] relative">
      <Navbar />
      <CenterHero />
      <button className="rounded-[100%] border bg-white p-4 text-2xl text-black hover:bg-sky-500 active:bg-sky-700 absolute right-4 bottom-4 z-50 shadow-[0_15px_20px_rgba(0,0,0,0.5)]">
            <BsArrowDown />
          </button>
    </div>
    </>
  );
}
