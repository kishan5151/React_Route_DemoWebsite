import React from "react";
import Button from '@mui/material/Button';
import Navbar from "./Nevbar";

const Structure=(props)=>{
    
    return(
        <>
            <Navbar/>
            <div className="mainBox">
                <div className="leftPart">
                    <h1>{props.mainheading}<p className="extra"> Rk Technical</p></h1>
                    <p className="marginT peraSize">We are term of talented developer macking website</p>
                    <Button variant="outlined"  onClick={props.click} style={{marginTop:"20px",border:"1px solid #00fff3",color:"#00fff3"}}>{props.btntext}</Button>
                </div>
                <div className="rightPart">
                    <img src={props.img} alt="Image" className=" img-fluid progress-bar-animated"/>
                </div>
            </div>
        </>
    )
}
export default Structure;