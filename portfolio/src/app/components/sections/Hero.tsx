import React from "react";
import Image from "next/image";
import heroImg from "/public/hero-poster.png";
import Button from "../widgets/Button";
function Hero() {
  return (
    <section className="flex flex-wrap flex-col sm:flex-row  w-full justify-center items-center bg-rose-300 gap-3 pt-7 ">
      <div className="  font-serif w-3/4  flex justify-evenly gap-4 sm:gap-2 sm:w-5/12  md:w-2/5 lg:w-1/3 flex-col ">
        <p className=" font-serif">UX Designer</p>
        <div className="text-3xl font-bold ">
          <h1 className="text-black mb-2">Hi There, I'm</h1>
          <h1 className="text-red-500">Sarah Jones</h1>
        </div>
        <p className=" w-11/12 md:w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse,
          maiores sed iure impedit numquam?
        </p>
        <div className="flex  items-center pb-6 w-4/5 justify-between mt- sm:w-full md:w-10/12 lg:w-4/5 xl:w-3/4">
          <Button />
          <button className="mx-4 text-blacks py-2 px-7 ml-3 border-black	 bg-white">
            Portfolio
          </button>
        </div>
      </div>
      <div className="  w-2/3 sm:w-5/12 h-72 lg:w-1/3 ">
        <Image src={heroImg} alt="hero section" className="h-full" />
      </div>
    </section>
  );
}

export default Hero;
