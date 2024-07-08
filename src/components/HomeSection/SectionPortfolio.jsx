import React from "react";
import port1 from "../../img/port1.png";
import port2 from "../../img/port2.png";
import port3 from "../../img/port3.png";
import port4 from "../../img/port4.png";
import port5 from "../../img/port5.png";
import port6 from "../../img/port6.png";
import port7 from "../../img/port7.png";
import port8 from "../../img/port8.png";
import port9 from "../../img/port9.png";
import port10 from "../../img/port10.png";
import port11 from "../../img/port11.png";
import port12 from "../../img/port12.png";
import port13 from "../../img/port13.png";
import port14 from "../../img/port14.png";
import port15 from "../../img/port15.png";
import port16 from "../../img/port16.png";
import port17 from "../../img/port17.png";
import port18 from "../../img/port18.png";
import port19 from "../../img/port19.png";
import port20 from "../../img/port20.png";

const imgs = [
  port1,
  port2,
  port3,
  port4,
  port5,
  port6,
  port7,
  port8,
  port9,
  port10,
  port11,
  port12,
  port13,
  port14,
  port15,
  port16,
  port17,
  port18,
  port19,
  port20,
];

export default function SectionPortfolio() {
  return (
    <section className="h-[100%] md:w-[80%] mx-auto my-16 flex flex-col">
      <div className="my-auto h-full">
        <div className="md:w-[70%] mb-12">
          <h4 className="text-[2rem] md:text-[3rem] font-serif w-full">
            Selected WPPOOL Portfolio Companies
          </h4>
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
