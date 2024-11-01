//  import React from 'react'

import About from "./Components/About";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Courses from "./Course/Courses";
import Home from "./Home/Home";
import{ Route,Routes } from "react-router-dom";

function App() {
  return (
    <>

     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>

      </Routes>
     </div>
    </>
  )
}

export default App;
