import { handleMailClick, scrollToSection } from "@/libs/helper";
import { motion } from "framer-motion";
import { useState } from "react";
import MagneticWrapper from "./MagneticWrapper";

interface NavButtonProps {
  isMenuShow: boolean;
}
export default function NavButton({ isMenuShow }: NavButtonProps) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navButtonShow = {
    show: { scale: 1, opacity: 1 },
    hide: { scale: 0, opacity: 0 },
  };
  const openClose = {
    open: {
      width: 380,
      height: 380,
      top: "-10px",
      right: "-10px",
    },
    closed: {
      width: "0px",
      height: "0px",
      top: "5px",
      right: "5px",
      transition: { delay: 0.7 },
    },
  };

  const navText = (i: number) => ({
    open: {
      opacity: 1,
      transition: { delay: 0.2 + i * 0.1 },
    },
    closed: {
      opacity: 0,
      transition: { delay: 0.1 + (3 - i) * 0.1 },
    },
  });

  const navButtonList = ["About", "Skills", "Projects", "Contact"];

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (tel: string) => {
    navigator.clipboard.writeText(tel).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };
  return (
    <motion.div className="fixed sm:top-10 sm:right-10 top-4 right-4 z-10 ">
      <motion.div
        variants={openClose}
        initial={"closed"}
        animate={isMenuActive ? "open" : "closed"}
        className="bg-primary rounded-3xl absolute  flex flex-col justify-end"
      >
        <div className="flex  mt-[100px] flex-col text-2xl space-y-4 ml-10 text-white items-start">
          {navButtonList.map((label, index) => {
            return (
              <motion.div
                onClick={() => scrollToSection(label.toLowerCase())}
                key={index}
                variants={navText(index)}
                initial={"closed"}
                animate={isMenuActive ? "open" : "closed"}
                className="hover:cursor-pointer hover:text-black  hover:translate-x-2 transition-all"
              >
                {label}
              </motion.div>
            );
          })}
        </div>
        <div className="flex ml-10 mb-10  mt-8 space-x-10 text-white text-sm">
          <motion.div
            variants={navText(4)}
            animate={isMenuActive ? "open" : "closed"}
            className="flex-flex-col space-y-2"
          >
            <div
              onClick={() => handleMailClick("poohwis.p@gmail.com")}
              className="hover:cursor-pointer hover:text-black transition-all hover:translate-x-2"
            >
              Email
            </div>
            <div
              onClick={() => handleCopyClick("+66939109081")}
              className="hover:cursor-pointer hover:text-black transition-all hover:translate-x-2"
            >
              {isCopied ? "Copied" : "Telephone"}
            </div>
          </motion.div>
          <motion.div
            variants={navText(5)}
            animate={isMenuActive ? "open" : "closed"}
            className="flex-flex-col space-y-2 "
          >
            <div>
              <a
                target="_blank"
                href={"https://linkedin.com/in/phuwis"}
                rel="noopener noreferrer"
              >
                <div className="hover:cursor-pointer hover:text-black transition-all hover:translate-x-2">
                  Linkedin
                </div>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/Poohwis"
                rel="noopener noreferrer"
              >
                <div className="hover:cursor-pointer hover:text-black transition-all hover:translate-x-2">
                  Github
                </div>
              </a>
            </div>
          </motion.div>
          <MagneticWrapper pullRatio={0.3}>
            <motion.a
              href={
                "https://drive.google.com/file/d/1w5-vsMSFZcj46SVA_htxXgM_LBluQyex/view?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
              variants={navText(6)}
              animate={isMenuActive ? "open" : "closed"}
              className="hover:cursor-pointer flex items-center justify-center text-sm"
            >
              <p className="px-2 py-2 bg-black rounded-full">Open Resume</p>
            </motion.a>
          </MagneticWrapper>
        </div>
      </motion.div>
      <motion.div
        variants={navButtonShow}
        animate={isMenuShow || isMenuActive ? "show" : "hide"}
        initial={"hide"}
        onClick={() => {
          setIsMenuActive(!isMenuActive);
        }}
        className="overflow-hidden w-16 h-10 absolute right-0 top-0 rounded-full hover:cursor-pointer"
      >
        <motion.div
          animate={{ y: isMenuActive ? "-50%" : "0" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-16 h-10  flex items-center justify-center bg-primary text-white  ">
            <p>menu</p>
          </div>
          <div className="w-16 h-10 flex items-center justify-center bg-darkgray  text-white">
            <p>close</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
