import React from 'react';
import ScrollToTop from './assets/ScrollToTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/Home';
import Projects from './assets/Projects';
import Skills from './assets/Skills';
import ContactUs from './assets/ContactUs';
import Navbar from './assets/Navbar';
import Education from './assets/Education';


function App() {


  return (
    <>
       <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
         <Routes>
         <Route path="/"  element={<Home />} />
         <Route path="/education"   element={<Education />} />
         <Route path="/skills"   element={<Skills />} />
         <Route path="/projects"   element={<Projects />} />
         <Route path="/contactUs"   element={<ContactUs />} />
         </Routes>
        </BrowserRouter> 
     
    </>
  )
}

export default App


