"use client";

import React, { useState } from "react";
import img1 from "@/assets/settngs/text-square.png";
import Image from "next/image";
const Settings = () => {
  const [show, setshow] = useState(true);
  const [value, setvalue] = useState(40);
  return (
    <main className="  border-[1.5px] border-[rgba(16, 16, 16, 0.1)] m-3 p-2">
      <section className="w-full ">
        <div className="collapse collapse-arrow ">
          <input
            onClick={() => setshow(!show)}
            type="radio"
            name="my-accordion-2"
            checked={show}
          />

          <div
            style={{ color: "rgba(229, 85, 39, 1)" }}
            className="flex justify-between collapse-title"
          >
            <p className="flex gap-3 items-center pl-3">
              <Image src={img1} width={25} height={30} />
              <span className="text-sm ">Settings</span>
            </p>
          </div>
          <div className="collapse-content flex flex-col gap-7">
            {/* paragraph font size */}
            <div>
              <p className="flex mb-2 ">
                <span className="flex-1">Paragraph Font Size</span>{" "}
                <span style={{ color: "rgba(229, 85, 39, 1)" }}>{value}</span>
              </p>
              <p className="relative">
                <span
                  className="absolute z-10 h-1 top-[13px] rounded-lg "
                  style={{
                    backgroundColor: "rgba(229, 85, 39, 1)",
                    width: `${value - 2}%`,
                  }}
                >
                  .{" "}
                </span>
                <input
                  type="range"
                  onChange={(e) => setvalue(parseInt(e.target.value, 10))}
                  min={0}
                  max={100}
                  value={value}
                  className="inputRange "
                />
              </p>
            </div>
            {/* choose vitamin */}
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold">Choose Vitamin Type</p>
              <select className="select w-full font-bold bg-base-200">
                <option className="w-full font-semibold bg-base-200" selected>
                  All Vitamins
                </option>
                <option>Vitamin A</option>
                <option>Vitamin B</option>
                <option>Vitamin C</option>
                <option>Vitamin B complex</option>
              </select>
            </div>
            {/* subtitle */}

            <div className=" flex justify-between">
              <span className=" font-bold">Turn Of Subtitle</span>
              <input
                type="checkbox"
                className="toggle border-[1px] border-gray-300   bg-gray-300"
                checked={false}
              />
            </div>
          </div>
        </div>

        {/* jj */}
      </section>
    </main>
  );
};

export default Settings;
