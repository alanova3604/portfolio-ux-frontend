
import { motion } from "motion/react"
import Project from "./Project"

function Projects() {


    return (

      
        <motion.div
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit= {{ x: 3000, opacity: 0 }}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>
                <Project/>
         </motion.div>

    )
}

export default Projects
