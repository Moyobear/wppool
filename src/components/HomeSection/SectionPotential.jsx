import React from "react";
import img1 from "../../img/Group 219.png";
import img2 from "../../img/Group 220.png";
import img3 from "../../img/Group 221.png";
import img4 from "../../img/Group 222.png";
import img5 from "../../img/Group 223.png";
import img6 from "../../img/Group 224.png";
import img7 from "../../img/Group 225.png";
import img8 from "../../img/Group 226.png";
import img9 from "../../img/Group 227.png";
import img10 from "../../img/Group.png";

export default function SectionPotential() {
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <section className="h-[100%] mt-20 md:w-[80%] mx-auto flex flex-col mb-20">
      <div className="my-auto h-full">
        <div className="md:w-[70%]">
          <h4 className="text-[2rem] md:text-[3rem] font-serif">
            Potential Future Listings
          </h4>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>

        <div className="flex justify-center md:justify-between flex-wrap gap-5 h-full w-[100%] mx-auto mt-6">
          {imgs?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white min-w-[15rem] h-[7.5rem] rounded flex items-center justify-center my-auto"
              >
                <img src={item} alt={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
