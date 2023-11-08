import React from "react";
import img1 from "@/assets/main/name.png";
import img2 from "@/assets/main/name1.png";
import img3 from "@/assets/main/star2.png";
import img4 from "@/assets/main/star1.png";
import Image from "next/image";
const MainContent = () => {
  return (
    <main className="max-w-[1040px] w-full flex flex-col gap-10 pb-10">
      <section className=" w-full xl:flex justify-between items-center gap-4 ">
        <div className="  xl:w-1/2 flex flex-col gap-3 ">
          <h1 className="text-4xl font-bold">Health benefits of an avocado</h1>
          <div>
            <h3 className="text-lg font-semibold">Supports eye health:</h3>
            <p className="text-sm">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Supports eye health:</h3>
            <p className="text-sm">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>
        </div>
        <div className="flex-1  h-full flex justify-center items-center ">
          <Image src={img1} width={500} height={600} alt="avocado" />
        </div>
      </section>

      <section className="w-full flex flex-col gap-1">
        <h3 className="text-lg font-semibold">Supports eye health:</h3>
        <p className="text-sm">
          Spinach contains high levels of vitamin A and other antioxidants that
          help maintain healthy vision and protect against age-related macular
          degeneration.. Spinach contains high levels of vitamin A and other
          antioxidants that help maintain healthy vision and protect against
          age-related macular degeneration.. Spinach contains high levels of
          vitamin A and other antioxidants that help maintain healthy vision and
          protect against age-related macular degeneration.. Spinach contains
          high levels of vitamin A and other antioxidants that help maintain
          healthy vision and protect against age-related macular degeneration..
          Spinach contains high levels of vitamin A and other antioxidants that
          help maintain healthy vision and protect against age-related macular
          degeneration.. Spinach contains high levels of vitamin A and other
          antioxidants that help maintain healthy vision and protect against
          age-related macular degeneration.. Spinach contains high levels of
          vitamin A and other antioxidants that help maintain healthy vision and
          protect against age-related macular degeneration..
        </p>
      </section>
      <section className="w-full lg:flex  gap-5">
        <div className="lg:w-1/2 flex justify-center items-center ">
          <Image src={img2} width={500} height={600} alt="avocado" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-lg font-semibold">Supports eye health:</h3>
          <p className="text-[12px]">
            Spinach contains high levels of vitamin A and other antioxidants
            that help maintain healthy vision and protect against age-related
            macular degeneration.. Spinach contains high levels of vitamin A and
            other antioxidants that help maintain healthy vision and protect
            against age-related macular degeneration.. Spinach contains high
            levels of vitamin A and other antioxidants that help maintain
            healthy vision and protect against age-related macular
            degeneration.. Spinach contains high levels of vitamin A and other
            antioxidants that help maintain healthy
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col gap-2 ">
          <p className=" text-sm font-bold">Was This Helpfull?</p>
          <p className="flex gap-1">
            <Image src={img3} width={20} height={20} />
            <Image src={img3} width={20} height={20} />
            <Image src={img3} width={20} height={20} />
            <Image src={img3} width={20} height={20} />
            <Image src={img4} width={20} height={20} />
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
