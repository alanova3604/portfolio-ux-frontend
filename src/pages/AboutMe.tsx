
import { motion } from "motion/react"
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
                        <EnterAnimation className="mr-5" tag="span" duration={.1}>
                            Design
                        </EnterAnimation>
                        <EnterAnimation className="mr-5" tag="span" duration={.2}>
                            &
                        </EnterAnimation>
                        <EnterAnimation className="mr-5" tag="span" duration={.3}>
                            Code
                        </EnterAnimation>
                    </h1>

                    <div className="flex flex-col gap-10">

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.4} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">Who I Am</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1} className="pl-6 text-zinc-500 text-base font-semibold leading-relaxed">
                                UX/UI Designer and Front-End Developer focused on building clear, usable, and scalable
                                digital products.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.5} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">What I Do</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.1} className="pl-6 text-zinc-500 text-base font-semibold leading-relaxed">
                                I design user-centered interfaces and implement responsive web experiences, from concept
                                to production.
                            </EnterAnimation>
                        </div>

                        <EnterAnimation tag="div" duration={.6} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">My Approach</h2>
                            </div>
                            <EnterAnimation tag="p" duration={1.2} className="pl-6 text-zinc-500 text-base font-semibold leading-relaxed">
                                I focus on clarity, usability, and accessibility, turning complex requirements into
                                intuitive user flows.
                            </EnterAnimation>
                        </EnterAnimation>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.7} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">Experience Snapshot</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.2} className="pl-6 text-zinc-500 text-base font-semibold leading-relaxed">
                                Experience working on SaaS platforms, e-commerce products, dashboards, and mobile-first
                                applications used by thousands of users.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.8} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">Tools I Use</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.3} className="pl-6 text-zinc-500 text-base font-semibold leading-relaxed">
                                Figma for UX/UI and prototyping, HTML, CSS, and JavaScript for implementation, with experience in modern frameworks and agile workflows.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={.9} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">How I Work</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.4} className="pl-6 text-zinc-500 text-base font-semibold leading-relaxed">
                                I collaborate closely with designers, developers, and stakeholders, iterating quickly and aligning design decisions with business goals.
                            </EnterAnimation>
                        </div>

                        <div className="space-y-4">
                            <EnterAnimation tag="div" duration={1} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-950 rounded-sm"></div>
                                <h2 className="text-2xl font-normal text-black">Currently</h2>
                            </EnterAnimation>
                            <EnterAnimation tag="p" duration={1.5} className="pl-6 text-zinc-500 text-base font-semibold leading-relaxed">
                                Currently working as a UX/UI Designer and Front-End Developer, open to remote and
                                international opportunities.
                            </EnterAnimation>
                        </div>

                    </div>
                </div>

                <aside
                    className="w-full lg:w-96 px-8 py-14 lg:pt-56 flex flex-col items-start lg:items-end gap-14 text-left lg:text-right">

                    <div className="space-y-5">
                        <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest">Education</h3>
                        <div className="space-y-4">
                            <div>
                                <EnterAnimation tag="p" duration={.5} className="text-black text-xl font-normal">Animation Design</EnterAnimation>
                                <EnterAnimation tag="p" duration={.6} className="text-black text-base font-light">Universidad Tecnologica de Mexico</EnterAnimation>
                            </div>
                            <div>
                                <EnterAnimation tag="p" duration={.7} className="text-black text-xl font-normal">UX Design</EnterAnimation>
                                <EnterAnimation tag="p" duration={.8} className="text-black text-base font-light">Google / Coursera</EnterAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest">Experience</h3>
                        <div>
                            <EnterAnimation tag="p" duration={.9} className="text-black text-xl font-normal">Nubir Estudio Digital</EnterAnimation>
                            <EnterAnimation tag="p" duration={1} className="text-black text-base font-light">2023 / Currently</EnterAnimation>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-widest">Projects</h3>
                        <div className="space-y-4">
                            <div>
                                <EnterAnimation tag="p" duration={1.1} className="text-black text-xl font-normal">Nubitrack</EnterAnimation>
                                <EnterAnimation tag="p" duration={1.2} className="text-black text-base font-light">Location App</EnterAnimation>
                            </div>
                            <div>
                                <EnterAnimation tag="p" duration={1.3} className="text-black text-xl font-normal">Terravento</EnterAnimation>
                                <EnterAnimation tag="p" duration={1.4} className="text-black text-base font-light">Booking</EnterAnimation>
                            </div>
                            <div>
                                <EnterAnimation tag="p" duration={1.5} className="text-black text-xl font-normal">Jewerly</EnterAnimation>
                                <EnterAnimation tag="p" duration={1.6} className="text-black text-base font-light">Ecommerce</EnterAnimation>
                            </div>
                        </div>
                    </div>

                </aside>
            </section>

        </motion.div>

    )
}

export default AboutMe
