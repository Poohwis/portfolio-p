"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import AboutSection from "@/components/AboutSection";
import { ContactList } from "@/components/ContactList";
import ContactSection from "@/components/ContactSection";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import SmoothScroll from "@/components/SmoothScroll";
import { useRef, useState } from "react";
import NavButton from "@/components/NavButton";

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [isMenuShow, setIsMenuShow] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (l) => {
    if (l > 0.3) {
      setIsMenuShow(true);
    } else {
      setIsMenuShow(false);
    }
  });

  return (
    <>
      <div ref={ref} className="z-10">
        <NavButton isMenuShow={isMenuShow} />
        <SmoothScroll>
          <Home />
          <Profile>
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
          </Profile>
          <div className=" sm:h-[300px] h-[240px] relative ">
            <div
              className="h-10
            bg-gradient-to-b from-black via-black to-slate-800
            -translate-y-4 rounded-b-3xl"
            />
            <div className="w-full flex  justify-center">
            <div className="w-full sm:w-[1550px]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
                className=" flex sm:ml-10 ml-6 sm:mt-36 mt-6"
              >
                <ContactList />
              </motion.div>
            </div>
            </div>
          </div>
        </SmoothScroll>
      </div>
      <div className="-z-10 fixed bottom-0 w-screen ">
        <ContactSection />
      </div>
    </>
  );
}
