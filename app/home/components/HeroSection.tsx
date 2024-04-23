import { MovingBorderbtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function HeroSection() {
  return (
    <div className=" min-h-[80vh]  flex flex-col-reverse gap-20 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className=" space-y-12 text-center lg:text-left">
        <h1 className=" text-4xl lg:text-7xl font-bold">
          Nice to meet you!
          <br />
          <span className=" underline underline-offset-8 decoration-green-500">
            {"I am Ayodele"} {/* Escaped quotes */}
          </span>
        </h1>
        <p className=" md:w-96 text-lg text-gray-300 text-primary">
          Based in Lagos Nigeria, I am a Fullstack developer passionate about
          building a modern web application that users love
        </p>
        <Link
          href={"mailto:gabrielafolabi@gmail.com"}
          className=" inline-block group -z-20"
        >
          <Title text="Contact me" /> {/* Pass text as a prop */}
        </Link>
      </div>
      <div className="m-10 lg:m-0 md:m-0 sm:m-0">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10 dark:box"></div>
        </div>
        <div className="absolute bottom-1/2 left-2/5 transform -translate-x-1/2 -translate-y-2/4 sm:bottom-[250px] m-10 ">
          <a href="Ayodele2.docx" download="Ayodele2.docx">
            <MovingBorderbtn
              borderRadius="0.5rem"
              className="p-3 font-semibold"
            >
              <p> Available for work</p>
            </MovingBorderbtn>
          </a>
        </div>
      </div>
    </div>
  );
}
