import React from "react";
import img1 from "@/assets/socialmediaIcons/facebook.png";
import img2 from "@/assets/socialmediaIcons/linkedin.png";
import img3 from "@/assets/socialmediaIcons/twitter.png";
import img4 from "@/assets/socialmediaIcons/link.png";
import Image from "next/image";
const SocialLinks = () => {
  return (
    <div className="min-h-[300px] w-[28px] flex justify-center items-center ml-2">
      <figure className=" flex flex-col justify-around gap-6">
        <Image src={img1} width={28} height={30} alt="social Media Icons" />
        <Image src={img2} width={30} height={30} alt="social Media Icons" />
        <Image src={img3} width={30} height={30} alt="social Media Icons" />
        <Image src={img4} width={30} height={30} alt="social Media Icons" />
      </figure>
    </div>
  );
};

export default SocialLinks;
