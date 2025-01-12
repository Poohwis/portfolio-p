"use client";
import { useRef, useState } from "react";
import Navbar from "./Navbar";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { heroDropDown, navIn, slideUp } from "@/libs/Animation";
import SlideUpText from "./SlideUpText";
import MagneticWrapper from "./MagneticWrapper";

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
  const opacityY = useTransform(smoothY, [0, 0.7], [1, 0]);

  const y = useTransform(smoothY, [0, 1], ["0%", "80%"]);
  const y2 = useTransform(smoothY, [0, 1], ["0%", "20%"]);
  const x = useTransform(smoothY, [0, 1], ["0%", "-10%"]);

  return (
    <div ref={ref} className="z-0 h-screen relative bg-secondary">
      {/* bg */}
      <div className="absolute flex justify-center items-center w-full h-full">
        <motion.div
          style={{ y }}
          className="w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]
             flex flex-col relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ opacity: { delay: 1.4 } }}
            viewport={{ once: true }}
            style={{ x, y: y2 }}
            className="absolute w-full h-full bg-black/10 rounded-full flex-1 -right-10 -top-10 -z-10"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              y: { duration: 0.5, delay: 1.2 },
              opacity: { duration: 0.5, delay: 1.2 },
            }}
            viewport={{ once: true }}
            style={{ y: y2 }}
            className="flex-1 bg-primary rounded-t-full flex justify-center items-center text-5xl text-white"
          ></motion.div>
          <motion.div
            style={{ y: y2 }}
            className="flex-1 bg-transparent rounded-b-full
            overflow-clip flex justify-evenly flex-col-reverse"
          >
            {Array.from({ length: 15 }).map((_, index) => {
              const stageredDelay = ( 14 - index ) * 0.03
              return (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    y: { duration: 0.5, delay: 1.2 + stageredDelay },
                    opacity: { duration: 0.5, delay: 1.2 + stageredDelay },
                  }}
                  viewport={{ once: true }}
                  key={index}
                  className={`w-full bg-primary hover:bg-primary/50`}
                  style={{ marginTop: 10 - index, height: 1 + index  }}
                ></motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={navIn}
        initial={"initial"}
        animate={isFinished && "open"}
        className="justify-end flex text-right sm:mr-10 mr-5 pt-10"
      >
        <Navbar />
      </motion.div>
      <motion.div
        style={{ y: textY, opacity: opacityY }}
        className="absolute bottom-1 space-y-2 pb-10 sm:pl-10 pl-4 "
      >
        {/* hero */}
        <div className="flex flex-col leading-[0.925]">
          <div className="flex flex-row text-nowrap">
            <motion.div
              variants={heroDropDown}
              initial="initial"
              animate="open"
              onAnimationComplete={() => setIsFinished(true)}
              className="font-extrabold text-4xl sm:text-8xl"
            >
              Hello there
            </motion.div>

            <SlideUpText
              text={nameFirst}
              isFinished={isFinished}
              lgScreenText="sm:text-8xl"
            />
          </div>
          <SlideUpText
            text={nameSecond}
            isFinished={isFinished}
            lgScreenText="sm:text-8xl"
          />
        </div>

        {/* description */}
        <div className=" overflow-hidden inline-flex relative">
          <motion.div
            variants={slideUp}
            initial={"initial"}
            animate={isFinished && "open"}
            className=" flex flex-col "
          >
            <div className="text-sm sm:text-xl font-normal text-nowrap text-black">
              Design engineer turned passionate coder
            </div>
            <div className="text-sm sm:text-xl font-normal text-balance text-darkgray/80">
              I&apos;m a self-taught programmer striving to become a well-rounded
              software developer.
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
