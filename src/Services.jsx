import React from "react";
import Navbar from "./Nevbar";
import Servicesdata from "./ServicesData";
import Cardx from "./Cardx";
import PageHeding from "./PageHeading";

const Services=()=>{
    return(
        <>
            <Navbar/>
            <PageHeding heading="Our Services"/>
            <div className="cardCon">
                {Servicesdata.map((ele)=>{
                     return(<Cardx key={index} img={ele.img} title={ele.title} para={ele.para}/>)
                })}
            </div>
        </>
    )
}

export default Services;
