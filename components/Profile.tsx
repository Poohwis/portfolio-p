import { pageButton } from "@/libs/Animation";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import ContactSection from "./ContactSection";

interface ProfileProps {
  children: React.ReactNode;
}
export default function Profile({ children }: ProfileProps) {
  const [initialLoad, setInitialLoad] = useState(true);
  const ref1 = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["end end", "center center"],
  });

  const h1 = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const y1 = useTransform(h1, (value) => -value + 5);
  const down = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollDown = () =>{
    const windowHeight = window.innerHeight
    window.scrollTo({top: windowHeight /2, behavior: "smooth"})
  }
  return (
    <>
      <div className="z-10 w-full h-full bg-lightgray relative overflow-x-clip">
        <motion.div
        onClick={()=>scrollDown()}
          ref={ref1}
          variants={pageButton}
          initial={"initial"}
          animate={"open"}
          onAnimationComplete={() => setInitialLoad(false)}
          style={{ height: h1, y: initialLoad ? 50 : y1 }}
          className="flex justify-end items-center
          w-[120%] bg-black absolute  rounded-t-[70%] hover:cursor-pointer "
        >
          <motion.div style={{ opacity: down }} className="mr-[20%]">
            <ChevronDown width={30} height={30} color="white" />
          </motion.div>
        </motion.div>
        <section className="flex justify-center bg-black">
          <div className="sm:w-[1500px] w-full mx-8 my-10">{children}</div>
        </section>
      </div>
    </>
  );
}
