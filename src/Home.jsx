import React from "react";
import Navbar from "./Nevbar";
import Structure from "./Structure";
import img1 from '../public/img/3426526-removebg-preview.png'
import { useNavigate } from "react-router-dom";


const Home=()=>{
    const navigate=useNavigate();
    return(
        <>
            <Structure 
                mainheading="Grow Your Knowledge With"
                btntext="Get Started"
                img={img1}
                click={()=>{
                    navigate("/services")
                }}
            />
        </>
    )
}

export default Home;