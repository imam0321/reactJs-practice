import { motion } from "motion/react"

export default function TextMotion() {
  const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nostrum"
  const wordArray = text.split("")
  return (
    <div className="text-2xl text-center m-5">{
      wordArray.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: index / 10
          }}

        >{word}{""}</motion.span>
      ))
    }</div>
  )
}
