import React from "react";
import fondo from "../../img/fondo_slider.png";
import { FaCaretDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import card1 from "../../img/card1.png";
import card2 from "../../img/card2.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineFundView } from "react-icons/ai";

export default function SectionSlider() {
  const arrayCards = [
    card1,
    card2,
    card1,
    card2,
    card1,
    card2,
    card1,
    card2,
    card1,
    card2,
    card1,
    card2,
  ];

  return (
    <section className="h-[100%] md:w-[80%] mx-auto mt-24 flex flex-col">
      <div className="my-auto h-full">
        <img src={fondo} alt="fondo image" className="absolute right-0" />

        <div className="w-[70%]">
          <h4 className="text-[2rem] md:text-[3rem] font-serif">
            State of USA
          </h4>
          <button className="mb-4 rounded-full bg-[#2042B6] px-4 pb-2 text-5xl text-white hover:bg-sky-500 active:bg-sky-700 flex gap-6 items-center">
            <p className="font-serif">2024</p>
            <FaCaretDown className="text-xl" />
          </button>
          <p>
            Click through the slides or download the report to view natively on
            your device.
          </p>
        </div>

        <div className="relative h-full">
          <Swiper
            className="w-[100vw] pt-4 pb-8"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            navigation={{
              nextEl: ".boton2",
              prevEl: ".boton1",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {arrayCards?.map((item, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <img src={item} alt="Image card" />
                </SwiperSlide>
              );
            })}

            <div className="absolute bottom-4 left-4 z-50 flex justify-between w-[80%] gap-4 flex-wrap">
              <div className="flex gap-6 px-2 items-center flex-wrap">
                <button className="boton1 text-xl shadow-[0_8px_10px_rgba(0,0,0,0.5)] rounded-full p-5 bg-white text-[#2042B6] hover:text-white hover:bg-sky-500 active:bg-sky-700">
                  <FaArrowLeftLong />
                </button>
                <button className="boton2 text-xl shadow-[0_8px_10px_rgba(0,0,0,0.5)] rounded-full p-5 bg-white text-[#2042B6] hover:text-white hover:bg-sky-500 active:bg-sky-700">
                  <FaArrowRightLong />
                </button>
                <div className="gap-6 px-2 items-center hidden md:flex">
                  <p>Pages</p>
                  <button className=" rounded-full bg-white px-4 py-2 text-md text-black hover:bg-sky-500 active:bg-sky-700 flex gap-6 items-center">
                    <p>1 and 2</p>
                    <FaCaretDown className="text-xl text-[#2042B6]" />
                  </button>
                  <p>of 37</p>
                </div>
              </div>
              <button className="shadow-[0_5px_10px_rgba(0,0,0,0.5)] rounded-full bg-[#2042B6] py-2 px-4 text-md text-white hover:bg-sky-500 active:bg-sky-700 ">
                <p className="hidden lg:block">Download the 2023 Report</p>
                <AiOutlineFundView className="block lg:hidden text-[25px]" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
