import NavbarNew from "./components/navBarNew.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import LtaTax from "./pages/Lta-Tax.tsx";
import ClaroDeLuna from "./pages/ClaroDeLuna.tsx";
import "./styles/themes/tailwind.css"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";



function App() {

  const [openProjects, setOpenProjects] = useState(false);

  const location = useLocation();


  return (

      <div className="lg:flex">
        <NavbarNew></NavbarNew>
        <div className=" min-h-[100vh] flex-1">
          <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home openProjects={openProjects} setOpenProjects={setOpenProjects}  />}/>
                  <Route path="/about-me" element={<AboutMe  />}/>
                  <Route path="/contact" element={<Contact />}/>
                  <Route path="/lta-tax" element={<LtaTax />}/>
                      <Route path="/claro-de-luna" element={<ClaroDeLuna />}/>
            </Routes>
         </AnimatePresence>
        </div>
      </div>
  )
}

export default App
