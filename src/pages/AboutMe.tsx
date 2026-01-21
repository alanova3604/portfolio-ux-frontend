
import { motion } from "motion/react"
import {Icon} from "@iconify/react";
import EnterAnimation from "../components/animate/EnterAnimation.tsx";

function AboutMe() {

    return (


        <motion.div
            initial={{x: 3000}}
            animate={{x: 0}}
            exit={{x: 3000, opacity: 0}}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>

            <section className="flex flex-col lg:flex-row min-h-screen bg-white  overflow-hidden">

                <div className="flex-1 px-8 py-14 md:px-12 lg:px-24 flex flex-col gap-16">

                    <h1 className="text-7xl md:text-8xl lg:text-8xl font-bold text-black tracking-tight leading-[0.9]">
                        <EnterAnimation className="inline-block mr-1" tag="span" duration={.1}>
                            Design
                        </EnterAnimation>
                        <EnterAnimation className="inline-block mr-1" tag="span" duration={.2}>
                            &
                        </EnterAnimation>
                        <EnterAnimation className="inline-block mr-1" tag="span" duration={.3}>
                            Code
                        </EnterAnimation>
                    </h1>

                    <div className="flex flex-col gap-10">

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">Who I Am</h2>
                            </div>
                            <p className="pl-6 text-zinc-500 text-base font-semibold max-w-2xl leading-relaxed">
                                UX/UI Designer and Front-End Developer focused on building clear, usable, and scalable
                                digital products.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">What I Do</h2>
                            </div>
                            <p className="pl-6 text-zinc-500 text-base font-semibold max-w-2xl leading-relaxed">
                                I design user-centered interfaces and implement responsive web experiences, from concept
                                to production.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">My Approach</h2>
                            </div>
                            <p className="pl-6 text-zinc-500 text-base font-semibold max-w-2xl leading-relaxed">
                                I focus on clarity, usability, and accessibility, turning complex requirements into
                                intuitive user flows.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">Experience Snapshot</h2>
                            </div>
                            <p className="pl-6 text-zinc-500 text-base font-semibold max-w-2xl leading-relaxed">
                                Experience working on SaaS platforms, e-commerce products, dashboards, and mobile-first
                                applications used by thousands of users.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">Currently</h2>
                            </div>
                            <p className="pl-6 text-zinc-500 text-base font-semibold max-w-2xl leading-relaxed">
                                Currently working as a UX/UI Designer and Front-End Developer, open to remote and
                                international opportunities.
                            </p>
                        </div>

                    </div>
                </div>

                <aside
                    className="w-full lg:w-96 px-8 py-14 lg:pt-56 flex flex-col items-start lg:items-end gap-14 text-left lg:text-right">

                    <div className="space-y-5">
                        <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest">Education</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-black text-xl font-normal">Animation Design</p>
                                <p className="text-black text-base font-light">Universidad Tecnologica de Mexico</p>
                            </div>
                            <div>
                                <p className="text-black text-xl font-normal">UX Design</p>
                                <p className="text-black text-base font-light">Google / Coursera</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest">Experience</h3>
                        <div>
                            <p className="text-black text-xl font-normal">Nubir Estudio Digital</p>
                            <p className="text-black text-base font-light">2023 / Currently</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest">Projects</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-black text-xl font-normal">Nubitrack</p>
                                <p className="text-black text-base font-light">Location App</p>
                            </div>
                            <div>
                                <p className="text-black text-xl font-normal">Terravento</p>
                                <p className="text-black text-base font-light">Booking</p>
                            </div>
                            <div>
                                <p className="text-black text-xl font-normal">Jewerly</p>
                                <p className="text-black text-base font-light">Ecommerce</p>
                            </div>
                        </div>
                    </div>

                </aside>
            </section>

        </motion.div>

    )
}

export default AboutMe
