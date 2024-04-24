"use client";

import CapsuleWrapper from "./CapsuleWrapper";
import MagneticWrapper from "./MagneticWrapper";
import SlideUpText from "./SlideUpText";

export default function SkillsSection() {
  const skills = [
    "HTML and CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Django",
    "React.js",
    "React Native",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "TailwindCSS",
    "MongoDB",
    "Express",
    "Prisma",
    "Git",
    "Figma",
    "UX/UI",
    "Go",
    "Fiber",
    "GORM",
  ];
  return (
    <section id="skills" className="sm:my-36 my-20 pt-2">
      <SlideUpText text="my tech toolbox."
        smScreenText="text-3xl"
        color="text-white/80"
        font="font-normal"
      />
      <div className="sm:grid sm:grid-cols-2 sm:mt-10 mt-2 gap-x-2">
        <div
          className="sm:flex text-white/60 sm:text-xl text-base 
        sm:items-start 
        font-light sm:indent-8 indent-4"
        >
          These are things I have learned and applied in my projects. and I&apos;m
          always eager to learn more about the current stack and new
          technologies that could expand my capabilities.
        </div>

        <div
          className=" sm:w-full sm:flex sm:flex-wrap  sm:py-2 sm:gap-x-4 
       sm:justify-center sm:items-center  sm:gap-y-4
       sm:px-2
       flex flex-wrap sm:mt-0 mt-4 gap-y-2 gap-x-2 
       "
        >
          {skills.map((skill, index)=>(
            <MagneticWrapper pullRatio={0.2} key={index}>
              <CapsuleWrapper>
              <p>{skill}</p>
              </CapsuleWrapper>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
