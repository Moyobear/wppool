import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="min-h-[100%] lg:w-[92%] mt-16 bg-[#E6E6E6] flex flex-col -mx-6 rounded-tr-3xl pb-8">
      <div className="flex flex-col lg:flex-row mx-[12%] justify-between gap-8 pt-6 lg:pt-16">
        <h4 className="text-[1.5rem] lg:text-[2rem] font-serif lg:w-[35%]">
          Experience remarkable WordPress products with a new level of power,
          beauty, and human-centered designs.
        </h4>
        <div className="flex lg:flex-col gap-6 lg:gap-2 flex-wrap">
          <p className="text-[20px] text-[#9FA0A1]">Jump to</p>
          <a href="#" className="text-[#115CD9] text-[20px]">
            About Us
          </a>
          <a href="#" className="text-[#115CD9] text-[20px]">
            Portfolio
          </a>
          <a href="#" className="text-[#115CD9] text-[20px]">
            News
          </a>
          <a href="#" className="text-[#115CD9] text-[20px]">
            Stories
          </a>
          <a href="#" className="text-[#115CD9] text-[20px]">
            Jobs
          </a>
          <a href="#" className="text-[#115CD9] text-[20px]">
            About Us
          </a>
        </div>
        <div className="flex flex-col gap-4 lg:w-[16rem]">
          <div className="flex flex-col gap-1">
            <p className="text-[#191618] text-[20px] font-bold">Cambridge</p>
            <p className="text-[20px] text-[#191618]">
              70728 Yost Burg, North Magdaleneview, UT 97952-2814
            </p>
            <div className="border border-[#9FA0A1] mt-4 lg:mt-8" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#191618] text-[20px] font-bold">London</p>
            <p className="text-[20px] text-[#191618]">
              Suite 292 903 Stehr Streets, Langworthtown, SC 94577-9465
            </p>
            <div className="border border-[#9FA0A1] mt-4 lg:mt-8" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#191618] text-[20px] font-bold">
              San Francisco
            </p>
            <p className="text-[20px] text-[#191618]">
              19837 Gilberto Lodge, Lake Kendallville, Colorado - 97392, Bhutan
            </p>
            <div className="border border-[#9FA0A1] mt-4 lg:mt-8" />
          </div>
          <div className="flex mt-2 gap-4 justify-center mx-auto lg:justify-normal lg:mx-0">
          <FaLinkedin className="text-[2rem] text-[#9FA0A1] cursor-pointer" />
          <FaTwitter className="text-[2rem] text-[#9FA0A1] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="ml-[12%] mt-10 lg:mt-0">
        <div className="lg:w-[50%]">
          <p className="text-[#9FA0A1] text-[14px] mb-3">
            ©2024 Terms of Use Privacy Policy
          </p>
          <p className="text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaera
          </p>
        </div>
      </div>
    </footer>
  );
}
