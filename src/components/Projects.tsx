import "../styles/components/projects.scss"
import {motion} from "motion/react";
import latinTaxImg from '../assets/lta/01-banner.webp';
import ClaroImg from '../assets/claro/01-banner.webp';
import logoLatin from '../assets/logo-lta.png'
import logoClaro from '../assets/claro-de-luna-logo.png'
import { Link } from 'react-router-dom';


function Projects() {


  return (
    <motion.div
      initial={{ x: 3000 }}
      animate={{ x: 0 }}
      exit={{ x: 3000, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-2 h-screen">
            <Link to="/lta-tax" className="w-full bg-[#249480] px-20 py-7 h-full
              relative
            transition-all duration-700 inline-flex flex-col justify-center items-start gap-2.5">
                <div className="transition-opacity duration-500 ease-in-out
                hover:opacity-100 opacity-0 w-full h-full z-0 bg-cover bg-center inset-0 absolute"
                     style={{ backgroundImage: `url(${latinTaxImg})` }}
                ></div>
                <div className="z-3">
                    <img className="h-14" src={logoLatin}/>
                    <div className="justify-start text-neutral-200 text-xl font-semibold font-['Instrument_Sans'] leading-10">LMS System Migration</div>
                </div>
            </Link>



            <Link to="/claro-de-luna" className="w-full bg-[#00B2DF] px-20 py-7 h-full
              relative
            transition-all duration-700 inline-flex flex-col justify-center items-start gap-2.5">
                <div className="transition-opacity duration-500 ease-in-out
                hover:opacity-100 opacity-0 w-full h-full z-0 bg-cover bg-center inset-0 absolute"
                     style={{ backgroundImage: `url(${ClaroImg})` }}
                ></div>
                <div className="z-3">
                    <img className="h-14" src={logoClaro}/>
                    <div className="justify-start text-neutral-200 text-xl font-semibold font-['Instrument_Sans'] leading-10">E-commerce UX Modernization</div>
                </div>
            </Link>
        </div>


    </motion.div>
  )
}

export default Projects