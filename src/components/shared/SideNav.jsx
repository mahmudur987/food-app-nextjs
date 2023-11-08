import React from "react";
import img1 from "@/assets/images/icons.png";
import img2 from "@/assets/images/icons (1).png";
import img3 from "@/assets/images/icons (2).png";
import img4 from "@/assets/images/icons (3).png";
import img5 from "@/assets/images/icons (4).png";
import Image from "next/image";
const SideNav = () => {
  return (
    <div className="min-h-screen  flex items-center justify-around">
      <figure className=" flex flex-col gap-4 justify-around ">
        <Image src={img1} width={30} height={30} alt="sideNav Icon" />
        <Image src={img2} width={30} height={30} alt="sideNav Icon" />
        <Image src={img3} width={30} height={30} alt="sideNav Icon" />
        <Image src={img4} width={30} height={30} alt="sideNav Icon" />
        <Image src={img5} width={30} height={30} alt="sideNav Icon" />
      </figure>
    </div>
  );
};

export default SideNav;
