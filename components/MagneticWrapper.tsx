"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";

interface MagneticWrapperProps {
  children: React.ReactNode;
  pullRatio? : number
}

export default function MagneticWrapper({ children, pullRatio = 1 }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isEnable, setIsEnabled] = useState(true)

  useEffect(()=>{
    const handleResize = () =>{
      setIsEnabled(window.innerWidth > 640)
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () =>{
      window.removeEventListener("resize", handleResize)
    }
  })

  const mouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = ( clientX - (left + width / 2) ) * pullRatio;
    const y = ( clientY - (top + height / 2) ) * (pullRatio ) ;

    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return isEnable ?(
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
    >

      {children}
    </motion.div>
  ) : (
    <div ref={ref}>{children}</div>
  )
}
