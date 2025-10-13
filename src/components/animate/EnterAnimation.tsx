import { motion } from "motion/react"

function EnterAnimation({children, duration = 0.4, tag = "div"}) {
    const MotionTag = motion[tag];
    
    return (
        <MotionTag
            style={{ display: 'inline-block' }} 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                 delay: duration,    
                duration: 1,
                ease: "easeOut"
            }}
        >
             {children}
        </MotionTag>
    )
}

export default EnterAnimation