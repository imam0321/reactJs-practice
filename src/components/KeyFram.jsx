import { motion } from "motion/react"

export default function KeyFrame() {
  return (
    <motion.div
      className="w-32 h-32 bg-red-500 border mx-48 my-20"
      animate={{ 
        borderRadius: ["20%", "40%", "60%", "80%"], 
        rotate: [20, 50, 180, 30],
        scale: [1, 2, 1, 2]
      }}
      transition={{duration: 8}}
    />
  )
}
