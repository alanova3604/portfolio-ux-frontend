import {Icon} from "@iconify/react";
import { motion } from "motion/react"
import EnterAnimation from "../components/animate/EnterAnimation";
import Projects from "../components/Projects";

function Home({openProjects, setOpenProjects}: any) {

    return (
        <motion.div
            className="w-full h-full"
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
                /* 1. Flex-col y h-full: Para distribuir el espacio verticalmente.
                   2. px-6: Margen seguro en móviles.
                   3. md:pl-[65px]: Tu margen original en desktop.
                */
                <div className="flex flex-col justify-between h-full min-h-[80vh] px-6 py-10 md:py-[65px] md:pl-[65px]">

                    {/* Contenedor de Textos Superiores */}
                    <div>
                        {/* Título Responsivo: Empieza en 42px y crece a 100px */}
                        <div className="text-[42px] sm:text-[60px] lg:text-[90px] xl:text-[100px] font-semibold leading-[1.1] md:leading-[1.2] tracking-tight">
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

                        {/* Stack */}
                        <div className="text-sm md:text-[14px] my-6 md:my-5 text-[#555555] font-medium">
                            Stack: Vue.js 3 • Tailwind CSS • Figma • Laravel • React • Adobe
                        </div>

                        {/* Descripción */}
                        <div className="text-lg md:text-[20px] max-w-full md:max-w-[1120px] mt-2 leading-relaxed md:leading-[1.8] text-gray-700">
                            <EnterAnimation tag="div" duration={.8}>
                                I’m Alan Alcalá, a UX Designer and Front-End Developer focused on creating digital products that are functional,
                            </EnterAnimation>
                            <EnterAnimation tag="div" duration={.9}>
                                aesthetic, and easy to use. Explore my projects to see how I transform ideas into interactive, user-centered experiences.
                            </EnterAnimation>
                        </div>
                    </div>

                    {/* Botón: Ya no es absolute. Usa mt-10 para separarse en móvil y mt-auto para irse al fondo si sobra espacio */}
                    <div className="mt-12 md:mt-auto">
                        <EnterAnimation tag="div" duration={1.1}>
                            <motion.button
                                onClick={() => setOpenProjects(true)}
                                className="text-2xl md:text-[40px] text-blue-950 font-bold flex items-center gap-3 md:gap-4 group"
                                whileHover={{ x: 10 }} // Pequeño desplazamiento a la derecha es más elegante que scale
                                whileTap={{ scale: 0.95 }}
                            >
                                View my work
                                {/* El icono rota un poco al hacer hover (group-hover) */}
                                <Icon className="text-4xl md:text-5xl mt-[3px] transition-transform group-hover:rotate-45" icon="line-md:arrow-right-circle" />
                            </motion.button>
                        </EnterAnimation>
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default Home