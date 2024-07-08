import React from "react";
import logo from "../../img/logo2.png";
import { CiShare2 } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { GrDocumentDownload } from "react-icons/gr";

export default function NavbarHomeSection() {
  return (
    <nav className="w-full z-50 mt-8">
      <div className="w-full max-w-[98%] mx-auto bg-[#F3F3F3] rounded py-2 flex justify-between px-4 items-center gap-8">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="rounded-[100%] border border-[#AFCD80] p-2 text-2xl text-black hover:bg-sky-500 active:bg-sky-700">
            <CiShare2 />
          </button>
          <button className="rounded-full border border-[#115CD9] py-2 px-2 text-2xl md:text-sm text-black hover:bg-sky-500 active:bg-sky-700">
            <p className="hidden md:block">Download the 2024 Report</p>
            <GrDocumentDownload className="block md:hidden" />
          </button>
          <button className="rounded  py-2 px-2 text-2xl text-black hover:bg-sky-500 active:bg-sky-700">
            <IoMdMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}
