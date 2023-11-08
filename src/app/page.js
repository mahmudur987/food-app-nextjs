"use client";
import MainContent from "@/components/Home/MainContent";
import Settings from "@/components/Home/Settings";
import SideBar from "@/components/Home/SideBar";
import SocialLinks from "@/components/Home/SocialLinks";
import img1 from "@/assets/main/Group.png";
import { useState } from "react";
import Image from "next/image";

function Home() {
  const [show, setshow] = useState(false);

  return (
    <main className="lg:flex bg-[#EEF0F2] min-h-screen rounded-tl-3xl relative ">
      <div className="w-full lg:hidden flex justify-center ">
        <div className="collapse collapse-arrow m-2 bg-white ">
          <input
            onClick={() => setshow(!show)}
            type="radio"
            name="my-accordion-2"
            checked={show}
          />

          <div className="flex justify-between collapse-title">
            <p className="flex gap-3 items-center pl-3">
              <Image src={img1} width={25} height={30} />
              <span className="font-bold ">Select Food Item</span>
            </p>
          </div>
        </div>

        <div
          onClick={() => setshow(!show)}
          className=" absolute -top-3 z-10 w-full"
        >
          {show && (
            <div className="overflow-visible">
              <SideBar />
            </div>
          )}
        </div>
      </div>
      <div className=" hidden lg:max-w-[320px] w-full lg:flex justify-center ">
        <SideBar />
      </div>
      <div className=" flex-1 flex  bg-white p-3 my-3 rounded-md gap-5">
        <div className="hidden xl:flex items-start">
          <SocialLinks />
        </div>

        <div className="flex-1">
          <MainContent />
        </div>
      </div>
      <div className="w-[300px] h-[340px] bg-white m-3 rounded-lg  hidden lg:flex">
        <Settings />
      </div>
    </main>
  );
}

export default Home;
