import React from "react";
import img1 from "@/assets/images/Frame 741.png";
import img2 from "@/assets/settngs/text-square.png";

import Image from "next/image";
import { sidebarData } from "@/data/sidebarData";
const SideBar = () => {
  return (
    <main className="w-[300px] h-[730px]  bg-white rounded-2xl m-3 p-3 flex flex-col items-center gap-4">
      <div className="w-full lg:flex justify-between border-2 border-[rgba(230, 85, 39, 0.15)] p-1 rounded-xl">
        <button
          style={{ backgroundColor: "rgba(230, 85, 39, 0.1)" }}
          className="w-32 h-8 rounded-lg font-semibold"
        >
          Fruite
        </button>
        <button className=" w-1/2 text-center">Vegetables</button>
      </div>

      <div
        className=" w-full flex justify-between bg-[
rgba(255, 255, 255, 1)] border border-[rgba(240, 242, 244, 1)] border-2 rounded-md py-1 pl-3 pr-1 "
      >
        <input
          className="text-xs"
          type="text"
          placeholder="Search by Fruits Name"
        />
        <Image src={img1} />
      </div>
      <h3
        className="font-semibold text-xs text[ rgba(16, 16, 16, 1) text-start w-full
]"
      >
        Fruit List
      </h3>

      <div className=" w-[300px] h-[680px] overflow-hidden hover:overflow-auto flex flex-col items-center  ">
        {sidebarData.map((x, i) => (
          <div
            key={i}
            className={`max-w-[270px] w-full  flex justify-between p-1  rounded-xl hover:border-[1.5px] border-[#E55527]`}
          >
            <div className="w-1/3 flex justify-center">
              <Image src={x.image} />
            </div>
            <div className="w-2/3 flex flex-col justify-center ">
              <h3 className="font-semibold">{x.name}</h3>
              <p className="text-sm"> {x.vitamin}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SideBar;
