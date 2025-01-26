import { motion } from "motion/react"

export default function simple() {
  return (
    <motion.div
      className="w-32 h-32 bg-red-500 border rounded-full"
      initial={{opacity: 0.2, scale: 0.3}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 6}}
    />
  )
}
