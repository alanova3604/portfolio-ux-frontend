import Navbar from "./components/navbar.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import LtaTax from "./pages/Lta-Tax.tsx";
import "./styles/themes/tailwind.css"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";



function App() {

  const [openProjects, setOpenProjects] = useState(false);

  const location = useLocation();


  return (

      <div className="flex items-start">
        <Navbar openProjects={openProjects} />
        <div className=" min-h-[100vh] w-[100%]">
          <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home openProjects={openProjects} setOpenProjects={setOpenProjects}  />}/>
                  <Route path="/about-me" element={<AboutMe  />}/>
                  <Route path="/contact" element={<Contact />}/>
                  <Route path="/lta-tax" element={<LtaTax />}/>
            </Routes>
         </AnimatePresence>
        </div>
      </div>
  )
}

export default App
