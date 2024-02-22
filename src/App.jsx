import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App;