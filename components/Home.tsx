"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import { heroDropDown, slideRightNav, slideUp } from "@/libs/Animation";
import SlideUpText from "./SlideUpText";

export default function Home() {
  const [isFinished, setIsFinished] = useState(false);
  const nameFirst = ", I'm";
  const nameSecond = "James.";

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smoothY = useSpring(scrollYProgress, {
    mass: 0.01,
    stiffness: 200,
    damping: 15,
  });
  const textY = useTransform(smoothY, [0, 1], ["0%", "200%"]);
  const opacityY = useTransform(smoothY,[0, 0.7], [1, 0])

  return (
    <div ref={ref} className="z-0 h-screen relative">
      <motion.div
        variants={slideRightNav}
        initial={"initial"}
        animate={isFinished && "open"}
        className="justify-end flex text-right sm:mr-10 mr-5 pt-10"
      >
        <Navbar />
      </motion.div>
      <motion.div
        style={{ y: textY ,opacity: opacityY  }}
        className="absolute bottom-0 space-y-4 pb-10 sm:pl-10 pl-4 "
      >
        {/* hero */}
        <div className="flex flex-col leading-[0.925] ">
          <div className="flex flex-row text-nowrap">
            <motion.div
              variants={heroDropDown}
              initial="initial"
              animate="open"
              onAnimationComplete={() => setIsFinished(true)}
              className="font-extrabold text-5xl sm:text-8xl"
            >
              Hello there
            </motion.div>

            <SlideUpText text={nameFirst} isFinished={isFinished} />
          </div>
          <SlideUpText text={nameSecond} isFinished={isFinished} />
        </div>

        {/* description */}
        <div className=" overflow-hidden inline-flex relative">
          <motion.div
            variants={slideUp}
            initial={"initial"}
            animate={isFinished && "open"}
            className=" flex flex-col "
          >
            <div className="text-sm sm:text-xl font-semibold text-nowrap">
              Design engineer turned passionate coder
            </div>
            <div className="text-sm sm:text-xl font-semibold text-balance">
              I'm a self-taught programmer striving to become a well-rounded
              full-stack developer.
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
