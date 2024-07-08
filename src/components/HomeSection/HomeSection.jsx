import React from "react";
import SectionIndex from "./SectionIndex";
import SectionTable from "./SectionTable";
import HomeLayout from "../layout/HomeLayout";
import SectionPotential from "./SectionPotential";
import SectionSlider from "./SectionSlider";
import SectionStories from "./SectionStories";
import SectionAbout from "./SectionAbout";
import SectionPortfolio from "./SectionPortfolio";

export default function HomeSection() {
  return (
    <HomeLayout>
      <SectionIndex />
      <SectionTable />
      <SectionPotential />
      <SectionSlider />
      <SectionStories />
      <SectionAbout />
      <SectionPortfolio />
    </HomeLayout>
  );
}
