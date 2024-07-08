import React, {useState} from "react";
import Chart from "react-apexcharts"
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import union from "../../img/Union.png";
import { FaCaretDown } from "react-icons/fa";

export default function SectionIndex() {
  const generarNumeros = () => {
    const numerosAleatorios = [];
    for (let i = 0; i < 7; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      numerosAleatorios.push(numeroAleatorio);
    }
    return numerosAleatorios;
  };
  const [serie1, setSerie1] = useState(generarNumeros());
  const [serie2, setSerie2] = useState(generarNumeros());
  const [serie3, setSerie3] = useState(generarNumeros());
  const [serie4, setSerie4] = useState(generarNumeros());
  const [data, setData] = useState({
    series: [
      {name: "WPPOOL",
        data: serie1,
      },
      {name: "Google",
        data: serie2,
      },
      {name: "Microsoft",
        data: serie3,
      },
      {name: "Twitter",
        data: serie4,
      },
    ],
    options: {
      chart: {
        height: 540,
        type: "area",
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
      },
      colors: ["#FC714D", "#615DE3", "#7CA63A", "#6F34A1"],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0,90,100],
        },
      },
      grid: {
        show: true,
        borderColor: '#90A4AE',
      },
      dataLabels: {
        enable: false,
      },
      stroke: {
        curve: 'straight',
        width: 2,
      },
      xaxis: {
        type: 'category',
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul"
        ],
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
      },
      },
      legend : {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center', 
      }
    }
  });

  

  return (
    <section className="w-full h-full bg-white flex gap-4 -mt-[4.5rem] px-4 pb-8 pt-[5.5rem]">
      <aside className="bg-[#EFF3F6] rounded-xl flex flex-col py-2 px-3 w-[5rem] lg:w-[14rem] gap-4 font-serif">
        <button className="rounded-lg bg-[#2042B6] py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
          <p className="hidden lg:block">The Index</p>
          <p className="block lg:hidden text-lg">1</p>{" "}
          <FiMinus className="text-white text-[.55rem]" />
        </button>
        <button className="rounded-lg py-2 px-4 text-sm text-[#647888] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
          <p className="hidden lg:block">The Index Tab Two</p>
          <p className="block lg:hidden text-lg">2</p>{" "}
          <FaPlus className="text-[.55rem]" />
        </button>
        <button className="rounded-lg py-2 px-4 text-sm text-[#647888] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
          <p className="hidden lg:block">The Index Tab Three</p>
          <p className="block lg:hidden text-lg">3</p>{" "}
          <FaPlus className="text-[.55rem]" />
        </button>
        <button className="rounded-lg py-2 px-4 text-sm text-[#647888] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
          <p className="hidden lg:block">The Index Tab Four</p>
          <p className="block lg:hidden text-lg">4</p>{" "}
          <FaPlus className="text-[.55rem]" />
        </button>
        <button className="rounded-lg py-2 px-4 text-sm text-[#647888] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
          <p className="hidden lg:block"> The Index Tab Five </p>
          <p className="block lg:hidden text-lg">5</p>{" "}
          <FaPlus className="text-[.55rem]" />
        </button>
      </aside>

      <div className="w-full">
        <div className="flex gap-2 mb-1">
          <img
            src={union}
            alt="logo union"
            className="h-[31px] md:h-[41px] w-[35px] md:w-[45px]"
          />
          <h4 className="text-[1.4rem] md:text-[2.2rem]  font-serif">
            The WPPOOL Index
          </h4>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-3">
          <div className="bg-[#EFF3F6] rounded w-full px-2 flex justify-between gap-4 items-center">
            <p className="text-[1.7rem]  md:text-[2rem] text-[#FC714D] font-serif">
              +66.2%
            </p>
            <p className="pr-3 border-[#FC714D] border-r-4 my-2 text-right hidden sm:block">
              WPPOOL Index
            </p>
          </div>

          <div className="bg-[#EFF3F6] rounded w-full px-2 flex justify-between gap-4 items-center">
            <p className="text-[1.7rem]  md:text-[2rem] text-[#615DE3] font-serif">
              +26.6%
            </p>
            <p className="pr-3 border-[#615DE3] border-r-4 my-2 text-right hidden sm:block">
              Goolge Index
            </p>
          </div>

          <div className="bg-[#EFF3F6] rounded w-full px-2 flex justify-between gap-4 items-center">
            <p className="text-[1.7rem]  md:text-[2rem] text-[#7CA63A] font-serif">
              +34.1%
            </p>
            <p className="pr-3 border-[#7CA63A] border-r-4 my-2 text-right hidden sm:block">
              Microsoft
            </p>
          </div>

          <div className="bg-[#EFF3F6] rounded w-full px-2 flex justify-between gap-4 items-center">
            <p className="text-[1.7rem]  md:text-[2rem] text-[#6F34A1] font-serif">
              +17%
            </p>
            <p className="pr-3 border-[#6F34A1] border-r-4 my-2 text-right hidden sm:block">
              Twitter Index
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col-reverse md:flex-row justify-between gap-4 w-full items-center">
          <div className="flex gap-4">
            <button className="rounded-full bg-[#2042B6] p-1 px-3 text-sm text-white hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center w-[7rem] lg:w-[12rem]">
              <p>Sectors</p>
              <FaCaretDown className="text-white text-[.55rem]" />
            </button>
            <button className="rounded-full bg-[#2042B6] p-1 px-3 text-sm text-white hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center w-[7rem] lg:w-[12rem]">
              <p>Types of IPO</p>
              <FaCaretDown className="text-white text-[.55rem]" />
            </button>
          </div>

          <div className="flex gap-2 rounded-full bg-[#EFF3F6] p-1 px-3">
            <button className="rounded-full p-1 px-3 text-sm text-[#748DA1] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
              <p>1Y</p>
            </button>
            <button className="rounded-full p-1 px-3 text-sm text-[#748DA1] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
              <p>YTD</p>
            </button>
            <button className="rounded-full bg-[#2042B6] p-1 px-3 text-sm text-white hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
              <p>6M</p>
            </button>
            <button className="rounded-full p-1 px-3 text-sm text-[#748DA1] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
              <p>1M</p>
            </button>
            <button className="rounded-full p-1 px-3 text-sm text-[#748DA1] hover:bg-sky-500 active:bg-sky-700 flex justify-between items-center">
              <p>1W</p>
            </button>
          </div>
        </div>

        <div className="rounded-xl border-[#9FA0A1] border mt-5">
          <Chart options={data?.options} series={data?.series} type={data?.options?.chart?.type} height={data?.options?.chart?.height} />
        </div>


      </div>
    </section>
  );
}
