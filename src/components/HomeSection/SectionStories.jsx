import React from "react";
import foto1 from "../../img/foto1.png";
import foto2 from "../../img/foto2.png";
import foto3 from "../../img/foto3.png";
import CardStoriesSection from "./CardStoriesSection";

const mockData = [
  {
    img: foto1,
    title: "By: Sahabuddin Sagor",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.",
  },
  {
    img: foto2,
    title: "By: Nayem Khan",
    coment: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: foto3,
    title: "By: Shagor Sahabuddin",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.r",
  },
  {
    img: foto1,
    title: "By: Sahabuddin Sagor",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.",
  },
  {
    img: foto2,
    title: "By: Nayem Khan",
    coment: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: foto3,
    title: "By: Shagor Sahabuddin",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.r",
  },
];

export default function SectionStories() {
  return (
    <section className="h-[100%] md:w-[80%] mx-auto mt-24 flex flex-col">
      <div className="my-auto h-full">
        <div className="w-[70%] mb-24">
          <h4 className="text-[2rem] md:text-[3rem] font-serif">
            Stories & Ideas
          </h4>
          <p className="text-[1.3rem]">The latest news and updates</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center lg:justify-between gap-[5rem]">
          {mockData?.map((item, index) => {
            return (
              <CardStoriesSection key={index} img={item?.img} title={item?.title} coment={item?.coment} />
            )
          })}
        </div>
      </div>
    </section>
  );
}
