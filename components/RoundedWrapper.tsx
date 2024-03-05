"use client";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { MouseEvent } from "react";
import gsap  from "gsap";

interface RoundedWrapperProps {
  children: React.ReactNode;
}
export default function RoundedWrapper({ children }: RoundedWrapperProps) {
  // const ref = useRef<HTMLDivElement>(null);
  // const [position, setPosition] = useState({ y: 0 });
  // let timeoutId: NodeJS.Timeout | null = null;

  // const mouseEnter = (e: MouseEvent) => {
  //   if (timeoutId) clearTimeout(timeoutId);
  //   const { height } = ref.current?.getBoundingClientRect()!;
  //   setPosition({ y: -height });
  // };

  // const mouseLeave = () => {
  //   timeoutId = setTimeout(() => {
  //     const { height } = ref.current?.getBoundingClientRect()!;
  //     setPosition({ y: -height * 2.5 });
  //   }, 300);
  // };

  // const { y } = position;


  const circle = useRef(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId : NodeJS.Timeout | null = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "100%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "100%", duration: 0.25}, "exit")
  }, [])
  
  const mouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current!.tweenFromTo('enter', 'exit')
  }

  const mouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current!.play();
    }, 300)
  }

  return (
    <div
      className="relative overflow-hidden 
     rounded-full "
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="text-black/60 -z-10 hover:text-black bg-white 
      transition px-4 py-1 sm:text-base text-sm font-base  text-nowrap">
        {children}
      </div>
      <div
        ref={circle}
        className="absolute  w-full h-[150%] z-10 bg-black rounded-full text-white flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
}
