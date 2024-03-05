"use client";
import Link from "next/link";
import AboutList from "./AboutList";
import MagneticWrapper from "./MagneticWrapper";
import SlideUpText from "./SlideUpText";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="sm:my-10 my-2">
      <div className="text-start">
        <SlideUpText
          text="about me."
          smScreenText="text-3xl"
          font="font-normal"
          color="text-white/80"
        />
      </div>
      <div className="flex flex-row sm:mt-10 mt-2 sm:gap-x-10">
        {/* NAME */}
        <div className="flex flex-col  text-white/80 font-extrabold">
          <h2 className="text-2xl sm:text-6xl font-thin">Phuwis</h2>
          <h2 className="text-2xl sm:text-6xl font-thin">Phatthanaphirom</h2>
          <h3 className="text-sm sm:text-2xl font-thin">
            Full-stack developer
          </h3>
        </div>
        {/* PICTURE */}
        <div className="flex flex-col flex-1">
          <div className="sm:ml-8 ml-4 flex flex-1 sm:bg-lightgray rounded-2xl  justify-end items-center">
            <div className="sm:hidden w-[100px] h-[100px] rounded-full bg-lightgray"></div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:mt-10 mt-4 gap-x-8  ">
        <AboutList />
        <div className="sm:mt-0 mt-12 flex justify-between flex-col ">
          <p
            className="sm:indent-8 indent-4 flex flex-1 
          text-white/60 sm:text-xl text-base text-balance font-light "
          >
            Former design engineer with 3 years of experience in commercial
            vehicle R&D. I have always been fascinated by the endless
            possibilities that complex problem-solving and innovative
            programming can provide. Now, I have decided to pursue an inspired
            career as a full-stack developer.
          </p>
          <div className="flex justify-end sm:mr-28">
            <MagneticWrapper pullRatio={0.2}>
              <Link href={"/"} >
              <div
                className="flex  sm:mt-10 mt-4 items-center justify-center
            text-sm sm:text-base 
            font-bold text-black/80 border-black/80 bg-white/90
            px-4 py-1 border-[1px] rounded-full
            hover:opacity-80 hover:cursor-pointer 
            "
              >
                Open CV
                <ChevronRight className="w-4 h-6 translate-x-1"/> 
                </div>
              </Link>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
