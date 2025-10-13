
import { motion } from "motion/react"

function AboutMe() {

    return (

    
    
            <motion.div
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit={{ x: 3000, opacity: 0 }}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>
            <div className="bg-white py-[65px] pl-[65px] h-[100vh]">
                <span className="text-[100px]">About Me</span>

            </div>

            </motion.div>

    )
}

export default AboutMe
