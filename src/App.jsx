import React from "react";
import Landing from "./pages/Landing/Landing";
import AboutMe from "./pages/AboutMe/AboutMe";
import Resume from "./pages/Resume/Resume";
import Portafolio from "./pages/Portafolio/Portafolio";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import {Route,Router,Routes} from "react-router-dom" 


function App() {
  return (
  
  <Routes>
   <Route exact path="/" element={<Landing/>}/>
   <Route exact path="/AboutMe" element={<AboutMe/>}/>
   <Route exact path="/Resume" element={<Resume/>}/>
   <Route exact path="/Portafolio" element={<Portafolio/>}/>
   <Route exact path="/Skills" element={<Skills/>}/>
   <Route exact path="/Contact" element={<Contact/>}/>
   
  
  </Routes>
    // <Router>
    //   <Routes>
    // {/* <Route exact path="/" element={<Landing/>}/>
    // <Route path="/AboutMe" render={()=> <AboutMe/>}/> */}
    // </Routes>
    // </Router>
  );
}

export default App;