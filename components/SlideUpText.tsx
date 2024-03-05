import { slideUpSingle } from "@/libs/Animation"
import { motion } from "framer-motion"

interface SlideUpTextProps {
    text : string
    isFinished? : boolean
    font? :string
    color? : string
    smScreenText? : string
    lgScreenText? : string
    custom? : string
}
export default function SlideUpText ({text, isFinished, color, smScreenText, lgScreenText, custom, font} : SlideUpTextProps) {
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
                  whileInView={"open"}
                  viewport={{once: true}}
                  animate={isFinished && "open"}
                  custom={index}
                  className={`
                  ${word === " " ? "sm:mr-6 mr-3" : ""}
                  ${font ? font : "font-extrabold"}
                  ${smScreenText ? smScreenText : "text-4xl"}
                  ${lgScreenText ? lgScreenText : "sm:text-7xl"}
                  ${color ? color : "text-black"}
                  ${custom ? custom : ""}`
                }
                >
                  {word}
                </motion.span>
              </span>
            ))}
            </div>
    )
}