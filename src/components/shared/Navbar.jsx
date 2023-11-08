import React from "react";
import img1 from "@/assets/images/food-network 1.png";
import img2 from "@/assets/images/Frame 741.png";
import img3 from "@/assets/images/Frame 765.png";
import img4 from "@/assets/images/Frame 767.png";
import img5 from "@/assets/images/Frame 769.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" w-full flex justify-between items-center ">
      <div className="">
        <Image src={img1} height={60} width={60} alt="website name" />
      </div>
      <div className="hidden md:flex ">
        <p className="flex border rounded-lg border-pink-50 p-1 lg:gap-32">
          <input
            type="text"
            className="navInput text-sm "
            placeholder="Search Best Food"
          />
          <Image src={img2} height={20} width={40} alt="website name" />
        </p>
      </div>
      <div className="">
        <p className="flex gap-2 items-center">
          <Image
            src={img4}
            height={20}
            width={32}
            alt="website name"
            className="hidden md:flex"
          />
          <Image
            src={img5}
            height={20}
            width={32}
            alt="website name"
            className="hidden md:flex"
          />
          <Image
            src={img2}
            height={20}
            width={40}
            alt="website name"
            className=" md:hidden"
          />

          <label className=" ">
            <Image src={img3} height={20} width={32} alt="website name" />
          </label>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
