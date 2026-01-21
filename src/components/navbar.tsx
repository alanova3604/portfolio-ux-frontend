import '../styles/components/navbar.scss'
import Photo from "/photo.jpg";
import {Icon} from "@iconify/react";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar({openProjects}) {

    const location = useLocation(); 

    const [openNav, setOpenNav] = useState(true);

    
    
    useEffect(() => {
        setOpenNav(openProjects)

    }, [openProjects]); 

    const toggleNav = () => {
        setOpenNav(!openNav);
    }   

    const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-black font-bold"
      : "text-gray-500 hover:text-black-400";
    };

    return (

        <div className={`transition-all top-0 duration-400 justify-between sticky flex flex-col h-[100vh] py-[62px] pl-[69px] navbar ${openNav  ? " active" : " w-[300px]  "}`}>
            <button className='menu' onClick={toggleNav}>
                <Icon className="text-black text-5xl mt-[3px]"  icon="ic:round-menu" />
            </button>
            <nav className='flex flex-col gap-1 text-[20px] text-[#383838]'>
                <Link className={`pl-0 p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/")}`} to='/'>Home</Link>
                <Link className={`pl-0 p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/about-me")}`} to='about-me'>About Me</Link>
                <a className={`pl-0 p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/resume")}`} href='/Alan_Valdez_CV_UXUI_FRONTEND.pdf' target='_blank'>Resume</a>
                <Link className={`pl-0 p-3 hover:pl-5 transition-all duration-400 ${getLinkClass("/contact")}`} to='/contact'>Contact</Link>
            </nav>
            <div className="flex items-center gap-3 relative">
                <div className="photo ">
                    <img className='w-[40px] h-[40px] max-w-[40px]' src={Photo} alt="" />
                </div>
                <div className="flex gap-0 items-center">
                    <span className='text-[18px] font-semibold name'>Alan Valdez</span>
                    <span><Icon className="text-blue-600 text-3xl mt-[3px] icon"  icon="bitcoin-icons:verify-filled" /></span>
                </div>
            </div> 
        </div>
    )
}

export default NavBar
