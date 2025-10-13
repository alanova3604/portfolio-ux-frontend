import {Icon} from "@iconify/react";
import { motion } from "motion/react"
import EnterAnimation from "../components/animate/EnterAnimation";
import Projects from "../components/projects";
import { div } from "motion/react-client";

function Home({openProjects, setOpenProjects}) {


    return (

      
        <motion.div
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit= {{ x: 3000, opacity: 0 }}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>
            {openProjects ? (
                <Projects />
            ) : (   
                 <div className="py-[65px] pl-[65px] h-[100vh]">
                <div className="text-[100px] w-[1396px] font-semibold leading-[1.2]">
                    <EnterAnimation className="inline-block" tag="span" duration={.1}>
                          Designing
                    </EnterAnimation>
                    {' '}
                    <EnterAnimation tag="span" duration={.2}>
                             intuitive
                    </EnterAnimation>
                    {' '}
                    <EnterAnimation tag="span" duration={.3}>
                            experiences
                    </EnterAnimation>
                    {' '}
                    <EnterAnimation tag="span" duration={.4}>
                         with
                    </EnterAnimation>
                    {' '}
                    <EnterAnimation tag="span" duration={.5}>
                         a
                    </EnterAnimation>
                    {' '}
                    <EnterAnimation tag="span" duration={.6}>
                         Front-end
                    </EnterAnimation>
                    {' '}
                    <EnterAnimation tag="span" duration={.7}>
                         vision.
                    </EnterAnimation>   
                </div>
                <div className="text-[20px] max-w-[1120px] mt-2 leading-[1.8]">
                     <EnterAnimation tag="div" duration={.8}>
                         I’m Alan Alcalá, a UX Designer and Front-End Developer focused on creating digital products that are functional,
                    </EnterAnimation>   
                    <EnterAnimation tag="div" duration={.9}>
                         aesthetic, and easy to use. Explore my projects to see how I transform ideas into interactive, user-centered experiences.
                    </EnterAnimation>   
                </div>

                <div className="absolute bottom-[65px]">
                     <EnterAnimation tag="div" duration={1.1}>
                        <motion.button onClick={() => setOpenProjects(true)} className="text-[40px]  text-blue-950 font-bold mt-[auto] flex items-center gap-4"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            View my work
                            <Icon className="text-5xl mt-[3px]"  icon="line-md:arrow-right-circle" />
                        </motion.button>
                    </EnterAnimation> 
                </div>           
            </div>
            )}    
         </motion.div>

    )
}

export default Home
