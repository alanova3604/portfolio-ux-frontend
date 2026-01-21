import {motion} from "motion/react";
import EnterAnimation from "../components/animate/EnterAnimation.tsx";


function Contact() {

    return (
        <motion.div
            initial={{ x: 3000 }}
            animate={{ x: 0 }}
            exit={{ x: 3000, opacity: 0 }}
            transition={{
                duration: .2,
                ease: "easeOut"
            }}>
            <section className="min-h-screen bg-white px-8 py-16 md:px-24 flex flex-col gap-12 justify-between">
                <header>
                    <h1 className="text-6xl md:text-8xl font-bold font-['Instrument_Sans'] tracking-tight text-black">
                        <EnterAnimation className="inline-block" tag="span" duration={.1}>
                            Let’s
                        </EnterAnimation>
                        <EnterAnimation className="inline-block" tag="span" duration={.2}>
                            Work
                        </EnterAnimation>
                        <EnterAnimation className="inline-block" tag="span" duration={.3}>
                            Together
                        </EnterAnimation>
                    </h1>
                </header>

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    <form className="flex-1 w-full space-y-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 border-b border-neutral-400 py-3">
                                <label className="block text-black/60 text-sm mb-1">Last Name</label>
                                <input type="text" className="w-full bg-transparent outline-none text-black"/>
                            </div>
                            <div className="flex-1 border-b border-neutral-400 py-3">
                                <label className="block text-black/60 text-sm mb-1">First Name</label>
                                <input type="text" className="w-full bg-transparent outline-none text-black"/>
                            </div>
                        </div>

                        <div className="border-b border-neutral-400 py-3">
                            <label className="block text-black/60 text-sm mb-1">Email</label>
                            <input type="email" className="w-full bg-transparent outline-none text-black"/>
                        </div>

                        <div className="border-b border-neutral-400 py-3">
                            <label className="block text-black/60 text-sm mb-1">Phone Number</label>
                            <input type="tel" className="w-full bg-transparent outline-none text-black"/>
                        </div>

                        <div className="border-b border-neutral-400 py-3">
                            <label className="block text-black/60 text-sm mb-1">Message</label>
                            <textarea rows="4"
                                      className="w-full bg-transparent outline-none text-black resize-none"></textarea>
                        </div>

                        <button type="submit"
                                className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center font-medium hover:scale-105 transition-transform">
                            Send
                        </button>
                    </form>

                    <aside className="w-full lg:w-1/3 flex flex-col items-end gap-10 text-right">
                        <div className="space-y-2">
                            <p className="text-stone-500 text-xs font-semibold uppercase tracking-wider">Name</p>
                            <p className="text-black text-xl">Alan Valdez</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-stone-500 text-xs font-semibold uppercase tracking-wider">Location</p>
                            <p className="text-black text-xl">Guadalajara, Mexico</p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-stone-500 text-xs font-semibold uppercase tracking-wider">Social
                                Media</p>
                            <ul className="text-black text-xl space-y-1">
                                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                                <li><a href="#" className="hover:underline">GitHub</a></li>
                                <li><a href="#" className="hover:underline">WhatsApp</a></li>
                                <li><a href="#" className="hover:underline">Figma</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

        </motion.div>
    )
}

export default Contact
