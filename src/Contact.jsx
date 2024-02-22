import React, { useState } from "react";
import Navbar from "./Nevbar";
import PageHeding from "./PageHeading";

const Contact=()=>{
  const [form,setForm]=useState({
    name:"",
    phone:"",
    email:"",
    mes:""
  })

  const typing=(event)=>{
    const value=event.target.value;
    const name=event.target.name;
    setForm((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })
  }
  const submit=()=>{
    alert(`Your Name is ${form.name}. My Phone Number is ${form.phone} and email is ${form.email}. Here is what i want to say ${form.mes}`)
  }

  const reset=()=>{
    setForm(()=>{
      return{
        name:"",
        phone:"",
        email:"",
        mes:""
      }
    })
  }

    return(
        <>
          <Navbar/> 
          {/* <h1>{form.name} {form.phone} {form.email} {form.mes}</h1> */}
          <PageHeding heading="Contact Us"/>
          <div className="box">
            <div className="contactbox">
              <form onSubmit={submit}>
              <div className="formEle">
                <label>Full Name :</label>
                <input type="text" placeholder="Enter Your Name" required
                  onChange={typing}
                  name="name"
                  value={form.name}
                />
              </div>
              <div className="formEle">
                <label>Phone :</label>
                <input type="number" placeholder="Enter Your Number" required
                  onChange={typing}
                  name="phone"
                  value={form.phone}
                />
              </div>
              <div className="formEle">
                <label>Email Address :</label>
                <input type="email" placeholder="Enter Email: " required
                  onChange={typing}
                  name="email"
                  value={form.email}
                />
              </div>
              <div className="formEle">
                <label>Message :</label>
                <textarea onChange={typing} required
                  name="mes"
                  value={form.mes}
                />
              </div>
              <div className="butn">
                <button type="submit" style={{marginRight:"3px"}}>Submit Form</button>
                <button value="Reset" onClick={reset}>Reset</button>
              </div>
              </form>
            </div>
          </div>
        </>
    )
}

export default Contact;