import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectComponentProps {
  header: String;
  description: String;
  words: String[];
  image: StaticImageData;
  reverse?: boolean;
}
export default function ProjectComponent({
  header,
  description,
  words,
  image,
  reverse = false,
}: ProjectComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 10,
    mass: 0.1,
  });
  const y = useTransform(smoothY, [0, 1], [-50, 20]);
  return (
    <div className="relative w-full ">
      <div
        className={`flex flex-col sm:gap-4 justify-center sm:mt-20 mt-4 , ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        } `}
      >
        <div className="inline-flex sm:flex-col flex-row items-end justify-between">
          <div  className={`flex flex-col ${reverse ? "sm:text-start" : "sm:text-end"}`}>
            <h1 ref={ref} className="text-white/80 font-semibold sm:text-4xl text-2xl">
              {header}
            </h1>
            <p className="text-white/80 text-sm sm:text-xl font-light">
              {description}
            </p>
          </div>
          <div className={ `mt-4 flex w-full flex-col items-end ${reverse ? "sm:items-start" : "sm:items-end"}` }>
            {words.map((item, index) => (
              <motion.div
                key={String(item) + index}
                initial={{x : -100}}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-white/80 sm:text-base text-sm font-light flex flex-row items-center gap-x-1"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto max-w-[1100px] rounded-lg sm:mt-0 mt-2 overflow-hidden border-[px] border-white">
          <motion.div style={{ y }}>
            <Image
              src={image}
              alt={"cover"}
              placeholder="blur"
              className="w-full scale-110 "
            />
          </motion.div>
          {/* <video src="/videos/test.mp4" autoPlay loop playsInline muted></video> */}
          {/* video */}
        </div>
      </div>
    </div>
  );
}
