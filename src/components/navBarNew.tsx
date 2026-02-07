import {Icon} from "@iconify/react";
import Photo from "/photo.jpg";
import { Link, useLocation } from 'react-router-dom';
import cvAlan from '/src/assets/Alan_Valdez_CV_UXUI_FRONTEND.pdf'
import {useEffect, useState} from "react";

function NavBarNew() {

    const location = useLocation();

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => setOpenNav(!openNav);


    useEffect(() => {
        setOpenNav(false);
    }, [location.pathname]);

    const getLinkClass = (path: any) => {
        return location.pathname === path
            ? "text-black font-bold"
            : "text-gray-500 hover:text-black-400";
    };

    return (
        <div className={`py-4 px-6 flex justify-between items-center
         lg:flex-col lg:h-screen lg:w-[250px] lg:sticky lg:top-0 lg:shrink-0
         }`}>

            <button onClick={toggleNav} className={`group cursor-pointer h-10 w-10 rounded-lg z-20 ${openNav ? 'active' : ''} 
                lg:hidden
            `}>
                <div className="grid justify-items-center gap-1.5">
                    <span className="h-1 w-8 rounded-full bg-black transition group-[.active]:rotate-45 group-[.active]:translate-y-2.5"></span>
                    <span className="h-1 w-8 rounded-full bg-black group-[.active]:scale-x-0 transition"></span>
                    <span className="h-1 w-8 rounded-full bg-black group-[.active]:-rotate-45 group-[.active]:-translate-y-2.5"></span>
                </div>
            </button>


            <nav
                className={`absolute top-0 bg-white py-20 px-7 transition-all duration-500 flex flex-col gap-1 bg-red h-screen z-10 ${openNav ? 'left-0 w-screen ' : 'left-[-1000px] w-fit'}
                lg:static lg:py-10 lg:px-0
                `}>

                <Link className={`pl-0 text-lg p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/")}
                 lg:text-xl
                `}
                      to='/'>Home</Link>
                <Link className={`pl-0 text-lg p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/about-me")}
                 lg:text-xl
                `}
                      to='/about-me'>About Me</Link>
                <a className="pl-0 p-3 text-lg hover:pl-5 transition-all duration-400 text-gray-500" href={cvAlan}
                   target='_blank'>Resume</a>
                <Link className={`pl-0 text-lg p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/contact")}
                 lg:text-xl
                `}
                      to='/contact'>Contact</Link>
            </nav>

            <div className="mt-auto flex items-center gap-3 relative">
                <div className="photo shrink-0">
                    <img className='w-[40px] h-[40px] max-w-[40px] rounded-full' src={Photo} alt="Alan Valdez"/>
                </div>
                <div className="flex items-center gap-0 transition-opacity duration-300">
                    <span className='hidden'>Alan Valdez</span>
                    <Icon className="text-blue-600 text-3xl mt-[25px] ml-[-25px]" icon="bitcoin-icons:verify-filled"/>
                </div>
            </div>

        </div>
);
}

export default NavBarNew
