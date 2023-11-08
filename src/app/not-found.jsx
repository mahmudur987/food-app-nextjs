import Link from "next/link";
import img1 from "@/assets/main/empty.png";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className=" container mx-auto min-h-screen border m-3  rounded-lg flex flex-col justify-center items-center">
      <Image src={img1} width={600} height={600} />
      <p className="text-3xl font-bold">This page is Empty</p>
    </div>
  );
}
