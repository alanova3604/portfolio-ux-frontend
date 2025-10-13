
import { motion } from "motion/react"

function Project() {


    return (

      
        <motion.div
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit= {{ x: 3000, opacity: 0 }}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>

            <motion.span
                    initial={{ x: 3000, y:3000, borderRadius: "50%" }}
                    animate={{ x: 0, y: 0,  width: 2000, height: 2000, borderRadius: 0 }}
                    exit= {{ x: 3000, opacity: 0 }}
                    transition={{
                        duration: .5,
                        ease: "easeOut",
                         borderRadius: {  
                            duration: 1,  
                            ease: "easeInOut"
                        }
                    }} className="block bg-red-50 w-[50px] h-[50px] ml-[-200px]">
                
            </motion.span>
                
            <div className="py-[65px] pl-[65px] h-[100vh]">
                Pancho
                <div className="text-[100px] w-[1396px] font-semibold leading-[1.2]"> 
                </div>
                <div className="text-[20px] max-w-[1120px] mt-2 leading-[1.8]">  
                </div>        
            </div>  
         </motion.div>

    )
}

export default Project
