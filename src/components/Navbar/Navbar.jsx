import React from "react";
import logo from "../../img/logo.png";
import { CiShare2 } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { GrDocumentDownload } from "react-icons/gr";

export default function Navbar() {
  return (
    <nav className="absolute  left-0 top-6 w-full z-50 ">
      <div className="w-full max-w-[95%] mx-auto bg-[#2042B6] rounded py-2 flex justify-between items-center gap-8">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="rounded-[100%] border border-white p-2 text-2xl text-white hover:bg-sky-500 active:bg-sky-700">
            <CiShare2 />
          </button>
          <button className="rounded-full border border-white py-2 px-2 text-2xl md:text-sm text-white hover:bg-sky-500 active:bg-sky-700">
            <p className="hidden md:block">Download the 2024 Report</p>
            <GrDocumentDownload className="block md:hidden" />
          </button>
          <button className="rounded  py-2 px-2 text-2xl text-white hover:bg-sky-500 active:bg-sky-700">
            <IoMdMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}
