"use client";
import AboutList from "./AboutList";
import MagneticWrapper from "./MagneticWrapper";
import SlideUpText from "./SlideUpText";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import photo from "@/assets/photo/me.jpg";
import notion from "@/assets/photo/my-notion-face-transparent.png";
import Image from "next/image";

import { RESUME_LINK } from "@/libs/links";
import { useState } from "react";

export default function AboutSection() {
  const [hover, setHover] = useState(false);
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
      <div className="flex flex-row sm:mt-10 mt-2 sm:gap-x-10 ">
        {/* NAME */}
        <div className="flex flex-col  text-white/80 font-extrabold">
          <h2 className="text-2xl sm:text-6xl font-thin">Phuwis</h2>
          <h2 className="text-2xl sm:text-6xl font-thin">Phatthanaphirom</h2>
          <h3 className="text-sm sm:text-2xl font-thin">Software developer</h3>
        </div>
        {/* PICTURE */}
        <div className="flex flex-col flex-1 items-end sm:pr-20 self-end">
          <MagneticWrapper pullRatio={0.2}>
            <a target="_blank" href="https://github.com/Poohwis" rel="noopener noreferrer">
            <motion.div
              onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
              className="absolute w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] bg-transparent rounded-full z-10 hover:cursor-pointer"
            />
            </a>
            <motion.div
              animate={{ rotateY: hover ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] relative rounded-full bg-lightgray/10
                   [transform-style:preserve-3d] [perspective:1000px] flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full flex items-center justify-center rounded-full overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <Image alt="Me" src={photo} className="w-full scale-150" />
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full flex items-center justify-center border-4 border-primary rounded-full"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <Image
                  alt="Drawed me"
                  src={notion}
                  className="w-full scale-100 rounded-full"
                />
                <div className="absolute bg- px-2 text-white/80 rounded-full bottom-2">
                  my Github
                </div>
              </div>
            </motion.div>
          </MagneticWrapper>
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
            career as a software developer.
          </p>
          <div className="flex justify-end sm:mr-28">
            <MagneticWrapper pullRatio={0.2}>
              <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                <div
                  className="flex  sm:mt-10 mt-4 items-center justify-center
            text-sm sm:text-base 
            font-normal text-white/80 border-primary bg-primary
            px-4 py-1 border-[1px] rounded-full group hover:opacity-80 transition-all
            hover:cursor-pointer 
            "
                >
                  open resume
                  <ChevronRight className="w-4 h-6 translate-x-1 group-hover:-rotate-90 transition-transform" />
                </div>
              </a>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
