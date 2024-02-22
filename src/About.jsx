import React from "react";
import Structure from "./Structure";
import img2 from '../public/img/19362653-removebg-preview.png'
import { useNavigate } from "react-router-dom";

const About=()=>{
    const navigate=useNavigate();
    return(
        <>
            <Structure 
                mainheading="Welcome to About Page"
                btntext="Contact Here"
                img={img2}
                click={()=>{
                    navigate("/contact")
                }}
/>

        </>
    )
}

export default About;