import React from "react";
import DataTable from "react-data-table-component";
import { IoIosSearch } from "react-icons/io";
import { TbTableDown } from "react-icons/tb";
import { AiOutlineFundView } from "react-icons/ai";

const mockData = [
  {
    id: "1",
    title1: "Adyen",
    title2: "AFRM",
    title3: "Payments",
    title4: "$17.15",
    title5: "$50.5",
    title6: "49.0%",
    title7: "15.8%",
    title8: "6.3",
    title9: "24.3%",
  },
  {
    id: "2",
    title1: "Affirm",
    title2: "AFRM",
    title3: "Lending",
    title4: "$16.12",
    title5: "$4.7",
    title6: "32.0%",
    title7: "48.7%",
    title8: "4.9",
    title9: "77.1%",
  },
  {
    id: "3",
    title1: "Alkami Technology",
    title2: "ALKT",
    title3: "B2B SaaS",
    title4: "$16.27",
    title5: "$1.5",
    title6: "34.0%",
    title7: "53.0%",
    title8: "7.0",
    title9: "10.0%",
  },
  {
    id: "4",
    title1: "AvidXchange",
    title2: "AVDX",
    title3: "Payments",
    title4: "$10.21",
    title5: "$2.0",
    title6: "27.0%",
    title7: "61.5%",
    title8: "6.0",
    title9: "10.5%",
  },
  {
    id: "5",
    title1: "Bakkt Holdings",
    title2: "BKKT",
    title3: "Wealth",
    title4: "$1.32",
    title5: "$0.1",
    title6: "38%",
    title7: "--",
    title8: "0.4",
    title9: "13.8%",
  },
  {
    id: "6",
    title1: "Virtu Financial Inc",
    title2: "Virtu Financial Inc",
    title3: "Wealth",
    title4: "$17.0",
    title5: "$3.1",
    title6: "-22.0%",
    title7: "38.2%",
    title8: "2.6",
    title9: "-17.8%",
  },
  {
    id: "7",
    title1: "Adyen",
    title2: "AFRM",
    title3: "Payments",
    title4: "$17.15",
    title5: "$50.5",
    title6: "49.0%",
    title7: "15.8%",
    title8: "6.3",
    title9: "24.3%",
  },
  {
    id: "8",
    title1: "Affirm",
    title2: "AFRM",
    title3: "Lending",
    title4: "$16.12",
    title5: "$4.7",
    title6: "32.0%",
    title7: "48.7%",
    title8: "4.9",
    title9: "77.1%",
  },
  {
    id: "9",
    title1: "Alkami Technology",
    title2: "ALKT",
    title3: "B2B SaaS",
    title4: "$16.27",
    title5: "$1.5",
    title6: "34.0%",
    title7: "53.0%",
    title8: "7.0",
    title9: "10.0%",
  },
  {
    id: "10",
    title1: "AvidXchange",
    title2: "AVDX",
    title3: "Payments",
    title4: "$10.21",
    title5: "$2.0",
    title6: "27.0%",
    title7: "61.5%",
    title8: "6.0",
    title9: "10.5%",
  },
];

const customStyles = {
  rows: {
    style: {
      fontFamily: "serif",
      fontSize: "19px",
      cursor: "pointer",
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
      fontSize: "14px",
    },
  },
};

const conditionalRowStyles = [
  {
    when: (row) => row.id % 2 === 0,
    style: {
      backgroundColor: "#F3F3F3",
    },
  },
];

export default function SectionTable() {
  const columns = [
    {
      name: "Company",
      selector: (row) => row.title1,
    },
    {
      name: "Ticker",
      selector: (row) => row.title2,
      sortable: true,
      center: "true",
    },
    {
      name: "Vertical",
      selector: (row) => row.title3,
    },
    {
      name: "Price",
      selector: (row) => row.title4,
      center: "true",
    },
    {
      name: "Market Cap ($B)",
      selector: (row) => row.title5,
      center: "true",
    },
    {
      name: "Revenue Growth",
      selector: (row) => row.title6,
      center: "true",
    },
    {
      name: "Gross Margin",
      selector: (row) => row.title7,
      center: "true",
    },
    {
      name: "EV/Revenue",
      selector: (row) => row.title8,
      center: "true",
    },
    {
      name: "YTD Performance",
      selector: (row) => row.title9,
      center: "true",
    },
  ];

  return (
    <section className="h-full my-10">
      <div className="w-full rounded-2xl bg-white  pt-10 p-4">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <h4 className="text-[1.4rem] md:text-[3rem] font-serif">
            All Companies
          </h4>
          <div className="flex h-[3rem] items-center gap-2 bg-[#F3F3F3] rounded-lg border border-[#DADADA] w-[36.7rem] pl-4 cursor-pointer mr-8">
            <IoIosSearch className="text-[24px]" />
            <p className=" md:text-[1.5rem] font-serif">Search Companies</p>
          </div>
        </div>

        <div className="mt-8 px-2 md:px-8">
          <DataTable
            responsive={true}
            columns={columns}
            data={mockData}
            customStyles={customStyles}
            conditionalRowStyles={conditionalRowStyles}
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-8 mt-10">
        <button className="shadow-[0_15px_20px_rgba(0,0,0,0.5)] rounded-full bg-[#2042B6] py-2 px-4 text-md text-white hover:bg-sky-500 active:bg-sky-700">
          <p className="hidden md:block">Download ‘All Companies’ Data</p>
          <TbTableDown className="block md:hidden text-[25px]" />
        </button>
        <button className="shadow-[0_15px_20px_rgba(0,0,0,0.5)] rounded-full bg-[#2042B6] py-2 px-3 text-md text-white hover:bg-sky-500 active:bg-sky-700 ">
          <p className="hidden md:block">View Methodology</p>
          <AiOutlineFundView className="block md:hidden text-[25px]" />
        </button>
      </div>
    </section>
  );
}
