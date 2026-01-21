import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import "../styles/components/projects.scss"

function Projects() {

    const [isVisible, setIsVisible] = useState("1")

  return (
    <motion.div
      initial={{ x: 3000 }}
      animate={{ x: 0 }}
      exit={{ x: 3000, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      >

        Hola

     
    </motion.div>
  )
}

export default Projects