'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import SlideUpText from "./SlideUpText";

export default function ProjectsSection (){
    return (
    <section id="projects" className="sm:my-36 my-20 pt-2 ">
      <SlideUpText text="projects"
        smScreenText="text-3xl"
        color="text-white/80"
        font="font-normal"
      />
      <div className="w-full h-[500px]  bg-lightgray mt-10"></div>
        </section>
    )
}