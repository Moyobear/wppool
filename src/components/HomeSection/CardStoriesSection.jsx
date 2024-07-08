import React from "react";

export default function CardStoriesSection({ img, title, coment }) {
  return (
    <div className="w-[23rem] h-[13rem] bg-white rounded-xl p-4 relative">
      <img src={img} alt={"imagen card"} className="absolute -top-12 left-2" />
      <p className="text-[14px] text-[#2042B6] mt-16">{title}</p>
      <p className="text-[16px] leading-tight">{coment}</p>
      <button className="absolute bottom-4 left-4 rounded-full bg-[#2042B6] py-1 px-3 text-sm text-white hover:bg-sky-500 active:bg-sky-700 ">
        Read More
      </button>
    </div>
  );
}
