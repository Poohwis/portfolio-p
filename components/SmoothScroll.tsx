"use client";
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ContactSection from "./ContactSection";

interface SmoothScrollProps {
  children: React.ReactNode;
}
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  const { scrollYProgress } = useScroll({ target: ref });
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

//   const scrollToPostion = (targetPosition: number) => {
//     const clampedTargetPosition = Math.max(0, Math.min(1, targetPosition));

//     smoothProgress.set(clampedTargetPosition);
//   };

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} ref={ref} />
      <motion.div
        ref={contentRef}
        style={{ y: y }}
        className=" flex flex-col fixed w-screen top-0 overflow-scroll"
      >
        {children}
      </motion.div>
    </>
  );
}
