import { slideUpSingle } from "@/libs/Animation"
import { motion } from "framer-motion"

interface SlideUpTextProps {
    text : string
    isFinished : boolean
}
export default function SlideUpText ({text, isFinished} : SlideUpTextProps) {
    return(
            <div>
            {text.split("").map((word, index) => (
              <span
                key={index}
                className="overflow-hidden inline-flex relative"
              >
                <motion.span
                  variants={slideUpSingle}
                  initial="initial"
                  animate={isFinished && "open"}
                  custom={index}
                  className={`font-extrabold text-5xl sm:text-8xl ${
                    word === " " ? "mr-6" : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            </div>
    )
}