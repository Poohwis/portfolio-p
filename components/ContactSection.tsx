"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import pp from "../assets/svg/pp.svg";

export default function ContactSection() {
  const gradientDiv1 = [];
  for (let i = 0; i <= 8; i++) {
    gradientDiv1.push(
      <div
        key={i}
        className="w-full bg-primary"
        style={{ height: 8 - i, marginBottom: i }}
      ></div>
    );
  }
  return (
    <section id="contact" className="relative flex justify-center bg-lightgray">
      {/* bg */}
      <div className="w-full absolute h-full">
        <div className="h-full flex flex-col-reverse">{gradientDiv1}</div>
      </div>
      <div
        className="w-full sm:w-[1500px] sm:flex flex-col
        sm:justify-center  mx-8 sm:py-20 py-4 relative sm:h-[300px] h-[240px]
        "
      >
        <h1 className=" sm:text-8xl text-4xl text-black/80 sm:mt-0 mt-4">
          contact
        </h1>
        {/* <ContactList /> */}
        <motion.div
          className=" absolute sm:bottom-10 bottom-4 right-0 w-20
         h-20 sm:w-36 sm:h-36 bg-lightgray  "
        >
          <Image src={pp} alt="icon" />
        </motion.div>
      </div>
    </section>
  );
}
